// export const SERVER_URL = 'http://ac0d6759772e911e8929102ebb5f786c-2146110952.eu-central-1.elb.amazonaws.com:9053';
export const SERVER_URL = 'http://localhost:3001';

export const API_URL = {
  SEARCH: searchTerm => `${SERVER_URL}/search/${encodeURIComponent(searchTerm)}`
};

export const UI_URL = {
  HOME: searchTerm => `/?q=${encodeURIComponent(searchTerm || '')}`,
  RESULTS: searchTerm => `/results?q=${encodeURIComponent(searchTerm || '')}`
};
