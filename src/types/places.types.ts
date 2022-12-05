
export interface PlacesInterface {
    places: IPlace[];
    changePlaces: boolean;
    loading: boolean;
    placeData: IPlace;
}


export interface IPlace {
    id: string;
    name: string;
    description: string;
    photo: any;
}