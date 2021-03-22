const getName = require('./get-name');

describe('get name property from an object', () => {
  it('takes in an object and return the name property', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const objName = getName(spot);

    expect(objName).toEqual('spot');
  });

  it('takes in an object and return the name property', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const objName = getName(character);

    expect(objName).toEqual('Aang');
  });
});
