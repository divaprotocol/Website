import { HTMLAttributes, PropsWithChildren } from "react"

export const Highlight = (
  props: PropsWithChildren<{
    className?: HTMLAttributes<HTMLSpanElement>["className"];
  }>
) => {
  return (
    <span
      className={`bg-gradient-to-l bg-clip-text from-blue-700 to-teal-500 text-transparent font-bold ${
        props.className || ""
      }`}
    >
      {props.children}
    </span>
  );
};