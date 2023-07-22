import { ComponentPropsWithoutRef } from "react";
import classnames from "classnames";

type Variant = "secondary";
type Size = "md";

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant: Variant;
  size?: Size;
}

const variantClass: Record<Variant, string> = {
  secondary:
    "text-slate-500 bg-slate-200/50 ring-1 ring-inset ring-slate-500/10",
};

const sizeClass: Record<Size, string> = {
  md: "py-1.5 px-5",
};

const Badge = (props: BadgeProps) => {
  const { variant, size = "md", children } = props;
  return (
    <span
      className={classnames(
        "rounded-big",
        variantClass[variant],
        sizeClass[size],
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
