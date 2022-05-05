import GenericException from './generic.exception';
import HttpResponse from '../responses/http.response';

export default function ExceptionHandler(customFn?: (e: Error) => any) {
  return (target: object, name: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = async function (...args) {
      try {
        return await original.apply(this, args);
      } catch (err) {
        console.error(err);
        if (customFn) {
          return customFn(err);
        }
        return HttpResponse.error(
          new GenericException({
            name: err.name,
            message: err.message,
            statusCode: err?.response?.status,
            extras: {
              data: err?.response?.data,
              url: err?.response?.config?.url,
              method: err?.response?.config?.method,
            },
          }),
        );
      }
    };
    return descriptor;
  };
}
