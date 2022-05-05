import { ContainerModule } from "inversify";
import SampleCase from "./Sample/useCases/sample.case";
import SampleRouter from "./Sample/sample.router";

const RandomSampleContainer = new ContainerModule((bind) => {
  bind<SampleCase>(SampleCase).toSelf();
  bind<SampleRouter>(SampleRouter).toSelf();
});

export default RandomSampleContainer;
