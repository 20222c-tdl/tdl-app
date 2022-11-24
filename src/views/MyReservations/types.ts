export interface MyReservationsProps {
    onLeaveAReview: (formData: FormData) => void;
    onCancelReservation: (reservationId: string) => void;
    reservations: any;
    userReviews: any[];
    setReservationId: (reservationId: string) => void
}