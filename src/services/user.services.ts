import { AxiosResponse } from "axios";
import { IClaimFormData } from "views/Claims/types";
import { ILoginFormData } from "../views/Login/types";
import { ISignupUserFormData } from "../views/SignupUser/types";
import { post, get, patch } from "./api";

export async function initializeUser(): Promise<any> {
    const response = {
        id: "5d8b9511-ed57-4221-8174-816d0abcdfb8",
        firstName: "Rocio",
        lastName: "Tarda",
        email: "tardarocio@gmail.com",
        address: "Paseo Colon 850",
        phoneNumber: "1234566",
        communityId: "6e6fe0b3-e44a-41d3-8059-73faca54ca47"
    };
    return (
        response
    )
}
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

export async function editClaim(formData: IClaimFormData): Promise<AxiosResponse> {
    const response = await patch(`/claims/${formData.id}`, formData);
    return (
        response
    )
}
