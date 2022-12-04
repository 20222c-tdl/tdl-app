
export interface ProvidersInterface {
    loading: boolean;
    data: any;
    providerData: IProvider;
    allCategories: ICategory[];
    providers: IProvider[];
    allProviders: IProvider[];
    providerServices: any[];
    providerReviews: any;
    getProfile: boolean;
    changeServices: boolean;
    providerProfile: any;
    providerPhoto: any;
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
    photo: any;
}

export interface ICategory {
    id: string;
    name: string;
}
export interface IReview {
    id: string;
    rating: number;
    comment: string;
    userId: string;
    providerId: string;
}