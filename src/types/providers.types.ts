
export interface ProvidersInterface {
    loading: boolean;
    data: any;
    providerData: IProvider;
    allCategories: ICategory[];
    providers: IProvider[];
    allProviders: IProvider[];
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
    category: ICategory;
    averageCalification: number;
    reviews: IReview[];
    services: any[]
}

export interface ICategory {
    id: string;
    name: string;
}
export interface IReview {
    reviewId: string;
    calification: number;
    reviewDescription: string;
    username: string;
    lastname: string;
}