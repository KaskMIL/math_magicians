import calculate from '../components/calculate';

test('AC button should return an null object', () => {
  const intial = {total: '2', next: '3', operation: null};
  const result = calculate(intial, 'AC');
  expect(result).toEqual({total: null, next: null, operation: null});
})