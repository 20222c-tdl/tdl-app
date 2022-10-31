export interface ISignupCommunityProps {
    onSignupClick: (formData: ISignupCommunityFormData) => void;
    onGoToSignIn: () => void;
}

export interface ISignupCommunityFormData {
    name: string;
    email: string;
    password: string;
    repeatPassword?: string;
}