import { IClaimFormData } from "views/Claims/types";
import { IProvider } from "./providers.types";

export interface UserInterface {
    loading: boolean;
    data: any;
    user: IUser;
    claims: IClaimFormData[];
    changeClaimsList: boolean;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    communityId: string;
    phoneNumber: string;
}
export interface IJWT {
    id: number;
    exp: number;
    sub: string;
    role: string;
}

