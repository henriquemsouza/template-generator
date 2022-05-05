import { OK } from 'http-status';
import { injectable } from 'inversify';
import HttpResponse from '../../../../shared/responses/http.response';
import ExceptionHandler from '../../../../shared/exceptions/exception-handler';
import { UseCase } from '../../../../shared/contracts';
import { SampleResponse } from '../interfaces/sample.interface';

@injectable()

export default class SampleCase implements UseCase {
  @ExceptionHandler()
  async execute() {
    const randomString = `${Math.floor(Math.random() * (10 - 1 + 10))}`;

    return HttpResponse.success<SampleResponse>({
      body: {
        message: randomString,
      },
      statusCode: OK,
    });
  }
}
