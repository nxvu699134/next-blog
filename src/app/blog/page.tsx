import { ComponentPropsWithoutRef, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@ui/icon";
import { getAllPost } from "@utils/post";
import type { PostMatter } from "types/post";

interface PostCardProps extends ComponentPropsWithoutRef<"article"> {
  post: PostMatter;
}

const PostCard = (props: PostCardProps) => {
  const { post } = props;

  const d = new Date(post.date);

  return (
    <Link
      href={`blog/${post.slug}`}
      className="group relative overflow-hidden rounded-semi bg-light-background-subtle shadow-card"
    >
      <div className="absolute top-0 z-10 rounded-br-semi rounded-tl-semi bg-orange-400 px-[20px] py-2 text-light-content-inverted">
        <b className="text-xl">
          {d.toLocaleString("default", { day: "2-digit" })}
        </b>
        <div className="text-sm">
          {d.toLocaleString("default", {
            month: "short",
          })}
        </div>
      </div>
      <div className="relative h-[224px]">
        <div className="overlay absolute h-full w-full bg-slate-900/50 opacity-50 transition duration-200 group-hover:opacity-100" />
        <Icon
          name="documentLine"
          className="absolute inset-0 m-auto text-light-content-inverted opacity-0 transition duration-200 group-hover:opacity-80"
          size={50}
        />
        <Image
          src={post.image}
          alt={post.title}
          width={100}
          height={100}
          className="object-cover object-center"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="px-8 py-6">
        <h3 className="mb-2.5">{post.title}</h3>
        <p>{post.desc}</p>
      </div>
    </Link>
  );
};

const Blog = () => {
  const posts = getAllPost();
  return (
    <Fragment>
      <h1>Blog</h1>
      <div className="gap-x-8 lg:grid lg:grid-cols-2">
        {posts.map((p, idx) => (
          <PostCard key={`PostCard_${idx}`} post={p} />
        ))}
      </div>
    </Fragment>
  );
};

export default Blog;
