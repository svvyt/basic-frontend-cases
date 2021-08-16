import { useMemo } from "react";

export const useSortedPosts = (posts, sortType) => {
  const sortedPosts = useMemo(() => {
    if (sortType) {
      return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]));
    }
    return posts;
  }, [sortType, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sortType, searchValue) => {
  const sortedPosts = useSortedPosts(posts, sortType);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, sortedPosts]);

  return sortedAndSearchedPosts;
};
