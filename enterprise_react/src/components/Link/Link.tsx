import { ClassAttributes, AnchorHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

const Link = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => (<a 
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
>
    {props.children}
</a>);

export default Link;