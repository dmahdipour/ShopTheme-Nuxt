import type { ApiResponse } from "~/models/ApiResponse";
import type { LoginDTo, LoginResultDTo } from "~/models/auth/loginResultDTo";
import type { RegisterCommandDTo } from "~/models/auth/registerDTo";
import { FetchApi } from "~/utilities/CustomFetchApi";

export function RegisterUser(command: RegisterCommandDTo): Promise<ApiResponse<null>>{
    return FetchApi("/auth/register", {
        method: "Post",
        body: command
    });
}

export function LoginUser(command: LoginDTo): Promise<ApiResponse<LoginResultDTo>>{
    return FetchApi("/auth/login", {
        method: "Post",
        body: command
    });
}