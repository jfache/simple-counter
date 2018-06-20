import React, { Component } from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';

class CounterContainer extends Component {
    render() {
        return <Counter count={this.props.count} />;
    }
}

function mapStateToProps({ count }) {
    return {
        count
    };
}

export default connect(mapStateToProps)(CounterContainer);
