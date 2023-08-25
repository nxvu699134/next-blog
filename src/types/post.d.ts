export interface PostMatter {
  title: string;
  desc: string;
  tags: Array<string>;
  date: Date;
  slug: string;
  image: string;
}

export interface PostData extends PostMatter {
  content: string;
}
