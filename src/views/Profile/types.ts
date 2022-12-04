import { ICard, IUser } from "types/user.types";
import { ICardFormData } from "./components/AddPaymentMethod/types";

export interface IProfileProps {
    user: IUser;
    onEditProfileClick: (formData: any) => void;
    onEditPassClick: (formData: any) => void;
    cards: ICard[];
    onRemoveCard: (cardId: string) => void;
    onAddCard: (card: ICardFormData) => void;
}

