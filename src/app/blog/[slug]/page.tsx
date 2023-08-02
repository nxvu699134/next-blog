import {Fragment} from 'react';
import {getPost} from '@utils/post';
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug';
import {generateTOC} from '@utils/toc';

interface BlogDetailProps {
  params: {slug: string};
}


const useMDX = async (source: string) => {
  const { content } = await compileMDX({ source: source, options: {mdxOptions: {
    rehypePlugins: [rehypeSlug]
  }} });
  const toc = generateTOC(source);
  return {toc, content};
}

const BlogDetail = async (props: BlogDetailProps ) => {
  const {params} = props;
  const postData = getPost(params.slug, false);
  const { toc,content } = await useMDX(postData.content);
  return <Fragment>
    <article className="prose prose-blog flex flex-col min-w-[100%] max-w-[100%] lg:flex-row">
      <h1 className="lg:hidden">{postData.title}</h1>
      <aside className="flex w-full flex-col rounded-big bg-light-background-subtle/50 p-10 mb-8 lg:w-[280px] lg:min-w-[280px] lg:-mt-10 lg:-ml-8 lg:mr-8 lg:-mb-10">
        <div className="sticky top-10 lg:opacity-40 lg:hover:opacity-100 lg:transition-opacity">
          {toc}
        </div>
      </aside>
      <div>
        <h1 className="hidden lg:block">{postData.title}</h1>
        {content}
      </div>
    </article>
  </Fragment>
}

export default BlogDetail;
