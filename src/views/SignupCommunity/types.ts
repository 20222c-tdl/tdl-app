export interface ISignupCommunityProps {
    onSignupClick: (formData: ISignupCommunityFormData) => void;
}

export interface ISignupCommunityFormData {
    name: string;
    email: string;
    password: string;
    repeatPassword?: string;
    base64Picture?: any;
}