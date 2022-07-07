import operate from '../components/operate';

describe('Operate with +', () => {
  test('sum two integer numbers', () => {
    const sum = operate(2, 5, '+');
    expect(sum).toEqual('7')
  })
  test('sum two float numbers', () => {
    const sum = operate(2.5, 5.2, '+');
    expect(sum).toEqual('7.7')
  })
})