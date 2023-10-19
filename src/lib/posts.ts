import dayjs from "dayjs";

type GlobEntry = {
  metadata: PostMetadata;
  default: {
    render: () => {
      html: string;
    };
  };
};

interface PostMetadata {
  title: string;
  date: string;
  published: boolean;
  description: string;
  tags: string[];
  author: string;
}

export const getPosts = async () => {
  // Read .md files from /contents/posts directory
  const postFiles = Object.entries(
    import.meta.glob<GlobEntry>("../../contents/posts/*.md", { eager: true })
  );

  const allPosts = postFiles
    .map(([filePath, globEntry]) => {
      const slug = filePath.split("/").pop()!.replace(/\.md$/, "");
      const metadata = globEntry.metadata;
      const content = globEntry.default.render().html;
      return {
        slug,
        metadata: {
          ...metadata,
          date: dayjs(metadata.date).format("MMMM DD, YYYY"),
        },
        content,
      };
    })
    .filter((post) => post.metadata.published);

  return allPosts;
};
