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
      let li;
      if (text === '0') {
        li = (
          <li key={id} className="calcBtn zero" onClick={() => this.handleClick(text)}>{text}</li>
        );
      } else if (text === '÷' || text === 'x' || text === '-' || text === '+' || text === '=') {
        li = (
          <li key={id} className="calcBtn orange" onClick={() => this.handleClick(text)}>{text}</li>
        );
      } else {
        li = (
          <li key={id} className="calcBtn white" onClick={() => this.handleClick(text)}>{text}</li>
        );
      }
      list.push(li);
    });
    return <ul>{list}</ul>;
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
