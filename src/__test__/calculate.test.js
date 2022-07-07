import calculate from '../components/calculate';

test('AC button should return an null object', () => {
  const intial = {total: '2', next: '3', operation: null};
  const result = calculate(intial, 'AC');
  expect(result).toEqual({total: null, next: null, operation: null});
})

describe('+/- button to return the inverse of a number', ()=>{
  test('next equal to 5 should return -5', ()=>{
    const initial = {total: null, next: '5', operation: null}
    const result = calculate(initial, '+/-');
    expect(result).toEqual({total: null, next: '-5', operation: null})
  })
  test('total equal -10 should return 10', ()=>{
    const initial = {total: '-10', next: null , operation: null}
    const result = calculate(initial,'+/-');
    expect(result).toEqual({total: '10', next: null, operation: null})
  })
})
