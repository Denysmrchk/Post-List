import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((obj) => (
        <Route path={obj.path} element={obj.element} key={obj.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((obj) => (
        <Route path={obj.path} element={obj.element} key={obj.path} />
      ))}
    </Routes>
  );
};
