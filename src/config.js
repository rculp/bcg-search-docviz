const serverUrl = 'http://ac0d6759772e911e8929102ebb5f786c-2146110952.eu-central-1.elb.amazonaws.com:9053';
export default Object.freeze({
  API_URL: {
    SEARCH: searchTerm => `${serverUrl}/search?q=${encodeURIComponent(searchTerm)}`
  }
});
