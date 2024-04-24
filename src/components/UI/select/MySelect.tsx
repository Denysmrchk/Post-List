import { FC } from 'react';

interface MySelectProps {
  options: {
    name: string;
    value: string;
  }[];
  defaultValue: string;
  value: string;
  onChange: (event: any) => void;
}

export const MySelect: FC<MySelectProps> = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
