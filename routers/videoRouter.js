import express from "express";

export const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("user index"));
videoRouter.get("/edit", (req, res) => res.send("user edit"));
videoRouter.get("/password", (req, res) => res.send("user password"));
