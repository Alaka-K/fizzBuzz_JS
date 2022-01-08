const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it ('return fizz if divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual('fizz');
  });

  it ( 'retrun buzz if divisible by 5', () => {
      expect(fizzbuzz(5)).toEqual('buzz');
  });

  it ('returns fizzbuzz of divisible by 15', () => {
      expect(fizzbuzz(15)).toEqual('fizzbuzz')
  });

  it ('returns the number if its not divisible by 3 or 5', () => {
      expect(fizzbuzz(2)).toEqual(2)
  });
});