export interface ISignupUserProps {
    onSignupClick: (formData: ISignupUserFormData) => void;
    onGoToSignIn: () => void;
    communities: any[];
}

export interface ISignupUserFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword?: string;
    address: string;
    community: string;
    phoneNumber: number;
}