import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "JTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log("user", req.user);
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
