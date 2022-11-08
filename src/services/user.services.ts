import { AxiosResponse } from "axios";
import { ILoginFormData } from "../views/Login/types";
import { ISignupUserFormData } from "../views/SignupUser/types";
import { post } from "./api";

export async function signupUser(formData: ISignupUserFormData): Promise<AxiosResponse> {
    const response = await post("/users", formData);
    return response;
}

export async function loginUser(formData: ILoginFormData): Promise<AxiosResponse> {
    const response = await post("/users/user/login", formData);
    return(
        response
    )
}

