export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: Array<any>) {
    let returnOriginalMethod = originalMethod.apply(this, args);
    if (typeof returnOriginalMethod === "string") {
      console.log(
        `@escape em execução na classe ${this.constructor.name} para o método ${propertyKey}`
      );
      returnOriginalMethod = returnOriginalMethod.replace(
        /<script>[\s\S]*?<\/script>/,
        ""
      );
    }
    return returnOriginalMethod;
  };

  return descriptor;
}
