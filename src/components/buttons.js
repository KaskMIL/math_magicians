import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.buttons = this.props;
  }

  handleClick(text) {
    const { onClickBtn } = this.props;
    onClickBtn(text);
  }

  render() {
    const { buttons } = this.props;
    const list = [];
    buttons.forEach((text, index) => {
      const id = `button-${index}`;
      let button;
      if (text === '0') {
        button = (
          <button type="button" key={id} className="calcBtn zero" onClick={() => this.handleClick(text)}>{text}</button>
        );
      } else if (text === '÷' || text === 'x' || text === '-' || text === '+' || text === '=') {
        button = (
          <button type="button" key={id} className="calcBtn orange" onClick={() => this.handleClick(text)}>{text}</button>
        );
      } else {
        button = (
          <button type="button" key={id} className="calcBtn white" onClick={() => this.handleClick(text)}>{text}</button>
        );
      }
      list.push(button);
    });
    return <div className="btnCont">{list}</div>;
  }
}

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string),
  onClickBtn: PropTypes.func.isRequired,
};
Buttons.defaultProps = {
  buttons: [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    ',',
    '=',
  ],
};

export default Buttons;
