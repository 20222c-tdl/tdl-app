import { IProvider } from "types/providers.types";
import { ICardData } from "types/user.types";

export interface MyReservationsProps {
    onLeaveAReview: (formData: IReviewFormData) => void;
    onCancelReservation: (reservationId: string) => void;
    onPay: () => void;
    reservations: IServicesReservation[];
    userReviews: IReview[];
    setReservationId: (reservationId: string) => void
    setProviderId: (providerId: string) => void
    cards: ICardData[];
    setSelectedCard: (card: number) => void;
    selectedCard: number;
    placesReservations: any[];
}

export interface IReviewFormData {
    comment: string;
    rating: number;
}

export interface IReviewData {
    userId: string;
    providerId: string;
    rating: number;
    comment: string;
    hiredServicesId: string;
}

export interface IReview {
    id: string;
    userId: string;
    providerId: string;
    rating: number;
    comment: string;
    hiredServicesId: string;
}

export interface IServicesReservation {
    hiredServices: IHiredServices;
    provider: IProvider;
    services: IService[]
}
export interface IService {
    description: string;
    hours: number;
    id: string;
    monetizationType: string;
    price: number;
    providerId: string;
    title: string;
}
export interface IHiredServices {
    date: Date;
    id: string;
    isPaid: boolean;
    providerId: string;
    userId: string;
}