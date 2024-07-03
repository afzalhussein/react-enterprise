import { ClassAttributes, HTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import './dated.css';
export default function Dated(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>) {
    const date = new Date();
    return (<>{props.children}: <span className='dated' {...props}>{date.toLocaleDateString()}</span></>)
}