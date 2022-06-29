import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Buttons extends PureComponent {
  constructor(props) {
    super(props);
    this.buttons = this.props;
  }

  render() {
    const { buttons } = this.props;
    const list = [];
    buttons.forEach((text, index) => {
      const id = `button-${index}`;
      let li;
      if (text === '0') {
        li = (
          <li id={id} className="calcBtn zero">
            {text}
          </li>
        );
      } else if (text === '/' || text === 'x' || text === '-' || text === '+') {
        li = (
          <li id={id} className="calcBtn orange">
            {text}
          </li>
        );
      } else {
        li = (
          <li id={id} className="calcBtn white">
            {text}
          </li>
        );
      }
      list.push(li);
    });
    return <ul>{list}</ul>;
  }
}

Buttons.propTypes = { buttons: PropTypes.arrayOf(PropTypes.string) };
Buttons.defaultProps = {
  buttons: [
    'AC',
    '+/-',
    '%',
    '/',
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
