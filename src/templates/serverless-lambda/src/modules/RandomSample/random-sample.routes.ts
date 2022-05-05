import { RoutesBuilder } from "../../utils/routes-builder.utils";
import SampleRouter from "./Sample/sample.router";

const RandomSampleRoutes = new RoutesBuilder()
  .get("/initial-route", SampleRouter)
  .build();

export default RandomSampleRoutes;
