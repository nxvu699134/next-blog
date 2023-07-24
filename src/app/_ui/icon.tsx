import { ComponentPropsWithoutRef } from "react";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGithubLine,
  RiCalendarEventLine,
  RiDoubleQuotesL,
} from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import {
  HiOutlineDeviceMobile,
  HiOutlineExternalLink,
  HiOutlineDownload,
} from "react-icons/hi";

const iconMap = Object.freeze({
  facebookFill: RiFacebookFill,
  twitterFill: RiTwitterFill,
  linkedinFill: RiLinkedinFill,
  githubLine: RiGithubLine,
  calendarLine: RiCalendarEventLine,
  locationLine: SlLocationPin,
  emailLine: MdMailOutline,
  smartphoneLine: HiOutlineDeviceMobile,
  externalLinkLine: HiOutlineExternalLink,
  doubleQuoteL: RiDoubleQuotesL,
  downloadFill: HiOutlineDownload,
});

export type IconString = keyof typeof iconMap;

interface IconProps extends ComponentPropsWithoutRef<"span"> {
  name: IconString;
  size?: number;
}

const Icon = (props: IconProps) => {
  const { name, size = 16, className } = props;
  const IconComponent = iconMap[name];
  return <IconComponent className={className} size={size} />;
};

export default Icon;
