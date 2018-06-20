import { connect } from 'react-redux';
import { decrementCounter } from './actions';
import GenericButton from './GenericButton';

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenericButton);
