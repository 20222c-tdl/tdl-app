
export interface PlacesInterface {
    places: IPlace[];
    changePlaces: boolean;
    loading: boolean;
    placeData: any;
}


export interface IPlace {
    id: string;
    name: string;
    description: string;
}