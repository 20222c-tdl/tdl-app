import { AxiosResponse } from "axios";
import { ICard } from "types/user.types";
import { IClaimFormData } from "views/Claims/types";
import { ILoginFormData } from "../views/Login/types";
import { ISignupUserFormData } from "../views/SignupUser/types";
import { post, get, patch, requestDelete } from "./api";

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

export async function getProfileInfo(): Promise<AxiosResponse> {
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

export async function editClaim(formData: IClaimFormData, claimId: any): Promise<AxiosResponse> {
    const response = await patch(`/claims/${claimId}`, formData);
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
    const response = await post(`/claim-comments`, data);
    return (
        response
    )
}

export async function getReservations(userId: string): Promise<AxiosResponse> {
    const response = await get(`/hired-services/user/${userId}`);
    return response;
}

export async function cancelReservation(reservationId: string): Promise<AxiosResponse> {
    const response = await requestDelete(`/hired-services/hired-service/${reservationId}`);
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
    const response = await patch(`/hired-services/hired-service/${reservationId}?isPaid=true`);
    return response;
}

export async function getPhoto(userId: string): Promise<AxiosResponse> {
    const response = await get(`/users/${userId}/profile`);
    return response;
}

export async function updateProfile(data: any, userId: string): Promise<AxiosResponse> {
    const response = await patch(`/users/${userId}`, data);
    return response;
}

export async function updatePassword(data: any, userId: string): Promise<AxiosResponse> {
    const response = await patch(`/users/password/${userId}`, data);
    return response;
}

export async function getCards(userId: string): Promise<AxiosResponse> {
    const response = await get(`/credit-card/user/${userId}`);
    return response;
}

export async function addNewCard(data: ICard): Promise<AxiosResponse> {
    const response = await post(`/credit-card`, data);
    return response;
}

export async function deleteCard(cardId: string): Promise<AxiosResponse> {
    const response = await requestDelete(`/credit-card/${cardId}`);
    return response;
}

export async function getPlacesReservations(userId: string): Promise<AxiosResponse> {
    const response = await get(`/place-reservation/user/${userId}`);
    return response;
}
