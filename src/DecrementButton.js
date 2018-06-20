import { connect } from 'react-redux';
import { decrementCounter } from './actions';
import GenericButton from './GenericButton';
import PropTypes from 'prop-types';

const mapStateToProps = () => {
    return {
        label: '-'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onButtonClick: () => dispatch(decrementCounter(ownProps.step))
    };
};

const DecrementButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(GenericButton);

DecrementButton.propTypes = {
    step: PropTypes.number.isRequired
};

export default DecrementButton;
