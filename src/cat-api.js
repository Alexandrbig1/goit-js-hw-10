const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_C9iEtPg54awJpTo4QX7RoGFsgMBvEc90dWA73rvw3AuZJatT06iGrkqCDbqdNZmr';

export function serviceCats() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function serviceCatsImages(breedId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
