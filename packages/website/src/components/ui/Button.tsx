import { PropsWithChildren } from "react"

export const Button = (props: PropsWithChildren<{ primary?: boolean }>) => {
  const className =
    /*tw*/ "font-medium flex rounded-3xl px-8 py-4 bg-blue-500 font-sans";
  return <button className={className}>{props.children}</button>;
};