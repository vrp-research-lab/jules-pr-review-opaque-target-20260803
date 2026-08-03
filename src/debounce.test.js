const {debounce} = require('./debounce');

jest.useFakeTimers();

test('debounce invokes only the final call', () => {
  const calls = [];
  const invoke = debounce(value => calls.push(value), 100);
  invoke('first');
  invoke('second');
  jest.advanceTimersByTime(100);
  expect(calls).toEqual(['second']);
});

test('debounce preserves calling context (this)', () => {
  const obj = {
    value: 'test-value',
    method: debounce(function() {
      this.calledWith = this.value;
    }, 100)
  };
  obj.method();
  jest.advanceTimersByTime(100);
  expect(obj.calledWith).toBe('test-value');
});
