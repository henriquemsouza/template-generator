import { Router } from "express";

import RandomSampleRoutes from "./RandomSample/random-sample.routes";

const Routes = Router();

Routes.use("/sample", RandomSampleRoutes);

export default Routes;
