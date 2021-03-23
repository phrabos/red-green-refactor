const getQuotes = require('./quotes');

describe('get quotes function', () => {
  it('returns an object of a single random quote with a name, text, and image property', async() => {
    const quote = await getQuotes();

    expect(quote).toEqual({ name: expect.any(String), text: expect.any(String), image: expect.any(String) });
  });
});
