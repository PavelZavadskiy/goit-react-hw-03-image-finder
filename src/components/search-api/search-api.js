import axios from 'axios';

const API_KEY = '38497169-7bd98392067bf2a90cc1b3ff8';

const getImages = async (searchString, page, countInPage) => {
  const paramsObj = {
    key: API_KEY,
    q: searchString,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: countInPage,
    page: page,
  };
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`https://pixabay.com/api/?${params}`);
};

export { getImages };
