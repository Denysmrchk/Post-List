import { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const login = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div>
      <h1>Page for login in</h1>
      <form>
        <MyInput type="text" placeholder="Enter your login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton onClick={login}>Login in</MyButton>
      </form>
    </div>
  );
};

export default Login;
