import { ComponentPropsWithoutRef } from "react";
import classnames from "classnames";

interface CardProps extends ComponentPropsWithoutRef<"div"> {}

const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div
      className={classnames(
        "rounded-big border-[3px] border-light-border/60 shadow-input",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
