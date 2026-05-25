import axios from 'axios';

const API_KEY = '56017370-7aa7005f41ba7433eba06fcfc';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });


  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return response.data;
}