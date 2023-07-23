import { Fragment } from "react";
import Timeline from "@ui/timeline";
import Image from "next/image";
import experienceImg from "@assets/images/icon-experience.svg";
import educationImg from "@assets/images/icon-education.svg";
import techImg from "@assets/images/icon-tech.svg";
import Badge from "@ui/badge";

const Resume = () => {
  return (
    <Fragment>
      <h1>Résumé</h1>
      <div className="mb-7">
        <h2 className="mb-6 flex items-center">
          <Image
            className="mr-3"
            src={experienceImg.src}
            alt="resume experience"
            width={40}
            height={40}
          />
          Experience
        </h2>
        <Timeline.Root>
          <Timeline.Item className="space-y-2">
            <h4>Treehouse Finance</h4>
            <div className="text-sm text-light-content-subtle">2022 — 2023</div>
            <ul className="space-y-2 text-sm">
              <li>
                Communicate with multi-teams of engineers and designers on a
                daily basis. Suggested and did a new team workflow.
              </li>
              <li>
                Improve the code base{"'"}s quality by using patterns, semantic
                code and Typescript. Help design and implement the product{"'"}s
                UI-Kit.
              </li>
              <li>Review code, sharing knowledge with teammates.</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item className="space-y-2">
            <h4>Goldeneye Technology</h4>
            <div className="text-sm text-light-content-subtle">2020 — 2021</div>
            <ul className="space-y-2 text-sm">
              <li>
                Design UI/UX, implemented from scratch Production planning
                system project, which boosts performance of client’s everyday
                tasks.
              </li>
              <li>Improve the old UI of some legacy projects.</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item className="space-y-2">
            <h4>Employment Hero</h4>
            <div className="text-sm text-light-content-subtle">2018 — 2019</div>
            <ul className="space-y-2 text-sm">
              <li>Maintain and develop features of the company{"'"}s site.</li>
              <li>
                Add a bunch of tests and research some automation testing tools.
              </li>
              <li>Do some stuff about Infrastructure.</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item className="space-y-2">
            <h4>TMA Solutions</h4>
            <div className="text-sm text-light-content-subtle">2017</div>
            <ul className="space-y-2 text-sm">
              <li>
                Research to build a Fraud Detection System, which can detect
                phishing emails.
              </li>
              <li>
                Finish a prototype, which detects phishing mails with accuracy
                more than 90% .
              </li>
            </ul>
          </Timeline.Item>
        </Timeline.Root>
      </div>
      <div className="mb-7">
        <h2 className="mb-6 flex items-center">
          <Image
            className="mr-3"
            src={educationImg.src}
            alt="resume education"
            width={40}
            height={40}
          />
          Education
        </h2>
        <Timeline.Root>
          <Timeline.Item className="space-y-2">
            <h4>University of Science</h4>
            <div className="text-sm text-light-content-subtle">2014 — 2018</div>
            <ul className="space-y-2 text-sm">
              <li>Bachelor of Computer Science</li>
              <li>
                GPA <b>8.1/10</b>
              </li>
            </ul>
          </Timeline.Item>
        </Timeline.Root>
      </div>
      <div className="mb-7">
        <h2 className="mb-6 flex items-center">
          <Image
            className="mr-3"
            src={techImg.src}
            alt="resume education"
            width={40}
            height={40}
          />
          Tech Knowledge
        </h2>
        <div className="mb-1 space-x-2 text-sm">
          <Badge variant="secondary">HTML</Badge>
          <Badge variant="secondary">SASS</Badge>
          <Badge variant="secondary">NodeJS</Badge>
          <Badge variant="secondary">NextJS</Badge>
          <Badge variant="secondary">Angular</Badge>
          <Badge variant="secondary">Svelte</Badge>
        </div>
        <div className="space-x-2 text-sm">
          <Badge variant="secondary">Typescript</Badge>
          <Badge variant="secondary">Go</Badge>
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Lua</Badge>
        </div>
      </div>
      <div>
        <h2 className="mb-6 flex items-center">Outside of work</h2>
        <ul className="space-y-2 text-sm">
          <li>
            I recently started my blog website, where I write about my learning.
          </li>
          <li>I’m a CFA candidate who likes to research financial stuff.</li>
          <li>
            Swimming is my favorite sport. I like to just relax and do nothing
            on water; it feels like flying.
          </li>
          <li>
            I’m also a 10-year-old Starcraft player. Please connect to play with
            me :))
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Resume;
