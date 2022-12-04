import { IUser } from "types/user.types";
import { IPasswordFormData } from "../PasswordForm/types";
import { IPersonalInfoFormData } from "../PersonalInfoForm/types";

export interface IPersonalInfoProps {
    onSubmit: (formData: IPersonalInfoFormData) => void;
    user : any;
    onSubmitPassword: (formData: IPasswordFormData) => void;
}
