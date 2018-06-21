import React, { Component } from 'react';
import Counter from './Counter';

class CounterContainer extends Component {
    render() {
        return <Counter count={this.props.count} />;
    }
}

export default CounterContainer;
