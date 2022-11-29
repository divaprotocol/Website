import { HTMLAttributes, PropsWithChildren } from "react"

export const Paragraph = (
  props: PropsWithChildren<{
    className?: HTMLAttributes<HTMLParagraphElement>["className"];
  }>
) => {
  return (
    <p
      className={`leading-7 tracking-wider text-white opacity-50 max-w-3xl text-lg ${props.className}`}
    >
      {props.children}
    </p>
  );
};