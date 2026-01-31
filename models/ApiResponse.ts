export interface ApiResponse <TData>{
    isSuccess: boolean;
    metaData: MetaData;
    // Generic (Optional)
    data: TData;
}

export interface MetaData{
    message: string;
    appStatusCode: AppStatusCode;
}

export enum AppStatusCode{
    Success = 1,
    NotFound = 2,
    BadRequest = 3,
    LogicError = 4,
    UnAuthorize = 5,
    ServerError,
}