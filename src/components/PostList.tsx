import { FC } from 'react';
import PostItem from './PostItem';

type TypePost = {
  number?: number;
  key?: number;
  title: string;
  body: string;
  id: number;
};
interface PostListProps {
  posts: TypePost[];
  title: string;
  remove: (id: number) => void;
}

export const PostList: FC<PostListProps> = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Not found posts</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post: TypePost, index: number) => (
        <PostItem
          RemovePost={remove}
          number={index + 1}
          key={post.id}
          title={post.title}
          id={post.id}
          body={post.body}
        />
      ))}
    </div>
  );
};
