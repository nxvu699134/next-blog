import { ComponentPropsWithoutRef } from "react";
import classnames from "classnames";

interface TimelineItemProps extends ComponentPropsWithoutRef<"article"> {}

const TimelineItem = (props: TimelineItemProps) => {
  const { className, children } = props;
  return (
    <section className="relative border-l pb-5 pl-6 last:border-none last:pb-0">
      <div className={classnames("relative top-[-5px]", className)}>
        {children}
      </div>
      <div className="timeline-dot absolute left-[-5px] top-0 h-[10px] w-[10px] rounded-full bg-light-brand  shadow-timeline-dot" />
    </section>
  );
};

interface TimelineRootProps extends ComponentPropsWithoutRef<"div"> {}

const TimelineRoot = (props: TimelineRootProps) => {
  const { children, className } = props;
  return (
    <article className={classnames(className, "pl-4")}>{children}</article>
  );
};

const Timeline = {
  Root: TimelineRoot,
  Item: TimelineItem,
};

export default Timeline;
