import { useMutation } from '@tanstack/react-query';
import { authService } from '../../../api/services/authService';
import { useAuthStore } from '../../../store/useAuthStore';
import type { LoginFormValues } from '../types';

export const useLogin = () => {
  const loginStore = useAuthStore.getState().login;

  return useMutation({
    mutationFn: (values: LoginFormValues) => authService.login(values),
    onSuccess: (data) => {
      loginStore(data.token, data.user);
    },
  });
};
