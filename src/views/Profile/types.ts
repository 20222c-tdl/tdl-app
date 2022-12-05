import { ICard, IUser } from "types/user.types";
import { ICardFormData } from "./components/AddPaymentMethod/types";
import { IPasswordFormData } from "./components/PasswordForm/types";

export interface IProfileProps {
    user: IUser;
    onEditProfileClick: (formData: any) => void;
    onEditPassClick: (formData: IPasswordFormData) => void;
    cards: ICard[];
    onRemoveCard: (cardId: string) => void;
    onAddCard: (card: ICardFormData) => void;
}