import { Sum } from './Sum';

test('Sum() should return sum of numbers', () =>
{
    const output = Sum(1, 2);

    expect(output).toBe(3);
});

