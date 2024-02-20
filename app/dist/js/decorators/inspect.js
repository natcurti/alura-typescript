export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Método: ${propertyKey}`);
        console.log(`Parâmetros: ${JSON.stringify(args)}`);
        const returnOriginalMethod = originalMethod.apply(this, args);
        console.log(`Retorno: ${JSON.stringify(returnOriginalMethod)}`);
        return returnOriginalMethod;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map