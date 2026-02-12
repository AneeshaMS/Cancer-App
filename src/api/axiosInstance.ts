import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { config } from '../constants/config';
import { getToken, clearToken } from '../utils/storage';
import { getErrorMessage } from '../utils/helpers';
import type { ApiError } from '../types/api';

const axiosInstance = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const mapError = (error: AxiosError<{ message?: string }>): ApiError => {
  const status = error.response?.status;
  const message =
    error.response?.data?.message ?? error.message ?? getErrorMessage(error);
  return { message, status, code: error.code };
};

let onUnauthorized: (() => void) | null = null;

export const setUnauthorizedHandler = (handler: () => void): void => {
  onUnauthorized = handler;
};

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(mapError(error))
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    const apiError = mapError(error);
    if (error.response?.status === 401) {
      clearToken();
      onUnauthorized?.();
    }
    return Promise.reject(apiError);
  }
);

export { axiosInstance };
