const API_ENDPOINT = "https://api.thecatapi.com/v1";

// fetch cat: `${API_ENDPOINT}/breeds/search?q=${keyword}`
// fetch image by breed id `${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed.id}`
// fetch Random image All: `${API_ENDPOINT}/images/search?limit=50`

const request = async (url) => {
  try {
    const result = await fetch(url);
    return result.json();
  } catch (e) {
    console.warn(e);
  }
};

const api = {
  fetchBreedByName: (keyword) => {
    return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
  },

  fetchImage: async (keyword) => {
    const breeds = (await api.fetchBreedByName(keyword)).map(
      (breed) => breed.id
    );
    const requests = breeds.map((breed) => {
      return request(
        `${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed}`
      );
    });

    return Promise.all(requests).then((responses) => {
      let result = [];
      responses.forEach((response) => {
        result = result.concat(response);
      });
      return result;
    });
  },

  fetchImageAll: () => {
    return request(`${API_ENDPOINT}/images/search?limit=50`);
  },
};

export { api };
