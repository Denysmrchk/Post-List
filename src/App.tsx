import { FC, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './context';

const App: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
};

export default App;
