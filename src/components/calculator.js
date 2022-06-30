import { PureComponent } from 'react';
import Display from './display';
import Buttons from './buttons';
// import operate from './operate';
// import calculate from './calculate';

class Calculator extends PureComponent {
  render() {
    return (
      <div id="calculator">
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default Calculator;
