import React from "react";
class Mouse extends React.Component {
    handleMouseOver(event:React.SyntheticEvent) {
        console.log('mouse is over the event')
        console.dir(event.target)
    }
    render() {
        return <div
            style={{ border: '1px solid red' }}
            onMouseOver={this.handleMouseOver.bind(this)}>
            Open DevTools and move your mouse cursor over here
        </div>;
    }
}

export default Mouse;