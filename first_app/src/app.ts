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


// Execution Bottom Up
@Logger('LOGGING - PERSON')
@WithTemplate('<h1>Person Object</h1>','app')
class Person {
  name = 'Tanzim';

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

class Product {
  @Log
  title:string;
  private _price:number;

  set price(val:number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t:string, p:number) {
    this.title = t;
    this._price = p;
  }

   getPriceWithTax(tax:number) {
     return this._price * (1 + tax);
   }
}

// -- until video 109 