const {throttle} = require('./throttle');

test('throttle invokes at most once per interval', () => {
  const originalNow = Date.now;
  let now = 1000;
  Date.now = () => now;
  try {
    const calls = [];
    const invoke = throttle(value => calls.push(value), 100);
    invoke('first');
    now = 1050;
    invoke('blocked');
    now = 1100;
    invoke('second');
    expect(calls).toEqual(['first', 'second']);
  } finally {
    Date.now = originalNow;
  }
});
