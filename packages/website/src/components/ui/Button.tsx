import { PropsWithChildren } from "react"

export const Button = (props: PropsWithChildren<{ primary?: boolean }>) => {
  let innerClassName = /*tw*/ "px-8 py-4 [border-radius:2rem]";
  let className =
    /*tw*/ "text-white font-medium flex [border-radius:2rem] bg-transparent font-sans bg-gradient-to-l from-blue-700 to-teal-500 overflow-hidden [padding:2px] shadow-2xl shadow-black ";
  if (props.primary) {
    innerClassName +=
      /*tw*/ " bg-transparent";
  } else {
    innerClassName +=
      /*tw*/ " bg-slate-900";

  }
  return (
    <button className={className}>
      <span className={innerClassName}>{props.children}</span>
    </button>
  );
};