import { axiosInstance } from '../axiosInstance';
import { API_ENDPOINTS } from '../../constants/api';
import type { User } from '../../types/user';
import type { ApiResponse } from '../../types/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const { data } = await axiosInstance.post<ApiResponse<LoginResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    return data.data;
  },

  logout: async (): Promise<void> => {
    await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  getMe: async (): Promise<User> => {
    const { data } = await axiosInstance.get<ApiResponse<User>>(
      API_ENDPOINTS.AUTH.ME
    );
    return data.data;
  },
};
