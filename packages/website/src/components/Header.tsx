import { PropsWithChildren } from "react";

export const H1 = (props: PropsWithChildren<{}>) => {
  return <h1 className="text-lg">{props.children}</h1>;
};

export const H2 = (props: PropsWithChildren<{}>) => {
  return <h2 className="text-2xl">{props.children}</h2>;
};
