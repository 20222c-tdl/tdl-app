import { ICard } from "types/user.types";
import { ICardFormData } from "../AddPaymentMethod/types";

export interface IPaymentMethodsProps {
    cards: ICard[] | null;
    onRemoveCard: (cardId: string) => void;
    onAddCard: (card: ICardFormData) => void;
}
