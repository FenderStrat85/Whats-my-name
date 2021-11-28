const getNameTranslation = async (name, code) => {
  console.log('I got clicked');
  console.log(name);
  console.log(code);
  // return fetch(
  //   `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
  // )
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));
};

module.exports = getNameTranslation;
