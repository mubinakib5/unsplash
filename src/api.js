import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID GIXp5XUtYI3SKacXuXf0TnFrbkRDgdI1CZHp-5jynzA',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
