import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  static validateObj(obj) {
    if (obj.next) {
      return obj.next;
    } if (obj.total) {
      return obj.total;
    }
    return 0;
  }

  constructor(props) {
    super(props);
    this.display = props.display;
  }

  keyPressHandle(e) {
    const { keyEvent } = this.props;
    if (e.key === '0' || e.key === '1' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9') {
      keyEvent(e.key);
    } else if (e.key === 'Escape' || e.key === 'Cancel') {
      keyEvent('AC');
    } else if (e.key === '/') {
      keyEvent('÷');
    } else if (e.key === '*') {
      keyEvent('X');
    } else if (e.key === '+') {
      keyEvent('+');
    } else {
      keyEvent('-');
    }
  }

  displayChangeHandle(e) {
    const { display } = this.props;
    e.target.value = Display.validateObj(display());
  }

  render() {
    const { display } = this.props;
    const newValue = Display.validateObj(display());
    return (
      <div className="display">
        <input id="display" name="display" type="text" value={newValue} keyEvent={(e) => this.keyPressHandle(e)} onChange={(e) => this.displayChangeHandle(e)} />
      </div>
    );
  }
}

Display.propTypes = {
  display: PropTypes.func.isRequired,
  keyEvent: PropTypes.func.isRequired,
};

export default Display;
