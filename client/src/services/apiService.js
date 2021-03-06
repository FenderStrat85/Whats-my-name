const apiService = {};

apiService.getNameTranslation = (name, code) => {
  return fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${process.env.VUE_APP_GOOGLE_API_KEY}`,
    {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        q: name,
        target: code,
      }),
    },
  )
    .then((res) => res.json())
    .catch((err) => console.log('error', err));
};

export default apiService;
