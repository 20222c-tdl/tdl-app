export interface IClaim {
    id: string;
    userId: string;
    communityId: string;
    type: string;
    mainIssue: string;
    description: string;
    status: string;
    user: any   // TODO debería ser un IUser pero no coincide con lo que trae la API
}

export const CLAIMS_STATUS = Object.freeze([
    {
        value: 'OPEN',
        text: "Open"
    },
    {
        value: 'TAKING_ACTION',
        text: "Taking Action"
    },
    {
        value: 'RESOLVED',
        text: "Resolved"
    },
])

export interface ClaimsState {
    claims: IClaim[],
    error: unknown
    loading: boolean
}
