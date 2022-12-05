import { IPlace } from "types/places.types";

export interface IPlaceDetailsProps {
    place: IPlace;
    date: Date;
    setDate: any;
    selectedTime: string;
    setSelectedTime: any;
    onMakeReservation: () => void;
    times: string[];
}
export interface IReservationPlaceFormData {
    placeId: string | undefined;
    userId: string;
    startingDate: string;
    finishingDate: string;
}
