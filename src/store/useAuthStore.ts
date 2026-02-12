import { create } from 'zustand';
import { setToken, getToken, clearToken } from '../utils/storage';
import { getItem, setItem, removeItem } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storage';
import type { User } from '../types/user';

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  hydrated: boolean;
  setUser: (user: User | null) => void;
  login: (token: string, user: User) => void;
  logout: () => void;
  hydrate: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  hydrated: false,

  setUser: (user) => set({ user }),

  login: (token, user) => {
    setToken(token);
    setItem(STORAGE_KEYS.USER, user);
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    clearToken();
    removeItem(STORAGE_KEYS.USER);
    set({ token: null, user: null, isAuthenticated: false });
  },

  hydrate: () => {
    const token = getToken();
    const user = getItem<User>(STORAGE_KEYS.USER);
    set({
      token,
      user,
      isAuthenticated: Boolean(token),
      hydrated: true,
    });
  },
}));
