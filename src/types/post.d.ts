export interface PostMatter {
  title: string;
  desc: string;
  tags: Array<string>;
  date: string;
  slug: string;
  image: string;
}

export interface PostData extends PostMatter {
  content: string;
}
