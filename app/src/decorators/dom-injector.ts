export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`
    );
    let element: HTMLElement | null = null;
    const getter = function () {
      if (!element) {
        element = <HTMLElement>document.querySelector(selector);
        console.log(`Buscando elemento do DOM`);
      }
      return element;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
