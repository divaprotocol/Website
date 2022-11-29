import React from "react";
import { PropsWithChildren } from "react";

export const Heading = (
  props: PropsWithChildren<{
    as: "h1" | "h2" | "h3";
    size?: "sm" | "lg" | "xl";
  }>
) => {
  const classNames = {
    sm: /*tw*/ "text-xl",
    lg: /*tw*/ "text-2xl",
    xl: /*tw*/ "text-3xl",
  };
  return React.createElement(props.as, {
    ...props,
    className:
      /*tw*/ "font-serif tracking-tight font-medium " + (classNames[props.size] || "text-lg"),
  });
};
