export interface ISignupCommunityProps {
    onSignupClick: (formData: ISignupCommunityFormData) => void;
    onGoToSigninUser: () => void;
    onGoToSignupUser: () => void;
    onGoToSigninCommunity: () => void;
}

export interface ISignupCommunityFormData {
    name: string;
    email: string;
    password: string;
    repeatPassword?: string;
}