
export interface CommunityInterface {
    loading: boolean;
    data: any;
    allCommunities: ICommunity[];
    communityInfo: ICommunity;
    commentsChanged: boolean;
}

export interface ICommunity {
    id: string;
    email: string;
    name: string;
    photo: any;
}