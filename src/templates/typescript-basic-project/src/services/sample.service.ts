import { SampleResponse } from "../interfaces/sample.interface";

const SampleService = (): SampleResponse => {
  const randomString = `${Math.floor(Math.random() * (10 - 1 + 100))}`;

  const response = {
    result: randomString,
  };

  return response
};

export { SampleService };
