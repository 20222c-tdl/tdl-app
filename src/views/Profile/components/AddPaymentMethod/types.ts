import { ICard } from "views/Profile/types";

export interface IAddPaymentMethodProps {
    onSubmit: (formData: ICard) => void;
    onCancel: () => void;
}
