import type { ApiResponse } from "~/models/ApiResponse";
import type { UserDto } from "~/models/users/userDto";
import { FetchApi } from "~/utilities/CustomFetchApi";

export const GetCurrentUser = (): Promise<ApiResponse<UserDto>> => {
  return FetchApi("/users/current");
};

export const EditUser = (
  editModel: FormData
): Promise<ApiResponse<undefined>> => {
  return FetchApi("/users/current", {
    method: "PUT",
    body: editModel,
  });
};
