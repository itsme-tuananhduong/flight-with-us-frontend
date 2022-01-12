import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  isAdmin: null,
  username: null,
  token: null,
  login: () => {},
  logout: () => {},
});
