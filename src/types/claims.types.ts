import { IClaimComment } from "views/Claims/types";
import { IUser } from "./user.types";

export interface IClaim {
    id: string;
    userId: string;
    communityId: string;
    type: string;
    mainIssue: string;
    description: string;
    status: string;
    user: IUser
    claimComments: IClaimComment[];
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
    claimHasChanged: boolean,
}
