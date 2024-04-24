import { FC, ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import { Loader } from '../components/UI/Loader/Loader';
import { TypePost } from './Posts';

type TypeComment = { body: string; email: string };

export const PostIdPage: FC = (): ReactNode => {
  const { id } = useParams();
  const [comments, setComments] = useState<TypeComment[]>([]);
  const [post, setPost] = useState<TypePost>();

  const {
    fetching: fetchPostById,
    isLoading: isLoading,
    error: postError,
  } = useFetching(async () => {
    if (id) {
      const response = await PostService.getById(id);
      setPost(response.data);
    }
  });

  const {
    fetching: fetchCommentsById,
    isLoading: commentIsLoading,
    error: commentError,
  } = useFetching(async () => {
    if (id) {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    }
  });

  useEffect(() => {
    fetchPostById();
    fetchCommentsById();
  }, []);

  return (
    <div>
      <h1>you open this page ID {id}</h1>
      {isLoading ? (
        <Loader />
      ) : post ? (
        <div>
          {post.id}. {post.title}
        </div>
      ) : (
        <div>{postError}</div>
      )}
      <h2 style={{ marginTop: 15 }}>Comments</h2>
      {commentIsLoading ? (
        <Loader />
      ) : comments.length ? (
        <div>
          {comments.map((comm) => (
            <div key={comm.body} style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>{commentError}</div>
      )}
    </div>
  );
};
