import { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';
import { PostForm } from '../components/PostForm';
import { PostFilter } from '../components/PostFilter';
import { MyModal } from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../components/hooks/usePosts';
import PostService from '../API/PostService';
import { Loader } from '../components/UI/Loader/Loader';
import { useFetching } from '../components/hooks/useFetching';

export type TypePost = {
  number?: number;
  key?: number;
  title: string;
  body: string;
  id: number;
};
type TypeFilter = {
  sort: 'title' | 'body';
  query: string;
};

function Posts() {
  const [posts, setPosts] = useState<TypePost[] | []>([]);
  const [filter, setFilter] = useState<TypeFilter>({ sort: 'title', query: '' });
  const [modal, setModal] = useState(false);
  const { fetching, isLoading, error } = useFetching(async () => {
    const responce = await PostService.getAll();
    setPosts([...posts, ...responce.data]);
  });
  const sortedAndSearchedPosts: TypePost[] = usePosts({
    posts,
    sort: filter.sort,
    query: filter.query,
  });

  useEffect(() => {
    ('posts mount');
    fetching();
  }, []);

  const addNewPosts = (post: { id: number; title: string; body: string }) => {
    setPosts([...posts, post]);
    setModal(false);
  };
  const RemovePost = (id: number) => {
    if (posts.length !== 0) {
      setPosts(posts.filter((obj) => obj.id !== id));
    }
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm setNewPost={addNewPosts} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter} />
        {error && <h1>Error: {error}</h1>}
        <PostList remove={RemovePost} posts={sortedAndSearchedPosts} title="Post List 1" />
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
