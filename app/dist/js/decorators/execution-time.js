export function executionTime(seconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unit = "milissegundos";
            if (seconds) {
                divisor = 1000;
                unit = "segundos";
            }
            const t1 = performance.now();
            const returnOriginalMethod = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unit}`);
        };
    };
}
