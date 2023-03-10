import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Options } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const buttons = [...this.props.options];

    return (
      <Options onClick={this.props.onLeaveFeedback}>
        {buttons.map(button => (
          <li key={button}>
            <button type="button" name={button}>
              {button}
            </button>
          </li>
        ))}
      </Options>
    );
  }
}
