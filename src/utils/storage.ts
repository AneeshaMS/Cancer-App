import { createMMKV } from 'react-native-mmkv';
import { STORAGE_KEYS } from '../constants/storage';

const storage = createMMKV({ id: 'cancer-app-storage' });

export const setItem = <T>(key: string, value: T): void => {
  const serialized = typeof value === 'string' ? value : JSON.stringify(value);
  storage.set(key, serialized);
};

export const getItem = <T>(key: string): T | null => {
  const value = storage.getString(key);
  if (value == null) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return value as T;
  }
};

export const removeItem = (key: string): void => {
  storage.remove(key);
};

export const getToken = (): string | null =>
  storage.getString(STORAGE_KEYS.AUTH_TOKEN) ?? null;

export const setToken = (token: string): void => {
  storage.set(STORAGE_KEYS.AUTH_TOKEN, token);
};

export const clearToken = (): void => {
  storage.remove(STORAGE_KEYS.AUTH_TOKEN);
};
