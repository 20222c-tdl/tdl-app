export interface IClaim {
    id: string;
    userId: string;
    communityId: string;
    type: string;
    mainIssue: string;
    description: string;
    status: number;
}

export const CLAIMS_STATUS = Object.freeze([
    {
        value: 1,
        text: "Open"
    },
    {
        value: 2,
        text: "Taking Action"
    },
    {
        value: 4,
        text: "Resolved"
    },
    {
        value: 5,
        text: "Closed"
    },
])
