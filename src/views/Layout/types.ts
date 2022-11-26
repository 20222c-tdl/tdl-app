import { ReactNode } from "react";

export interface ILayoutProps {
    name: string;
    children: ReactNode;
    onSearchNav: (searchData: string) => void;
}
