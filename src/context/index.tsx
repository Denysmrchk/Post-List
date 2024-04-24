import { createContext, useContext } from 'react';

// Определение типа контекста
interface AuthContextType {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

// Создание контекста с типизацией
export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  isLoading: true,
  setIsAuth: () => {},
});

// Компонент-обертка для использования контекста
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};
