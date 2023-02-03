export function minBy(array, cb) {
  var lowest;
  for ( var i = 0; i < array.length; i++) {
    if (cb(array[i]) != undefined) {
      if (lowest === undefined) {
        lowest = array[i];
      } else if (cb(lowest) > cb(array[i])) {
        lowest = array[i];
      }
    }
  }
  return lowest;
}

export function maxBy(array, cb) {
  var highest;
  for ( var i = 0; i < array.length; i++) {
    if (cb(array[i]) != undefined) {
      if (highest === undefined) {
        highest = array[i];
      } else if (cb(highest) < cb(array[i])) {
        highest = array[i];
      }
    }
  }
  return highest;
}
