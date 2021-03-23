const capitalizeAndFilter = require('./capitalize-and-filter');

describe('capitalize and filter function', () => {
  it('takes an array of strings, capitalizes all strings, and filters out any string starting with f', () => {
    const stringsArray = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
    const result = capitalizeAndFilter(stringsArray);
    
    expect(result).toEqual(['THE', 'QUICK', 'BROWN', 'JUMPS', 'OVER', 'THE', 'LAZY', 'DOG']);
  });
});
