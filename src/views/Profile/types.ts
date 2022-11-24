import { IUser } from "types/user.types";

export interface IProfileProps {
    user: IUser;
    onEditProfileClick: (formData: any) => void;
    onEditPassClick: (formData: any) => void;
    cards: ICard[];
    onRemoveCard: (cardId: number) => void;
    onAddCard: (card: ICard) => void;
}

export interface ICard {
    id?: number;
    number: string;
    name: string;
    expiry: string;
    cvc: string;
}
