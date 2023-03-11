import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  static defaultProps = { title: '' };

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}
