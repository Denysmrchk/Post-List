import { FC } from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

interface PostItemProps {
  title: string;
  body: string;
  number: number;
  RemovePost: (id: number) => void;
  id: number;
}

const PostItem: FC<PostItemProps> = ({ title, body, number, RemovePost, id }) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}.{title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${id}`)}>Open</MyButton>
        <MyButton onClick={() => RemovePost(id)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
