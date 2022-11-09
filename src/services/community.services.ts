import { AxiosResponse } from "axios";
import { get, post, put } from "./api";
import { ISignupCommunityFormData } from "../views/SignupCommunity/types";

export async function signupCommunity(formData: ISignupCommunityFormData): Promise<AxiosResponse> {
    const response = await post("/communities", formData);
    return response;
}

export async function loginCommunity(formData: ISignupCommunityFormData): Promise<AxiosResponse> {
    const response = await post("/communities/community/login", formData);
    return response;
}

export async function getAllCommunities(): Promise<AxiosResponse> {
    const response = await get("/communities");
    return response;
}
