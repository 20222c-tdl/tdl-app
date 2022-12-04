export interface IServicesProps {
    onPostAService: (formData: IServiceFormData) => void;
    providerServices: any[];
    onEditService: (formData: IServiceFormData) => void;
}

export interface IServiceFormData {
    id?: string;
    title: string;
    description: string;
    price: number;
    monetizationType: string;
}

export interface IService {
    id: string;
    title: string;
    description: string;
    price: number;
    monetizationType: string;
}

export interface IServiceInfoFormdataProps {
    goBack: () => void;
    service: IServiceFormData;
    onSubmit: (formData: IServiceFormData) => void;
}