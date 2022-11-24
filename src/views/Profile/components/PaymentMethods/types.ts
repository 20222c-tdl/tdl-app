import { ICard } from "views/Profile/types";

export interface IPaymentMethodsProps {
    cards: any | null;
    onRemoveCard: (cardId: number) => void;
    onAddCard: (card: ICard) => void;
}
