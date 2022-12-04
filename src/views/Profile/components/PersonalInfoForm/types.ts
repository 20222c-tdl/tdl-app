import { IUser } from "types/user.types";

export interface IPersonalInfoFormdataProps {
    onSubmit: (formData: any) => void;
    user: any;
    goBack: () => void;
}

export interface IPersonalInfoFormData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phoneNumber: string;
}

export interface IProfileFormData {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phoneNumber: string;
    base64Picture: any;
}
