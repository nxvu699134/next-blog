import {getPost} from '@utils/post';
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug';
import rehypeToc, {HtmlElementNode } from 'rehype-toc';

interface BlogDetailProps {
  params: {slug: string};
}

const BlogDetail = async (props: BlogDetailProps ) => {
  const {params} = props;
  const postData = getPost(params.slug, false);
  const { content } = await compileMDX({ source: postData.content, options: {mdxOptions: {
    rehypePlugins: [rehypeSlug, [ rehypeToc, {
      headings: ["h2","h3", "h4", "h5", "h6"],
      cssClasses: {
        toc: "flex w-full flex-col items-center rounded-big bg-light-background-subtle/50 p-10 lg:w-[280px]"
      },
      customizeTOC: (toc: HtmlElementNode) => {
        const newToc = {...toc};
        newToc.tagName = 'aside';
        return newToc;
      },
    } ]]
  }} });
  return <article className="prose prose-blog">
    {content}
  </article>
}

export default BlogDetail;
