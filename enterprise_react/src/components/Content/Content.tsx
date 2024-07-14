import React, { SyntheticEvent } from "react";
import './content.css';
import ClickCounterButton from '../ClickCounterButton/ClickCounterButton';
import Counter from "../Counter/Counter";

interface ContentState {
    counter: number;
}
class Content extends React.Component<{}, ContentState> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickDecrease = this.handleClickDecrease.bind(this);
    }
    handleClick(e: SyntheticEvent) {
        this.setState({ counter: this.state.counter + 1 });
    }

    handleClickDecrease(e: SyntheticEvent) {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (
            <>
                <div>
                    <ClickCounterButton
                        onClick={this.handleClick}
                        counter={this.state.counter}
                    >
                        Don't click me
                    </ClickCounterButton>
                    <ClickCounterButton
                        onClick={this.handleClickDecrease}
                        counter={this.state.counter}
                    >
                        Click to decrease the counter
                    </ClickCounterButton>
                </div>
                <Counter counter={this.state.counter}></Counter>
            </>
        );
    }
}

export default Content;