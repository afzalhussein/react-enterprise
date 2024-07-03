import React from 'react';

class ClickCounterButton extends React.Component<any> {
    render() {
        return <button
            {...this.props}
        >
            {this.props.children}
        </button>
    }
}

export default ClickCounterButton;