export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let element = null;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Buscando elemento do DOM`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
