import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  logout,
  postLogin,
  getLogin,
  githubLogin,
  postGithubLogIn,
  getMe,
  facebookLogin,
  postFacebookLogin
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", {
    failureRedirect: "/login",
    successFlash: "Welcome to JTUBE",
    failureMessage: "Can't log in. please check email and/or password"
  }),
  postGithubLogIn
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    successFlash: "Welcome to JTUBE",
    failureMessage: "Can't log in. please check email and/or password"
  }),
  postFacebookLogin
);

export default globalRouter;