import express from "express";

export const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("user index"));
globalRouter.get("/edit", (req, res) => res.send("user edit"));
globalRouter.get("/password", (req, res) => res.send("user password"));
