import React from "react";
import { stateType } from "./stateType";
import { props } from "./props";

class Radio extends React.Component<props, stateType> {
  constructor(props: any) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    let order = props.order;
    let i = 1;

    this.state = {
      outerStyle: this.getStyle(4, i),
      innerStyle: this.getStyle(1, i),
      selectedStyle: this.getStyle(2, i),
      taggerStyle: { top: order * 20, width: 25, height: 25 },
    };
  }
  getStyle(i: number, m: number) {
    let value = i * m;
    return {
      top: value,
      bottom: value,
      left: value,
      right: value,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
    handleResize(e: UIEvent): void {
    let w = 1 + Math.round(window.innerWidth / 300);
    this.setState({
      taggerStyle: {
        top: this.props.order * w * 10,
        width: w * 10,
        height: w * 10,
      },
      textStyle: { left: w * 13, fontSize: 7 * w },
    });
  }
}
