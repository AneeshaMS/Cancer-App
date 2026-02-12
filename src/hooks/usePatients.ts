import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/queryKeys';
import { patientService } from '../api/services/patientService';

export const usePatients = (page = 1) =>
  useQuery({
    queryKey: QUERY_KEYS.PATIENTS.LIST(page),
    queryFn: () => patientService.getList(page),
  });
