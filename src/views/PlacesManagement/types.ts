export interface IPlacesProps {
    onPostAPlace: (formData: IPlaceFormData) => void;
    places: any[];
    onEditPlace: (formData: IPlaceData) => void;
    
}

export interface IPlaceFormData {
    communityId?: string;
    name: string;
    description: string;
    base64Picture?: any;
}

export interface IPlaceData {
    id: string;
    communityId?: string;
    name: string;
    description: string;
    base64Picture: any;
}

export interface IPlaceInfoFormdataProps {
    goBack: () => void;
    place: any;
    onSubmit: (formData: any) => void;
}