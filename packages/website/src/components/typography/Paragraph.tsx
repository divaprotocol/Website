import { PropsWithChildren } from "react"

export const Paragraph = (props: PropsWithChildren<{}>) => {
  return (
    <p className="leading-7 tracking-wider text-white opacity-50 max-w-3xl">
      {props.children}
    </p>
  );
};