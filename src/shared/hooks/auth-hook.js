import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
  const prevToken = localStorage.getItem('userData');

  const initialToken = prevToken ? JSON.parse(prevToken).token : null;
  const initialUserId = prevToken ? JSON.parse(prevToken).userId : null;
  const initialIsAdmin = prevToken ? JSON.parse(prevToken).isAdmin : null;
  const initialUsername = prevToken ? JSON.parse(prevToken).username : null;

  const [token, setToken] = useState(initialToken);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(initialUserId);
  const [isAdmin, setIsAdmin] = useState(initialIsAdmin);
  const [username, setUsername] = useState(initialUsername);

  const login = useCallback((uid, isadmin, username, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setIsAdmin(isadmin);
    setUsername(username);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60 * 3);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        isAdmin: isadmin,
        username: username,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setIsAdmin(null);
    setUsername(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.isAdmin,
        storedData.username,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return { token, login, logout, userId, isAdmin, username };
};
