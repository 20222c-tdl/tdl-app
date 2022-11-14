import { AxiosResponse } from "axios";
import { IClaimFormData } from "views/Claims/types";
import { ILoginFormData } from "../views/Login/types";
import { ISignupUserFormData } from "../views/SignupUser/types";
import { post, get } from "./api";

export async function signupUser(formData: ISignupUserFormData): Promise<AxiosResponse> {
    const response = await post("/users", formData);
    return response;
}

export async function loginUser(formData: ILoginFormData): Promise<AxiosResponse> {
    const response = await post("/users/user/login", formData);
    return (
        response
    )
}

export async function registerClaim(formData: IClaimFormData): Promise<AxiosResponse> {
    const response = await post("/claims", formData);
    return (
        response
    )
}

export async function getClaims(userId: string): Promise<AxiosResponse> {
    const response = await get(`/claims/user/${userId}`);
    return (
        response
    )
}