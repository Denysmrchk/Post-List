import { FC } from 'react';
import MyInput from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';

interface PostFilterProps {
  filter: { sort: 'title' | 'body'; query: string };
  setFilter: (filter: { sort: 'title' | 'body'; query: string }) => void;
}

export const PostFilter: FC<PostFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(event) => setFilter({ ...filter, query: event.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(event) => setFilter({ ...filter, sort: event })}
        defaultValue="Sort"
        options={[
          { name: 'Title', value: 'title' },
          { name: 'Description', value: 'body' },
        ]}
      />
    </div>
  );
};
