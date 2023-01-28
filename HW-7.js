'use strict';

let map = new Map();
map.set('name', 'John');
let keys = map.keys(); // this is an object and we can't use array method for this
let array = Array.from(keys); //first turn keys to array
array.push('more'); //then use push to add more to array from keys
console.log(array);
