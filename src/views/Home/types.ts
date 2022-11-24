import { IProvider } from "types/providers.types";

export interface IHomeProps {
    categoryNames: string[];
    onFilterCategory: (category: string) => void;
    allProviders: any[];
    onClearFilter: () => void;
}
