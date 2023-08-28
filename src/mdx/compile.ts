import { compileMDX, MDXRemoteProps } from "next-mdx-remote/rsc";
import path from "path";
import * as shiki from "shiki";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode, {
  Options as RehypeCodeOptions,
} from "rehype-pretty-code";
import { generateTOC } from "@utils/toc";
import { mdxComponents } from "./components";

const SHIKI_DIR = path.join(process.cwd(), "src/mdx/shiki");

const getHighlighter: RehypeCodeOptions["getHighlighter"] = async (options) => {
  const highlighter = await shiki.getHighlighter({
    ...(options as any), // this options only have 1 key "theme"
    paths: {
      languages: `${SHIKI_DIR}/languages/`,
      themes: `${SHIKI_DIR}/themes/`,
    },
  });
  return highlighter;
};

export const compileMdx = async (source: string) => {
  const { content } = await compileMDX({
    source: source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "github-light",
              keepBackground: false,
              getHighlighter: getHighlighter,
            } as RehypeCodeOptions,
          ],
        ],
      },
    },
  } as MDXRemoteProps);
  const toc = generateTOC(source);
  return { toc, content };
};
