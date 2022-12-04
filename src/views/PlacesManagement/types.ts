export interface IPlacesProps {
    onPostAPlace: (formData: IPlaceFormData) => void;
    places: any[];
    onEditPlace: (formData: IPlaceFormData) => void;
    
}

export interface IPlaceFormData {
    id?: string;
    communityId?: string;
    name: string;
    description: string;
    base64Picture?: any;
    photo: any;
}

export interface IPlaceInfoFormdataProps {
    goBack: () => void;
    place: any;
    onSubmit: (formData: any) => void;
}