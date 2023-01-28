'use strict';

const values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  'John',
  ':-O',
  1,
  1,
  5,
  2,
  true,
  true,
  false,
];

const unique = arr => {
  const filter = arr.filter((item, index) => arr.indexOf(item) === index);
  return filter;
};
console.log(unique(values));
