import { ISignupUserFormData } from "views/SignupUser/types";

export interface UserInterface {
    loading: boolean;
    data: any;
    user: IUser;
}

export interface IUser {
    id: string;
    username: string;
    lastname: string;
    email: string;
    address: string;
    communityId: string;
    phoneNumber: string;
}
export interface IJWT {
    id: number;
    exp: number;
}

