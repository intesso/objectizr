
module.exports = function objectizr(input, fill) {

  // input type falsy like `undefined` or `null`
  if (!input) return input;

  // input type: `Object`
  if (typeof input === 'object' && !Array.isArray(input)) {
    if (typeof fill === 'undefined') return input;
    return _toObject(Object.keys(input), fill);
  }

  var arr = undefined;

  // input type: `Array`
  if (Array.isArray(input)) {
    arr = input;
  }
  // input type: comma separated `String`
  else if (typeof input === 'string') {
    arr = input.replace(/\s/g, '').split(',');
  }
  // input type: unknown
  else {
    return input;
  }

  // create object.
  return _toObject(arr, fill);
  function _toObject(array, fill) {
    var obj = {};
    var fn = typeof fill === 'function';
    array.forEach(function(value, i, arr){
      obj[value] = fn ? fill(value, i, arr) : fill;
    });
    return obj;
  }
}