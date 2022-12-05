import { IProvider } from "types/providers.types";

export interface IProviderDetailsProps {
    provider: IProvider;
    providerServices: IServiceData[];
    providerReviews: any;
    hiredServices: IHiredService[];
    setHiredServices: any;
    onMakeReservation: () => void;
    date: Date;
    setDate: (date: any) => void;
}

export interface ICircleButtonProps {
    isMinus?: boolean;
    isClicked?: boolean;
}

export interface IServiceData {
    id: string;
    title: string;
    description: string;
    price: number;
    monetizationType: string;
    providerId: string;
    duration?: number;
}

export interface IHiredService {
    id: string;
    title: string;
    description: string;
    duration: number;
    isFixed: boolean;
    price: number;
    monetizationType: string;
    providerId: string;
}

export interface IServiceToHire {
    hours: number;
    serviceId: string;
}

export interface IReservation {
    userId: string;
    providerId: string | undefined;
    hiredServices: IServiceToHire[];
    date: Date;
}