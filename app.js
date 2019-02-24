import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./routers/userRouter";
import { videoRouter } from "./routers/videoRouter";
import { globalRouter } from "./routers/globalRouter";

const app = express();

const handleHome = (req, res) => res.send("hello  from  home!!");

const handleProfile = (req, res) => {
  res.send("hell from profile");
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;
