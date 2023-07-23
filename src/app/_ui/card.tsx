import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface CardProps extends ComponentPropsWithoutRef<"div"> {}

const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "rounded-big border-[3px] border-light-border/60 shadow-input",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
