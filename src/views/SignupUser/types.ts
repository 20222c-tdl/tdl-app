import { ICommunity } from "types/community.types";

export interface ISignupUserProps {
    onSignupClick: (formData: ISignupUserFormData) => void;
    onGoToSignupCommunity: () => void;
    onGoToSigninCommunity: () => void;
    onGoToSigninUser: () => void;
    allCommunities: ICommunity[];
}
export interface ISignupUserFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword?: string;
    address: string;
    communityId?: string;
    community?: string;
    phoneNumber: number;
}