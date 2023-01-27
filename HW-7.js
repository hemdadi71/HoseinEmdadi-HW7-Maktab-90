'use strict';

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
const topSalary = obj => {
  let maxsalaty = 0;
  let maxName;
  for (let [key, value] of Object.entries(obj)) {
    if (maxsalaty < value) {
      maxsalaty = value;
      maxName = key;
    }
  }
  return `maxSalary name is ${maxName}`;
};
alert(topSalary(salaries));
