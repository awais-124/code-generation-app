import { createContext } from 'react';

export const AuthContext = createContext({
  user: null,
  loading: true,
  error: null,
  loginWithEmail: async () => {},
  registerWithEmail: async () => {},
  loginWithProvider: async () => {},
  logout: async () => {},
});