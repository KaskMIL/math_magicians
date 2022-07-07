import Big from 'big.js';

function operate(n1, n2, operation) {
  const one = Big(n1);
  const two = Big(n2);

  if (operation === '+') {
    return one.plus(two).toString;
  }

  if (operation === '-') {
    return one.minus(two).toString;
  }

  if (operation === 'x') {
    return one.times(two).toString;
  }

  if (operation === '÷') {
    try {
      return one.div(two).toString;
    } catch(err) {
      return "Can't divide by 0."
    }
  }

  if (operation === '%') {
    try {
      return one.mod(two).toString;
    } catch (err) {
      return "Cant find module as can't divide by 0."
    }
  }

  throw Error(`Unknown operation ${operation}`);
}

export default operate;