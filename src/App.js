import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className="App">
                <DecrementButton step={this.props.step} />
                <CounterContainer />
                <IncrementButton step={this.props.step} />
            </div>
        );
    }
}

const mapStateToProps = ({ step }) => {
    return { step };
};

export default connect(mapStateToProps)(App);
