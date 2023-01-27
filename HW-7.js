'use strict';

const sort = (...arr) => {
  const empty = [];
  const total = empty.concat(...arr);
  total.sort((a, b) => b - a);
  return total;
};
alert(sort([5, 6, 2], [3, 7, 1], [4, 8]));
alert(sort([5, 6, 2, 4], [3, 7, 1]));
