Array.prototype.reduce = 'Your implementation here.';












// Abstract Operations
function ToInteger(value) {
  var number = Number(value);

  if (number !== number) {
    return 0;
  }

  if (number === 0 || !Number.isFinite(number)) {
    return number;
  }

  return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
}

function ToLength(value) {
  var len = ToInteger(value);
  if (len <= 0) {
    return 0;
  }
  if (len > Number.MAX_SAFE_INTEGER) {
    return Number.MAX_SAFE_INTEGER;
  }
  return len;
}
