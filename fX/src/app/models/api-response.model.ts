export interface ApiResponse<T> {
  status: 'success' | 'error';
  module: string;
  message: string;
  data: T;
}