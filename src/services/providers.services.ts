import { AxiosResponse } from "axios";
import { IServiceFormData } from "views/Services/types";
import { ISignupProviderFormData } from "views/SignupProvider/types";
import { get, post } from "./api";

export async function signupProvider(formData: ISignupProviderFormData): Promise<AxiosResponse> {
    const response = await post("/providers", formData);
    return response;
}

export async function loginProvider(formData: ISignupProviderFormData): Promise<AxiosResponse> {
    const response = await post("/auth/providers/login", formData);
    return response;
}

export async function getProfileInfo(): Promise<AxiosResponse> {
    const response = await get(`/auth/profile`);
    return response;
}

export async function getAllCategories(): Promise<AxiosResponse> {
    const response = await get(`/providers/categories?page=1&take=10`);
    return response;
}


export async function filterCategory(idCategoryChoosed: string): Promise<any> {
    const response = await get(`/providers?page=1&take=10&categoryId=${idCategoryChoosed}`);
    return response;
}

export async function getAllProviders(): Promise<AxiosResponse> {
    const response = await get("/providers");
    return response;
}

export async function getAllProvidersReviews(providerId: string): Promise<AxiosResponse> {
    const response = await get(`/reviews/provider/${providerId}`);
    return response;
}

export async function getProviderInfo(providerId: string): Promise<any> {
    const response = await get(`/providers/${providerId}`);
    return response;
}

export async function getProviderServices(providerId: string): Promise<AxiosResponse> {
    const response = await get(`/services/provider/${providerId}`);
    return (
        response
    )
}

export async function searchName(searchName: string): Promise<AxiosResponse> {
    //const response = await get(`/providers/search`, searchName);
    const response: any = searchName;
    return response;
}

export async function createService(data: IServiceFormData): Promise<AxiosResponse> {
    const response = await post(`/services`, data);
    return response;
}