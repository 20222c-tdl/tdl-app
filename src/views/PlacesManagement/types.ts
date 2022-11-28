export interface IPlacesProps {
    onPostAPlace: (formData: IPlaceFormData) => void;
    places: any[];
    onEditPlace: (formData: IPlaceFormData) => void;
    
}

export interface IPlaceFormData {
    communityId?: string
    name: string;
    description: string;
}

export interface IPlaceInfoFormdataProps {
    goBack: () => void;
    place: any;
    onSubmit: (formData: any) => void;
}