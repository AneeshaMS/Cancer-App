import { useAuthStore } from '../store/useAuthStore';

export const useAuth = () => {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);
  const setUser = useAuthStore((s) => s.setUser);
  const hydrate = useAuthStore((s) => s.hydrate);

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout,
    setUser,
    hydrate,
  };
};
