type Post = {
  title: string;
  meta?: {
    og?: {
      description?: string;
    };
  };
};

const posts: Post[] = [
  {
    title: "My Post",
    meta: {
      og: {
        description: "Description of my post",
      },
    },
  },
  {
    title: "Sample post",
  },
];

// Use this
function getPostMetaDescOptionalChaining(post: Post) {
  return post.meta?.og?.description;
}

// versus
function getPostMetaDesc(post: Post) {
  if (!post.meta) {
    return undefined;
  }

  if (!post.meta.og) {
    return undefined;
  }

  return post.meta.og.description;
}
