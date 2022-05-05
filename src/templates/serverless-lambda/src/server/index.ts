import express from "express";
import cors from "cors";

import { eventContext } from "aws-serverless-express/middleware";
import ExpressRouteNotFoundAdapter from "../shared/adapters/express-route-not-found.adapter";
import Routes from "../modules/routes";

const server = express();

server.use(cors());

server.use(eventContext());
server.use(express.json({ limit: "50mb" }));

server.use("/v1", Routes);

server.use(ExpressRouteNotFoundAdapter.adapt());

export default server;
