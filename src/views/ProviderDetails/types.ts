import { IProvider } from "types/providers.types";

export interface IProviderDetailsProps {
    provider: IProvider;
    providerServices: any[];
    providerReviews: any;
    hiredServices: any;
    setHiredServices: any;
    onMakeReservation: () => void;
    date: any;
    setDate: (date: any) => void;
}

export interface ICircleButtonProps {
    isMinus?: boolean;
    isClicked?: boolean;
}
