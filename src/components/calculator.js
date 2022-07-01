import { useState } from 'react';
import Display from './display';
import Buttons from './buttons';
import calculate from './calculate';

const Calculator = () => {
  const [calcObj, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  /* Function to update state with input changes */
  const handleChanges = (input) => {
    setCalc(calculate(calcObj, input));
    return calcObj;
  };
  /* Function to show data */
  const getInfo = () => calcObj;

  return (
    <div id="calculator">
      <Display display={getInfo} keyEvent={handleChanges} />
      <Buttons onClickBtn={handleChanges} />
    </div>
  );
};

export default Calculator;
