import axios, { AxiosInstance } from 'axios';
import { CreateAxiosOptions } from './type';

export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }
  private setupInterceptors() {
    // const
  }
}
