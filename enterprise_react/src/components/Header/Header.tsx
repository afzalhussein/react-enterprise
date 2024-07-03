import Code from "../Code/Code";
import Link from "../Link/Link";
import Image from '../Image/Image';
import logo from '../../logo.svg';
import Dates from "../Dated/Dated";
import Mouse from "../Mouse/Mouse";
import Content from '../Content/Content';
import { SyntheticEvent } from "react";


export default function Header() {
    return <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <Code style={{ color: "blue" }}>src/App.tsx</Code> and save to reload.
            <br />
            <Dates className="App-dated" onMouseOver={(e) => {
                console.log('mouse is over with event')
                console.dir(e)
            }}>Dated</Dates>
        </p>
        <Link href="https://reactjs.org" target="_self" rel="noopener noreferrer"
            onContextMenu={handleContextMenu}
            onDoubleClick={handleDoubleClick}
            onClick={handleClick}
        >
            <Code>Learn React</Code>
        </Link>
        <Mouse />
        <Content/>
    </header>;

    function handleClick(e:SyntheticEvent) {
        e.preventDefault();
        alert(`${e.target}'Clicked!'`);
        console.log(e);
    }

    function handleDoubleClick(e:SyntheticEvent) {
        e.preventDefault();
        alert('Double clicked!');
    }

    function handleContextMenu(e:SyntheticEvent) {
        e.preventDefault();
        alert('Context not allowed!');
    }
}
