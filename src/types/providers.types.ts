import { IServiceData } from "views/ProviderDetails/types";
import { IService } from "views/Services/types";
import { IUser } from "./user.types";

export interface ProvidersInterface {
    loading: boolean;
    data: any;
    providerData: IProvider;
    allCategories: ICategory[];
    providers: IProvider[];
    allProviders: IProvider[];
    providerServices: IServiceData[];
    providerReviews: IProviderReview[];
    getProfile: boolean;
    changeServices: boolean;
    providerProfile: IProvider;
    providerPhoto: IProvider;
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
    services: IService[]
    photo: any;
}

export interface IProviderFormData {
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
    services: IService[]
    base64Picture: any;
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

export interface IProviderReview {
    reviews: IProviderReviews[];
    totalRating: string;
}

export interface IProviderReviews {
    review: any;
    user: IUser;
}