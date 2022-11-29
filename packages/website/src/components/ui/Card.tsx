import { PropsWithChildren } from "react";

export const Card = (props: PropsWithChildren<{}>) => {
  return (
    <div className="rounded-3xl bg-white bg-opacity-5 p-5">{props.children}</div>
  );
};