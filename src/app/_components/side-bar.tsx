import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import avatarImg from "@assets/images/avatar.jpg";
import IconLink from "@components/icon-link";
import Icon from "@ui/icon";
import siteInfo from "@constants/site-info";

interface SideBarProps extends ComponentPropsWithoutRef<"aside"> {}
const SideBar = (props: SideBarProps) => {
  return (
    <aside className="flex w-[280px] flex-col rounded-big bg-light-background-subtle/70 p-10">
      <div>
        <Image
          className="mx-auto mb-6 rounded-big shadow-avatar"
          src={avatarImg.src}
          alt="avatar"
          width={180}
          height={180}
        />
        <h3 className="font-heading">
          Nguyen Xuan <b>Vu</b>
        </h3>
        <div>Web Developer</div>
        <div className="flex items-center justify-center gap-x-3.5">
          <IconLink href={siteInfo.facebook} icon="facebookFill"></IconLink>
          <IconLink href={siteInfo.twitter} icon="twitterFill"></IconLink>
          <IconLink href={siteInfo.linkedin} icon="linkedinFill"></IconLink>
        </div>
        <ul className="space-y-3 text-default text-light-content">
          <li className="flex items-center">
            <Icon name="calendarLine" className="mr-3.5" size={20} /> March 04,
            1996
          </li>
          <li className="flex items-center">
            <Icon name="locationLine" className="mr-3.5" size={20} /> HCM City,
            Vietnam
          </li>
          <li className="flex items-center">
            <Icon name="smartphoneLine" className="mr-3.5" size={20} /> +84
            (xxx) xxx 025
          </li>
          <li className="flex items-center">
            <Icon name="emailLine" className="mr-3.5" size={20} />
            {siteInfo.email}
          </li>
          <li className="flex items-center">
            <Icon name="githubLine" className="mr-3.5" size={20} />
            {siteInfo.github}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;