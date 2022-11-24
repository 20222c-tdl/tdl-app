export interface MyReservationsProps {
    onLeaveAReview: (formData: FormData) => void;
    onCancelReservation: (reservationId: string) => void;
    onPay: () => void;
    reservations: any;
    userReviews: any[];
    setReservationId: (reservationId: string) => void
    setProviderId: (providerId: string) => void
    cards: any;
    setSelectedCard: (card: number) => void;
    selectedCard: number;
}