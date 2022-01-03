import { Container } from "inversify";

import RandomSampleContainer from "../../modules/RandomSample/RandomSampleContainer";
import { Newable } from "../../shared/types";
import AxiosHttpHandler from "../http/AxiosHttpHandler";

const container = new Container({ defaultScope: "Singleton" });

container.bind<AxiosHttpHandler>(AxiosHttpHandler).toSelf();

container.load(RandomSampleContainer);

export default container;

export const GetFromContainer = <T>(obj: Newable<T>) => container.get<T>(obj);
