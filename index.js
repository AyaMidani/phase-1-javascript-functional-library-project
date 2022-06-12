
const collectionType = function (collection) {
    if (collection instanceof Array) {
      return collection.slice();
    } else {
      return Object.values(collection);
    }
  };

const myEach = function (collection, callback){
    let newArray=collectionType(collection);
    for(let i=0;i<newArray.length;i++)
    {
        callback(newArray[i]);
    }
    return collection;
}
const myMap= function(collection,callback){
    let newArray=collectionType(collection);
    let ModfiedArray=[]
    for(let i=0;i<newArray.length;i++)
    {
        ModfiedArray.push(callback(newArray[i]));
    }
    return ModfiedArray;
}

const myReduce= function(collection, callback, acc){
    let newArray=collectionType(collection);
    if (!acc) {
        acc = newArray[0];
        newArray = newArray.slice(1);
      }
      const length = newArray.length;
      for (let i = 0; i < length; i++) {
        acc = callback(acc, newArray[i], newArray);
      }
      return acc;
};

const myFind = function (collection, predicate) {
    let newArray=collectionType(collection);
    for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) return newArray[i];
    }
    return undefined;
}

const myFilter = function (collection, predicate) {
    let newArray=collectionType(collection);
    let ModfiedArray=[]
    for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) ModfiedArray.push(newArray[i]);
    }
    return ModfiedArray;
}

const mySize=function(collection){
    let newArray=collectionType(collection)
    return newArray.length
}

const myFirst=function(array, n){
    if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
      
    return array.slice(0, n);
}
const myLast=function(array, n){
    if (array == null) 
      return void 0;
    if (n == null) 
      return array[array.length-1];
    if (n < 0)
      return [];
      return array.slice(Math.max(array.length - n, 0));  
}

const myKeys = function (ObjectOfkeys) {
    return Object.keys(ObjectOfkeys)
}
const myValues = function (ObjectOfValus) {
    return Object.values(ObjectOfValus)
}