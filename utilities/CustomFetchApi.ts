import type { ApiResponse } from '~/models/ApiResponse';
import { AppStatusCode } from '~/models/ApiResponse';
import { $fetch, FetchError } from 'ofetch';

export async function FetchApi<T>(
    url: string,
    config: any = {},
): Promise<ApiResponse<T>> {
    const customConfig = {
        baseURL: 'https://shop-api.codeyad-project.ir/api',
        ...config,
    };

    return $fetch<ApiResponse<T>>(url, customConfig)
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