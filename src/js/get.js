import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35042954-ad7bcdd724499d3eab219e3fa';
export async function getImgs(query, page) {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );
  return response.data;
}

console.log(getImgs);
