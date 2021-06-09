import { filter, findIndex, map } from './ctlab2.js';

describe('map', () => {
  it('expect map to square each element', () => {
    const input = [
      [0, -5, 34, 3],
      n => n ** 2
    ];
    const actual = map(...input);
    const expected = [0, 25, 1156, 9];

    expect(actual).toEqual(expected);
  });

  it('expect map to get first char of each string', () => {
    const input = [
      ['hello', 'World', 'of', 'whirl', 'crap'],
      str => str[0]
    ];
    const actual = map(...input);
    const expected = ['h', 'W', 'o', 'w', 'c'];

    expect(actual).toEqual(expected);
  });
});

describe('filter', () => {
  it('filter out odd numbers', () => {
    const input = [
      [0, -5, 34, 3, 14, -2],
      n => (n + 1) % 2
    ];
    const actual = filter(...input);
    const expected = [0, 34, 14, -2];

    expect(actual).toEqual(expected);
  });
});

describe('findIndex', () => {
  it('find a number in a list of numbers', () => {
    const input = [
      [0, -5, 34, 3, 14, -2],
      34
    ];
    const actual = findIndex(...input);
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  it('returns -1 for missing element', () => {
    const input = [
      [0, -5, 34, 3, 14, -2],
      'h'
    ];
    const actual = findIndex(...input);
    const expected = -1;

    expect(actual).toEqual(expected);
  });
});
