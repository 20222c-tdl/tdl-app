import { IProvider } from "types/providers.types";

export interface IHomeProps {
    categoryNames: string[];
    onFilterCategory: (category: string) => void;
    providers: IProvider[];
    allProviders: IProvider[];
}
