export interface IPersonalInfoFormdataProps {
    onSubmit: (formData: IPersonalInfoFormData) => void;
    user: IPersonalInfoFormData;
    goBack: () => void;
}

export interface IPersonalInfoFormData {
    firstName: string;
    lastName: string;
    email: string;
    address?: string;
    phoneNumber: string;
}
