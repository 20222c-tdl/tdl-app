
export interface CommunityInterface {
    loading: boolean;
    data: any;
    allCommunities: ICommunity[];
    communityInfo: ICommunity;
}

export interface ICommunity {
    id: string;
    email: string;
    name: string;
}