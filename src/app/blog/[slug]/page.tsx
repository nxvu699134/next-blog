import { Fragment } from "react";
import { getPost } from "@utils/post";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { generateTOC } from "@utils/toc";

interface BlogDetailProps {
  params: { slug: string };
}

const useMDX = async (source: string) => {
  const { content } = await compileMDX({
    source: source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
      },
    },
  });
  const toc = generateTOC(source);
  return { toc, content };
};

const BlogDetail = async (props: BlogDetailProps) => {
  const { params } = props;
  const postData = getPost(params.slug, false);
  const { toc, content } = await useMDX(postData.content);
  return (
    <Fragment>
      <article className="prose prose-blog flex min-w-[100%] max-w-[100%] flex-col lg:flex-row">
        <h1 className="lg:hidden">{postData.title}</h1>
        <aside className="mb-8 flex w-full flex-col rounded-big bg-light-background-subtle/50 p-10 lg:-mb-10 lg:-ml-8 lg:-mt-10 lg:mr-8 lg:w-[280px] lg:min-w-[280px]">
          <div className="sticky top-10 lg:opacity-40 lg:transition-opacity lg:hover:opacity-100">
            {toc}
          </div>
        </aside>
        <div>
          <h1 className="hidden lg:block">{postData.title}</h1>
          {content}
        </div>
      </article>
    </Fragment>
  );
};

export default BlogDetail;
