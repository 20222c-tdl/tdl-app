import { IClaimFormData } from "views/Claims/types";
import { IProvider } from "./providers.types";

export interface UserInterface {
    loading: boolean;
    data: any;
    user: IUser;
    claims: IClaimFormData[];
    changeClaimsList: boolean;
    reservations: any[]
    changeReservations: boolean;
    userReviews: any[];
    changeReviews: boolean;
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
export interface IJWT {
    id: number;
    exp: number;
    sub: string;
    role: string;
}

