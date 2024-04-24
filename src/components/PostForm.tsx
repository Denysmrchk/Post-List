import { FC, useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

interface PostFormProps {
  setNewPost: (post: { id: number; title: string; body: string }) => void;
}
export const PostForm: FC<PostFormProps> = ({ setNewPost }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    setNewPost(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Title post"
        type="text"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Description"
      />
      <MyButton onClick={(e) => addNewPost(e)}>Create post</MyButton>
    </form>
  );
};
