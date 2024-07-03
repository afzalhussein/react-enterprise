import React from 'react';

class ClickCounterButton extends React.Component<any> {
    render() {
        return <button
            {...this.props}
        >
            {this.props.children} at {this.props.counter}
        </button>
    }
}

export default ClickCounterButton;