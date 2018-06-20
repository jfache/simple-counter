import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericButton extends Component {
    render() {
        return (
            <input
                type="button"
                value={this.props.label}
                onClick={() => this.props.onButtonClick()}
            />
        );
    }
}

GenericButton.propTypes = {
    label: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

export default GenericButton;
