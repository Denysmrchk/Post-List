import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';
import { AuthContext } from '../../context';

export const Navbar: FC = () => {
  const { setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}> Log out</MyButton>
      <div className="navbar__links">
        <Link to="/about">About us</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};
