import { connect } from 'react-redux';
import GenericButton from './GenericButton';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';

const mapStateToProps = () => {
    return {
        label: '-'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const nextValue = ownProps.count - ownProps.step;
    return {
        onButtonClick: () => dispatch(push('/' + nextValue))
    };
};

const DecrementButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(GenericButton);

DecrementButton.propTypes = {
    count: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired
};

export default DecrementButton;
