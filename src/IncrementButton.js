import { connect } from 'react-redux';
import { incrementCounter } from './actions';
import GenericButton from './GenericButton';

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenericButton);
