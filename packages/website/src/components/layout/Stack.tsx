import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Stack = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    vertical?: boolean;
  }
) => {
  
  return (
    <div
      {...props}
      className={
        (props.className || "") +
        " " +
        (props.vertical ? "flex flex-row space-x-4" : "space-y-7 flex flex-col")
      }
    >
      {props.children}
    </div>
  );
};
