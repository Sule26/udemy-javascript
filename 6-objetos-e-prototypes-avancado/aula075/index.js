// new Object -> Object.prototype

const objA = {
  chaveA: "A",
  //__proto__: Object.prototype
};

const objB = {
  chaveB: "B",
  //__proto__: objA
};

const objC = {
    chaveC: "C",
}

Object.setPrototypeOf(objB, objA); // ObjB tem chaveA e chaveB
Object.setPrototypeOf(objC, objB); // ObjC tem chaveA, chaveB e chaveC

console.dir(objA);
console.dir(objB);
console.dir(objC);
