const serverUrl = '';

export const SERVER_URL = path => `http://ac0d6759772e911e8929102ebb5f786c-2146110952.eu-central-1.elb.amazonaws.com:9053${path || ''}`;

export const API_URL = {
  SEARCH: searchTerm => `/search?q=${encodeURIComponent(searchTerm)}`
};
