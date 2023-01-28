'use strict';

const array = ['PAN', 'cheaters', 'hectares', 'nap', 'ear', 'ear', 'teachers'];

const aclean = arr => {
  const map = new Map();
  for (const word of arr) {
    const result = word.toLowerCase().split('').sort().join('');
    map.set(result, word);
  }
  return Array.from(map.values());
};
console.log(aclean(array));
