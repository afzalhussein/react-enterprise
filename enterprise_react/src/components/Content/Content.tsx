import React, { SyntheticEvent } from "react";
import './content.css';
import ClickCounterButton from '../ClickCounterButton/ClickCounterButton';

interface ContentState {
    counter: number;
}
class Content extends React.Component<{},ContentState> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = { counter: 0 };
    }
    handleClick(e: SyntheticEvent) {
        this.setState({ counter: this.state.counter + 1});
    }

    handleClickDecrease(e: SyntheticEvent) {
        this.setState({ counter: this.state.counter - 1})
    }
    render() {
        return (
            <div>
                <ClickCounterButton
                    onClick={this.handleClick.bind(this)}
                    className="btn btn-primary"
                >
                    Don't click me {this.state.counter} times!
                </ClickCounterButton>
                <ClickCounterButton
                    onClick={this.handleClickDecrease.bind(this)}
                >
                    Click to decrease the counter {this.state.counter}
                </ClickCounterButton>
            </div>
        );
    }
}

export default Content;