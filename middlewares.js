import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "JTube";
  res.locals.routes = routes;
  next();
};
