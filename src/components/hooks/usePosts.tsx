import { useMemo } from 'react';
import { TypePost } from '../../pages/Posts';

interface UsePostsProps {
  posts: TypePost[];
  sort: 'title' | 'body';
  query: string;
}

export const useSortedPosts = ({
  sort,
  posts,
}: {
  sort: 'title' | 'body';
  posts: TypePost[];
}): TypePost[] => {
  const sortedPosts = useMemo(() => {
    if (sort !== undefined) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = ({ posts, sort, query }: UsePostsProps): TypePost[] => {
  const sortedPosts = useSortedPosts({ sort, posts });
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
