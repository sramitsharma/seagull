export interface SeagullError {
  errorMessage: string | null;
  errorObject: Error | null;
  exceptionObject: any | null;
}
