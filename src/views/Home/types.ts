import { IProvider } from "types/providers.types";

export interface IHomeProps {
    brand: any;
    categoryNames: string[];
    onFilterCategory: (category: string) => void;
    providers: IProvider[];
}
