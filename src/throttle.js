function throttle(fn, wait) {
  let last = -Infinity;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      return fn(...args);
    }
  };
}

module.exports = {throttle};
