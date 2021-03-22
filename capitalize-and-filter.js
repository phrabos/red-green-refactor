const capitalizeAndFilter = (arr) => {
  return arr.filter(word => !word.startsWith('f')).map(wordLowerCase => wordLowerCase.toUpperCase());

};

module.exports = capitalizeAndFilter;
