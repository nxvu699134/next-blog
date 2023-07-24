import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface CTALinkProps extends ComponentPropsWithoutRef<"a"> {}

const CTALink = (props: CTALinkProps) => {
  const { className, href, download, children } = props;
  return (
    <a
      href={href}
      className={clsx(
        className,
        "flex items-center justify-center rounded-semi border border-blue-600 bg-light-brand px-6 py-4 text-sm text-light-brand-inverted shadow-cta transition duration-200 hover:bg-light-brand/90 hover:shadow-cta-hover active:bg-blue-600 active:shadow-none",
      )}
      download={download}
    >
      {children}
    </a>
  );
};

export default CTALink;
