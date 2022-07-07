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

describe('Operate with x', () => {
  test('use multiply with two integer numbers', () => {
    const mult = operate(4, 5, 'x');
    expect(mult).toEqual('20')
  })
  test('use multiply with two integer numbers', () => {
    const mult = operate(7, 0, 'x');
    expect(mult).toEqual('0')
  })
})

describe('Operate with ÷', () => {
  test('use divide with two integer numbers', () => {
    const div = operate(80, 8, '÷');
    expect(div).toEqual('10')
  })
  test('use divide with two integer numbers', () => {
    const div = operate(40, 8, '÷');
    expect(div).toEqual('5')
  })
  test('use divide with 0', () => {
    const div = operate(40, 0, '÷');
    expect(div).toEqual("Can't divide by 0.")
  })
})

describe('Operate with %', () => {
  test('use module with two integer numbers', () => {
    const div = operate(80, 8, '%');
    expect(div).toEqual('0')
  })
  test('use module with 0', () => {
    const div = operate(40, 0, '÷');
    expect(div).toEqual("Can't divide by 0.")
  })
})

test('Should throw an error if a passed wrong operator', () => {
  expect(() => operate(3,5,'{')).toThrow(Error)
})