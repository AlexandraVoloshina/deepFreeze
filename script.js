var a = { 
  x: 1, 
  y: 2, 
  z: {
    a: 1,
    b: 2,
    c: 3}, 
  u: undefined, 
  v: null};

console.log(a);  

//Функция аналог Object.freeze() + обрататывает вложенные объекты
function deepFreeze(a){
  Object.preventExtensions(a);
  let keysA = Object.keys(a);
  let valueA = Object.values(a);
  for (let i = 0; i < keysA.length; i++){
    if (valueA[i] instanceof Object){
      deepFreeze(valueA[i]);
    } else {
      Object.defineProperty(a, keysA[i], { value: valueA[i], configurable: false, writable: false, enumerable: true });
    }
  }
  return a;  
}

deepFreeze(a);
console.log(a);  
delete a.y;
console.log(a); 
a.h = 12;
console.log(a); 
a.g = {q: 4, g: 12};
console.log(a); 
a.z.a = 12;
console.log(a);