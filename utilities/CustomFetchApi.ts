import { $fetch } from 'ofetch';
import type { ApiResponse } from '~/models/ApiResponse';

export async function FetchApi<T>(
    url: string,
    config: any = {},
): Promise<ApiResponse<T>> {
    const customConfig = {
        baseURL: 'https://shop-api.codeyad-project.ir/api',
        ...config,
    };
    return $fetch(url, customConfig);
}