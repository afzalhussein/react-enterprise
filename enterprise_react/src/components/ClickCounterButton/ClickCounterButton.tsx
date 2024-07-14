import React, { SyntheticEvent } from "react";

class ClickCounterButton extends React.Component<
    { counter: number; children: any, onClick: (e: SyntheticEvent<Element, Event>) => void },
  {}
> {
  private static message = "Hello";
  get getMessage() {
    return ClickCounterButton.message;
  }
  render() {
    return (
      <button {...this.props}>
        {this.props.children} at {this.props.counter} and says {this.getMessage}
      </button>
    );
  }
}

export default ClickCounterButton;
