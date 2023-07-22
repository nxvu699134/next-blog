import { ComponentPropsWithoutRef } from "react";
import Icon, { IconString } from "@ui/icon";

interface IconLinkProps extends ComponentPropsWithoutRef<"a"> {
  icon: IconString;
}

const IconLink = (props: IconLinkProps) => {
  const { href, icon } = props;
  return (
    <a
      href={href}
      className="text-light-content-emphasis hover:text-light-brand-emphasis"
      target="_blank"
      rel="noopener"
    >
      <Icon name={icon} size={18}></Icon>
    </a>
  );
};

export default IconLink;
