export interface IClaim {
    id: string;
    userId: string;
    communityId: string;
    type: string;
    mainIssue: string;
    description: string;
    status: number;
}
