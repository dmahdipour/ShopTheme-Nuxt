import type { ApiResponse } from '~/models/ApiResponse';
import { AppStatusCode } from '~/models/ApiResponse';
import { $fetch, FetchError } from 'ofetch';
import { useAuthStore } from '~/stores/auhStore';
import { BASE_URL } from './ApiConfig';

export async function FetchApi<T>(
    url: string,
    config: any = {},
): Promise<ApiResponse<T>> {
    config = {
        baseURL: BASE_URL,
        ...config,
    };

    const authStore = useAuthStore();
    if (!config.headers) {
        config.headers = {};
    }
    if (authStore && authStore.isLogin) {
        var loginData = authStore.loginResult;
        config.headers["Authorization"] = `Bearer ${loginData.token}`;
    }
    
    return $fetch<ApiResponse<T>>(url, config)
        .then((res)=>{
            return res
        })
        .catch((e: FetchError)=>{
            return {
                data:null,
                isSuccess:false,
                metaData:{
                    appStatusCode: e.response?._data?.AppStatusCode ?? AppStatusCode.ServerError,
                    message: e.response?._data?.MetaData?.Message ?? 'مشکلی در عملیات رخ داده است'
                }
            }

        });
}