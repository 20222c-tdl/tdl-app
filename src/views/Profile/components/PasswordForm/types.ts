export interface IPasswordFormdataProps {
    onSubmit: (formData: IPasswordFormData) => void;
}

export interface IPasswordFormData {
    oldPassword: string;
    newPassword: string;
    repeatPassword?: string;
}
