import { PropsWithChildren } from "react"

export const Highlight = (props: PropsWithChildren<{}>) => {
  return (
    <span className="bg-gradient-to-l bg-clip-text from-blue-700 to-teal-500 text-transparent font-bold">
      {props.children}
    </span>
  );
};