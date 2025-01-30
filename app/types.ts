export type Repo = {
  id: string;
  description: string;
  name: string;
  stargazers_count: number;
  html_url: string;
};

export type ContentMeta = {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
};

export type ContentInfo = {
  id: string;
  path: string;
  title: string;
  meta: ContentMeta;
};
