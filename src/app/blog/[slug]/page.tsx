import {getPost} from '@utils/post';
import { MDXRemote } from 'next-mdx-remote/rsc'
// import Test from "@assets/posts/make-color-palette.md";

interface BlogDetailProps {
  params: {slug: string};
}

const BlogDetail = (props: BlogDetailProps ) => {
  const {params} = props;
  const postData = getPost(params.slug, false);
  return <article className="prose-slate">
    <MDXRemote source={postData.content} />
  </article>
}

export default BlogDetail;
