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
   for (let [key, value] of Object.entries(a)){
      if (value instanceof Object){
        deepFreeze(value);
      } else {
        Object.defineProperty(a, key, {value: value, configurable: false, writable: false, enumerable: true});
      }
    }
  Object.seal(a);  
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