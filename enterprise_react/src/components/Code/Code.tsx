import './code.css';

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const Code = (props: { style?: {color:string}, children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (<code {...props}>{props.children}</code>)

export default Code;