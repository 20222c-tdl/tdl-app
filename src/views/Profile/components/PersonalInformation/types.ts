import { IPasswordFormData } from "../PasswordForm/types";
import { IPersonalInfoFormData } from "../PersonalInfoForm/types";

export interface IPersonalInfoProps {
    onSubmit: (formData: IPersonalInfoFormData) => void;
    user : IPersonalInfoFormData;
    onSubmitPassword: (formData: IPasswordFormData) => void;
}
