const fetch = require('node-fetch');

const getQuotes = async() => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const body = await res.json();
  const result = {
    name: body[0].character,
    text: body[0].quote,
    image: body[0].image,
  };

  return result;
};
module.exports = getQuotes;
