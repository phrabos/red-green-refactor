const getName = require('./get-name');

describe('get name property from an object', () => {
  it('takes in an object and return the name property', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const objName = getName(spot);

    expect(objName).toEqual('spot');
  });
});
