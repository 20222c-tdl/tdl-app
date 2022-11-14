
export interface ProvidersInterface {
    loading: boolean;
    data: any;
    providerData: IProvider;
    allCategories: ICategory[];
    providers: IProvider[];
}

export interface IProvider {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    identityNumber: string;
    phoneNumber: string;
    categoryId: string;
}

export interface ICategory {
    id: string;
    name: string;
}