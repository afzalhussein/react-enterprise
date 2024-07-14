import { ClassAttributes, HTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";
import "./dated.css";

type DatedFnType = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLSpanElement> &
    HTMLAttributes<HTMLSpanElement>
) => JSX.Element;

const Dated: DatedFnType = (props) => {
  const date = new Date();
  return (
    <>
      {props.children}:{" "}
      <span className="dated" {...props}>
        {date.toLocaleDateString()}
      </span>
    </>
  );
};

export default Dated;
