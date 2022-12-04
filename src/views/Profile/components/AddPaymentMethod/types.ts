import { ICard } from "types/user.types";

export interface IAddPaymentMethodProps {
    onSubmit: (formData: ICardFormData) => void;
    onCancel: () => void;
}

export interface ICardFormData {
    number: string;
    name: string;
    expiry: string;
    cvc: string;
}