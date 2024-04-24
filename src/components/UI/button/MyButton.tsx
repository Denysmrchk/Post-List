import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classes from './MyButton.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MyButton: FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};
export default MyButton;
