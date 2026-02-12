import { axiosInstance } from '../axiosInstance';
import { API_ENDPOINTS } from '../../constants/api';
import type { ApiResponse, PaginatedResponse } from '../../types/api';

export interface Patient {
  id: string;
  name: string;
  email?: string;
  stage?: string;
  createdAt: string;
}

export const patientService = {
  getList: async (page = 1): Promise<PaginatedResponse<Patient>> => {
    const { data } = await axiosInstance.get<
      ApiResponse<PaginatedResponse<Patient>>
    >(API_ENDPOINTS.PATIENTS.LIST, { params: { page } });
    return data.data;
  },

  getById: async (id: string): Promise<Patient> => {
    const { data } = await axiosInstance.get<ApiResponse<Patient>>(
      API_ENDPOINTS.PATIENTS.BY_ID(id)
    );
    return data.data;
  },
};
