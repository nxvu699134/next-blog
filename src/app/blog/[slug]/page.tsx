import type { Metadata } from "next";
import { getPost } from "@utils/post";
import { formatDate } from "@utils/date";
import { compileMdx } from "@mdx/compile";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = getPost(params.slug, false);

  return {
    title: postData.title,
    openGraph: {
      title: postData.title,
      images: [postData.image],
      type: "article",
    },
  };
}

interface BlogDetailProps {
  params: { slug: string };
}

const BlogDetail = async (props: BlogDetailProps) => {
  const { params } = props;
  const postData = getPost(params.slug, false);
  const { toc, content } = await compileMdx(postData.content);
  return (
    <article className="prose prose-blog flex min-w-[100%] max-w-[100%] flex-col lg:flex-row">
      <h1 className="lg:hidden">{postData.title}</h1>
      <div className="mb-12 italic lg:hidden">{formatDate(postData.date)}</div>
      <aside className="flex w-full flex-col rounded-big bg-light-background-subtle/50 p-10 lg:-mb-10 lg:-ml-8 lg:-mt-10 lg:mr-8 lg:w-[280px] lg:min-w-[280px]">
        <div className="sticky top-10 lg:opacity-40 lg:transition-opacity lg:hover:opacity-100">
          {toc}
        </div>
      </aside>
      <div>
        <h1 className="hidden lg:block">{postData.title}</h1>
        <div className="hidden italic lg:block">
          {formatDate(postData.date)}
        </div>
        {content}
      </div>
    </article>
  );
};

export default BlogDetail;
