function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template:string, hookId:string){
  return function(_:Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>Person Object</h1>','app')
class Person {
  name = 'Tanzim';

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);