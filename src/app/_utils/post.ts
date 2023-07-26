import path from "path";
import { readdirSync } from "fs";
import matter from "gray-matter";
import type { PostMatter, PostData } from "types/post.d";

const POST_DIR = path.join(process.cwd(), "src/assets/posts");

const EXTENSION = ".md";

export const getPost = <B extends boolean>(
  filePath: string,
  isOnlyMatter: B,
): B extends true ? PostMatter : PostData => {
  if (!path.extname(filePath)) {
    filePath = path.join(POST_DIR, `${filePath}${EXTENSION}`);
  }
  const m = matter.read(filePath);
  const slug = path.parse(filePath).name;
  if (isOnlyMatter) {
    return { ...m.data, slug } as any;
  }
  return { ...m.data, content: m.content, slug } as any;
};

export const getAllPost = () => {
  try {
    const postFiles = readdirSync(POST_DIR).filter(
      (f) => path.extname(f).toLowerCase() === EXTENSION,
    );

    const m = postFiles.map((filePath) => ({
      ...getPost(path.join(POST_DIR, filePath), true),
    }));
    return m.sort((pA, pB) => (pA.date > pB.date ? -1 : 1));
  } catch (e) {
    console.error(e);
    return [];
  }
};
