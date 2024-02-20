export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: Array<any>) {
    console.log(`Método: ${propertyKey}`);
    console.log(`Parâmetros: ${JSON.stringify(args)}`);
    const returnOriginalMethod = originalMethod.apply(this, args);
    console.log(`Retorno: ${JSON.stringify(returnOriginalMethod)}`);
    return returnOriginalMethod;
  };
  return descriptor;
}
