import { IPlace } from "./places.types";

export interface CommunityInterface {
    loading: boolean;
    data: any;
    allCommunities: ICommunity[];
    communityInfo: ICommunity;
    commentsChanged: boolean;
    changePlaces: boolean;
    places: IPlace[];
    communityPhoto: any;
}

export interface ICommunity {
    id: string;
    email: string;
    name: string;
    role: string;
    photo: any;
}