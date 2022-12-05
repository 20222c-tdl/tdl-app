import { IClaimData, IClaimFormData } from "views/Claims/types";

export interface UserInterface {
    loading: boolean;
    data: any;
    user: IUser;
    claims: IClaimData[];
    changeClaimsList: boolean;
    reservations: any[]
    placesReservations: any[];
    changeReservations: boolean;
    userReviews: any[];
    changeReviews: boolean;
    userPhoto: any;
    cards: ICardData[];
    changeCards: boolean;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    communityId: string;
    phoneNumber: string;
    role:string;
    photo: any;
}

export interface IUserFormData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    communityId: string;
    phoneNumber: string;
    role:string;
    base64Picture: any;
}
export interface IJWT {
    id: number;
    exp: number;
    sub: string;
    role: string;
}
export interface ICard {
    id?: number;
    userId: string;
    number: string;
    name: string;
    expirationDate: string;
    cvc: string;
}

export interface ICardData {
    id: number;
    userId: string;
    number: string;
    name: string;
    expirationDate: string;
    cvc: string;
}