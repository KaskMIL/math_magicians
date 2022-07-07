import calculate from '../components/calculate';

test('AC button should return an null object', () => {
  const intial = { total: '2', next: '3', operation: null };
  const result = calculate(intial, 'AC');
  expect(result).toEqual({ total: null, next: null, operation: null });
});

describe('+/- button to return the inverse of a number', () => {
  test('next equal to 5 should return -5', () => {
    const initial = { total: null, next: '5', operation: null };
    const result = calculate(initial, '+/-');
    expect(result).toEqual({ total: null, next: '-5', operation: null });
  });
  test('total equal -10 should return 10', () => {
    const initial = { total: '-10', next: null, operation: null };
    const result = calculate(initial, '+/-');
    expect(result).toEqual({ total: '10', next: null, operation: null });
  });
});

describe('If button = . should be include on next', () => {
  test('If next already has . shoould return the same object', () => {
    const init = { total: null, next: '2.', operation: null };
    const result = calculate(init, '.');
    expect(result).toEqual(init);
  });
  test('If next doesnt has . should return next with .', () => {
    const init = { total: null, next: '2', operation: null };
    const result = calculate(init, '.');
    expect(result).toEqual({ total: null, next: '2.', operation: null });
  });
  test('If there is an operation already', () => {
    const init = { total: null, next: null, operation: '+' };
    const result = calculate(init, '.');
    expect(result).toEqual({ total: null, next: '0.', operation: '+' });
  });
  test('If there is an total already', () => {
    const init = { total: '2.1', next: null, operation: null };
    const result = calculate(init, '.');
    expect(result).toEqual({});
  });
  test('If there is an operation already', () => {
    const init = { total: null, next: null, operation: null };
    const result = calculate(init, '.');
    expect(result).toEqual({ total: null, next: '0.', operation: null });
  });
});

describe('Test button =', () => {
  test('If there are a value of next and operation', () => {
    const init = { total: '3', next: '2', operation: '+' };
    const result = calculate(init, '=');
    expect(result).toEqual({ total: '5', next: null, operation: null });
  });
  test('If there are a value of next and operation', () => {
    const init = { total: '3', next: '2', operation: null };
    const result = calculate(init, '=');
    expect(result).toEqual({});
  });
});
