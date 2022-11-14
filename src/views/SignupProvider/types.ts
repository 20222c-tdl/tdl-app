import { ICategory } from "types/providers.types";

export interface ISignupProviderProps {
    allCategories: ICategory[];
    onSignupClick: (formData: ISignupProviderFormData) => void;
}

export interface ISignupProviderFormData {
    email: string;
    password: string;
    repeatPassword?: string;
    firstName: string;
    lastName: string;
    identityNumber: string;
    phoneNumber: string;
    categoryId?: string;
    category?: string
}