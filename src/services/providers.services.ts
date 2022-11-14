import { AxiosResponse } from "axios";
import { ISignupProviderFormData } from "views/SignupProvider/types";
import { get, post, put } from "./api";

export async function signupProvider(formData: ISignupProviderFormData): Promise<AxiosResponse> {
    const response = await post("/providers", formData);
    return response;
}

export async function loginProvider(formData: ISignupProviderFormData): Promise<AxiosResponse> {
    const response = await post("/providers/login", formData);
    return response;
}

export async function getAllCategories(): Promise<AxiosResponse> {
    const response = await get(`/providers/categories?page=1&take=10`);

    return response;
}
