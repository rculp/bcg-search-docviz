import { SERVER_URL } from 'config';

describe('config', () => {

  it('generates the correct server url', () => {
    expect(SERVER_URL()).toEqual(SERVER_URL(''));
  });
});