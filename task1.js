Array.prototype.filterArray = function (callback, thisArg) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

