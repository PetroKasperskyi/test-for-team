import axios from 'axios';
const API_KEY = '38251765-2ba5837bac92dd30a4b885337';

async function getImages(querry, page) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${querry}&image_type=photo&per_page=40&page=${page}
  &orientation=horizontal&safesearch=true`;
  const res = await axios.get(url);
  return res.data;
}
export { getImages };