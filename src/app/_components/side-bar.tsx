import Image from "next/image";
import avatarImg from "@assets/images/avatar.jpg";
import IconLink from "@components/icon-link";
import Icon from "@ui/icon";
import Badge from "@ui/badge";
import siteInfo from "@constants/site-info";

const SideBar = () => {
  return (
    <aside className="flex w-[280px] flex-col rounded-big bg-light-background-subtle/50 p-10">
      <div className="sticky top-10">
        <Image
          className="mx-auto mb-6 rounded-big shadow-avatar"
          src={avatarImg.src}
          alt="avatar"
          width={180}
          height={180}
        />
        <h2 className="mb-4 text-center font-medium text-light-content-emphasis">
          Nguyen <b>Xuan Vu</b>
        </h2>
        <div className="flex justify-center">
          <Badge variant="secondary">Web Developer</Badge>
        </div>
        <div className="mb-6 mt-5 flex items-center justify-center gap-x-3.5">
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
            <a
              href={`mailto:${siteInfo.email}`}
              className="hover:text-light-brand"
            >
              {siteInfo.email}
            </a>
          </li>
          <li className="flex items-center">
            <Icon name="githubLine" className="mr-3.5" size={20} />
            <a
              href={`https://${siteInfo.github}`}
              target="_blank"
              rel="noopener"
              className="hover:text-light-brand"
            >
              @nxvu699134{" "}
              <Icon name="externalLinkLine" className="mb-2 inline" size={12} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
