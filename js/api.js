fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((thumbnails) => {
    console.log(thumbnails);
  });
