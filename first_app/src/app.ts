function merge<T extends object, U extends object>(objA:T, objB:U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Tanzim'}, {age: 28});

console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({name: "Tanzim"}, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item:T) {
    this.data.push(item);
  }

  removeItem(item:T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Tanzim');
textStorage.addItem('Rizwan');
textStorage.removeItem('Tanzim');
console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(5);
numberStorage.addItem(51);
numberStorage.removeItem(5);
console.log(numberStorage.getItem());

// const objectStorage = new DataStorage<object>();
// const objOne = {name: 'tanzim'};
// objectStorage.addItem(objOne);
// objectStorage.addItem({name: 'rizwan'});
// //....
// objectStorage.removeItem(objOne);
// console.log(objectStorage.getItem());