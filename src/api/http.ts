import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios';



class HTTPClient {
    private readonly http: AxiosInstance;

    constructor(config: CreateAxiosDefaults) {
        this.http = axios.create(config);

        this.http.interceptors.request.use(async (config) => {
            return config;
        });
    }

    get<T = any, RT = T, R = AxiosResponse<RT>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.http.get<T, R>(url, config);
    }

    public handleServerError(handleError: (error: AxiosError<any>) => Promise<AxiosError>) {
        this.http.interceptors.response.use(
            response => response,
            error => handleError(error)
        );
    }

}

export const http = new HTTPClient({
    baseURL: 'https://jsonplaceholder.org/',
});
