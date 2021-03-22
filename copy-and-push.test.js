const copyAndPush = require('./copy-and-push');

describe('copy and push function', () => {
  it('returns a new array with all items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newArr = copyAndPush(numbers, 4);

    expect(newArr).toEqual([1, 2, 3, 4]);

  });

  it('ensures the original array stays the same', () => {
    const numbers = [1, 2, 3];
    copyAndPush(numbers, 4);

    expect(numbers).toEqual([1, 2, 3]);

  });
  
});
