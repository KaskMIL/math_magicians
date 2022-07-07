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

describe('Operate with -', () => {
  test('use minus with two integer numbers', () => {
    const substract = operate(2, 5, '-');
    expect(substract).toEqual('-3')
  })
  test('use minus with two float numbers', () => {
    const substract = operate(5.5, 2.2, '-');
    expect(substract).toEqual('3.3')
  })
})