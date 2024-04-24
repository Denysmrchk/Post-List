import { FC, InputHTMLAttributes, Ref, forwardRef } from 'react';
import classes from './MyInput.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
const MyInput: FC<Props> = forwardRef((props, ref: Ref<HTMLInputElement>) => {
  return <input ref={ref} {...props} className={classes.myInput} />;
});

export default MyInput;
