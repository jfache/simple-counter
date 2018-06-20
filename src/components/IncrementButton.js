import { connect } from 'react-redux';
import { incrementCounter } from '../actions';
import GenericButton from './GenericButton';
import PropTypes from 'prop-types';

const mapStateToProps = () => {
    return {
        label: '+'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onButtonClick: () => dispatch(incrementCounter(ownProps.step))
    };
};

const IncrementButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(GenericButton);

IncrementButton.propTypes = {
    step: PropTypes.number.isRequired
};

export default IncrementButton;
