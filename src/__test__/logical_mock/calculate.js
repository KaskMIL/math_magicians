import { objectOf } from 'prop-types';
import operate from '../../__test__/logical_mock/operate';

function isNumber(num) {
  return !!num.match(/[0-9]+/);
}

function calculate(dataObj, button) {
  if (button === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    }
  }
  
  if (isNumber(button)) {
    if (button === '0' && dataObj.next === '0') {
      return {};
    }

    // If there is an operation, update next
    if (dataObj.operation) {
      if (dataObj.next && dataObj.next !== '0') {
        return {...dataObj, next: dataObj.next + button};
      }
      return {...dataObj, next: button};
    }

    // If there is NOT an operation, update next and clear total
    if (dataObj.next && dataObj.next !== '0') {
      return {
        next: dataObj.next + button,
        total: null,
      };
    }
    return {
      next: button,
      total: null,
    }
  }

  if (button === '.') {
    if (dataObj.next) {
      if (dataObj.next.includes('.')) {
        return {...dataObj};
      }
      return {...dataObj, next: `${dataObj.next}.`};
    }

    if (dataObj.operation) {
      return {...dataObj, next: '0.'};
    }

    if (dataObj.total) {
      if (dataObj.total.includes('.')) {
        return {};
      }
      return { ...dataObj, next: `${dataObj.total}.`};
    }
    return {...dataObj, next: '0.'};
  }

  if (button === '=') {
    if (dataObj.next && dataObj.operation) {
      return {
        total: calculate(dataObj.total, dataObj.next, dataObj.operation),
        next: null,
        operation: null,
      }
    }
    return {};
  }

  if (button === '+/-') {
    if (dataObj.next) {
      return {...dataObj, next: (-1 * parseFloat(dataObj.next)).toString()};
    }
    if (dataObj.total) {
      return {...dataObj, total: (-1 * parseFloat(dataObj.total)).toString};
    }
    return {};
  }

  // User press an operation after pressing '='
  if (!dataObj.next && dataObj.total && !dataObj.operation) {
    return {...dataObj, operation: button};
  }

  // User press operation button and there is an existing operation
  if (dataObj.operation) {
    if (dataObj.total && !dataObj.next) {
      return {...dataObj, operation: button};
    }

    if (!dataObj.total) {
      return {total: 0, opration: button};
    }

    return {
      total: operate(dataObj.total, dataObj.next, dataObj.operation),
      next: null,
      operation: button,
    };
  }

  // User hasn't press number yet, just save operation
  if (!dataObj.next) {
    return {operation: button};
  }

  // save operation and shift next into total
  return {
    total: dataObj.next,
    next: null,
    operation: button,
  }
}