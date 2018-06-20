import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    render() {
        return (
            <input type="number" value={this.props.count} disabled="disabled" />
        );
    }
}

Counter.propTypes = {
    count: PropTypes.number.isRequired
};

export default Counter;
