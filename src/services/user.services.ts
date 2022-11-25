import { AxiosResponse } from "axios";
import { IClaimFormData } from "views/Claims/types";
import { ILoginFormData } from "../views/Login/types";
import { ISignupUserFormData } from "../views/SignupUser/types";
import { post, get, patch } from "./api";

export async function initializeUser(): Promise<any> {
    const response = {
        id: "7bfb5d31-9918-40a4-a418-00346b92f4db",
        firstName: "Rocio",
        lastName: "Tarda",
        email: "tardarocio@gmail.com",
        address: "Paseo Colon 850",
        phoneNumber: "1234566",
        communityId: "396487df-0837-4073-91e6-3267b9538010"
    };
    return (
        response
    )
}

export async function getProfileInfo(userId: string): Promise<AxiosResponse> {
    const response = await get(`/auth/profile`);
    return response;
}

export async function signupUser(formData: ISignupUserFormData): Promise<AxiosResponse> {
    const response = await post("/users", formData);
    return response;
}

export async function loginUser(formData: ILoginFormData): Promise<AxiosResponse> {
    const response = await post("/auth/users/login", formData);
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

export async function makeReservation(data: any): Promise<AxiosResponse> {
    const response = await post(`/hired-services`, data);
    return (
        response
    )
}

export async function postComment(data: any): Promise<AxiosResponse> {
    //const response = await post(`/makeComment/${data.userId}`, data);
    const response = data;
    return (
        response
    )
}

export async function getReservations(userId: string): Promise<AxiosResponse> {
    const response = await get(`/hired-services/user/${userId}`);
    return response;
}

export async function cancelReservation(reservationId: string): Promise<AxiosResponse> {
    //const response = await requestDelete(`/reservation/${id}`);
    const response: any = reservationId;
    return response;
}


export async function getReviews(userId: string): Promise<AxiosResponse> {
    const response = await get(`/reviews/user/${userId}`);
    return response;
}

export async function leaveAReview(data: any): Promise<AxiosResponse> {
    const response = await post(`/reviews`, data);
    return response;
}

export async function payReservation(reservationId: string): Promise<AxiosResponse> {
    //const response = await post(`/pay`, reservationId);
    const response: any = payReservation;
    return response;
}
