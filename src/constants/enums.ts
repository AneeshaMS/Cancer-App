export enum AuthStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
}

export enum PatientJourneyStage {
  DIAGNOSIS = 'diagnosis',
  TREATMENT = 'treatment',
  FOLLOW_UP = 'follow_up',
  REMISSION = 'remission',
}
