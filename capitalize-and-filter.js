const capitalizeAndFilter = (arr) => {
  const newArr = [];
  for(const word of arr) {
    if(!word.startsWith('f'))newArr.push(word.toUpperCase());
  };
  return newArr;

};

module.exports = capitalizeAndFilter;
