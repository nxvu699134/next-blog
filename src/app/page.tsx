import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Card from "@ui/card";
import Quote from "@ui/quote";
import designImg from "@assets/images/icon-design.svg";
import developmentImg from "@assets/images/icon-development.svg";
import responsiveImg from "@assets/images/icon-responsive.svg";
import sourceCodeImg from "@assets/images/icon-source-code.svg";
import scImg from "@assets/images/icon-sc.svg";
import vimImg from "@assets/images/icon-vim.svg";
import fenixImg from "@assets/images/fenix.webp";
import cheerImg from "@assets/images/icon-cheer.svg";

interface FeatureCardProps extends ComponentPropsWithoutRef<"div"> {
  imgSrc: string;
  header: string;
  desc: string;
}

const FeatureCard = (props: FeatureCardProps) => {
  const { imgSrc, header, desc } = props;

  return (
    <Card className="flex flex-col items-center p-6 text-center">
      <Image
        src={imgSrc}
        className="mb-4"
        alt="web design"
        width={40}
        height={40}
      />
      <h4 className="mb-3">{header}</h4>
      <p>{desc}</p>
    </Card>
  );
};

const features = [
  {
    img: designImg.src,
    header: "Web Design",
    desc: "Modern, attractive and fancy design.",
  },
  {
    img: developmentImg.src,
    header: "Web Development",
    desc: "High-quality development of sites with cutting-edge frameworks.",
  },
  {
    img: responsiveImg.src,
    header: "Web Responsive",
    desc: "Works perfectly on multiple device sizes.",
  },
  {
    img: sourceCodeImg.src,
    header: "Code Quality",
    desc: "Ship products from high-quality sources that are easy to maintain.",
  },
];

const OutWorkEntry = (props: { img: string; title: string }) => {
  const { img, title } = props;
  return (
    <div className="flex items-center">
      <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 ">
        <Image
          src={img}
          alt="outside of work icon"
          width={16}
          height={16}
          className="inline"
        />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="space-y-7">
      <section>
        <h1>About Me</h1>
        <div className="space-y-4">
          <p>
            Hi there! I{"'"}m Full-stuck Developer from Vietnam, working in web
            development. I enjoy turning complex problems into simple.
          </p>
          <p>
            My job is to build website so that it is functional, ease to use and
            reasonable. I enjoy to learn new stuffs that can be applied into
            work, so aim to make your product reach the threshold of perfection.
          </p>
          <p>
            Maybe I just looks like a cat chasing my damn {'"'}perfection{'"'}{" "}
            tail. I{"'"}m a Vimmer also a Starcraft player. Feel free to contact
            me. Have a nice day!{" "}
            <Image
              src={cheerImg.src}
              className="ml-1 inline"
              alt="cheer"
              width={28}
              height={28}
            />
          </p>
        </div>
      </section>
      <section>
        <h2 className="mb-6">What I{"'"}m good</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          {features.map((feat, idx) => (
            <FeatureCard
              key={`FeatureCard_${idx}`}
              imgSrc={feat.img}
              header={feat.header}
              desc={feat.desc}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-6">Favourite quote</h2>
        <Quote
          img={fenixImg.src}
          author="Abathur"
          quote={`Never perfect. Perfection goal that changes. Never stops moving. \nCan chase, cannot catch.`}
          cite="https://starcraft.fandom.com/wiki/StarCraft_II:_Heart_of_the_Swarm_campaign_quotations/Char_Missions"
        />
      </section>
      <section>
        <h2 className="mb-6">Outside of work</h2>
        <div className="flex space-x-8">
          <OutWorkEntry img={vimImg.src} title="Vimmer" />
          <OutWorkEntry img={scImg.src} title="Startcraft Player" />
        </div>
      </section>
    </div>
  );
}
