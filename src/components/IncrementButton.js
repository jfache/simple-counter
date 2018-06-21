import { connect } from 'react-redux';
import GenericButton from './GenericButton';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';

const mapStateToProps = () => {
    return {
        label: '+'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const nextValue = ownProps.count + ownProps.step;
    return {
        onButtonClick: () => dispatch(push('/' + nextValue))
    };
};

const IncrementButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(GenericButton);

IncrementButton.propTypes = {
    count: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired
};

export default IncrementButton;
