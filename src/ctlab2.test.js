import { map } from "./ctlab2";

describe('map', () => {
  it('expect arr where each elem is the callback called on the corresponding element', () => {
    const input = [
      [0, -5, 34, 3],
      n => n ** 2
    ];
    const actual = map(...input);
    const expected = [0, 25, 1156, 9];

    expect(actual).toEqual(expected);
  });
});
