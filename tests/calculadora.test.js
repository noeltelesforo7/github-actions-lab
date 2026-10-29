const { sumar, restar } = require('../src/calculadora');

describe('Calculadora', () => {
  test('suma dos números correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('resta dos números correctamente', () => {
    expect(restar(10, 4)).toBe(6);
  });
});