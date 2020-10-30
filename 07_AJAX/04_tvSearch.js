const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  // const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
  const config = { params: { q: searchTerm } };
  const res = await axios.get('http://api.tvmaze.com/search/shows', config);
  clearImages();
  makeImages(res.data);
  form.elements.query.value = '';
})

const makeImages = (shows) => {
  for(let result of shows) {
    if(result.show.image && result.show.externals.imdb) {
      const newA = document.createElement('a');
      newA.href = `https://www.imdb.com/title/${result.show.externals.imdb}`;
      newA.target = '_blank';
      const newImg = document.createElement('img');
      newImg.src = result.show.image.medium;
      newA.append(newImg);
      document.body.append(newA);
    }
  }
}

const clearImages = () => {
  const as = document.querySelectorAll('a')
  for(let a of as) {
    document.body.removeChild(a)
  }
}