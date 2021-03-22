const copyAndPush = require('./copy-and-push');

describe('some test', () => {
  it('returns a new array with all items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newArr = copyAndPush(numbers, 4);

    expect(newArr).toEqual([1, 2, 3, 4]);
  });
});
