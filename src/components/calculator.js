import { PureComponent } from 'react';
import Display from './display';
import Buttons from './buttons';
// import operate from './operate';
import calculate from './calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleChanges.bind(this);
    this.getInfo = this.getInfo.bind(this);
    /* Set initial state for calculation */
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  /* Function to update state with input changes */
  handleChanges(input) {
    this.setState((state) => ({
      obj: calculate(state.obj, input),
    }));
    const { obj } = this.state;
    return obj;
  }

  getInfo() {
    const { obj } = this.state;
    return obj;
  }

  render() {
    return (
      <div id="calculator">
        <Display display={this.getInfo} keyEvent={this.handleChanges} />
        <Buttons onClickBtn={this.handleChanges} />
      </div>
    );
  }
}

export default Calculator;
