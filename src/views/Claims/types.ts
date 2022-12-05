import { IUser } from "types/user.types";

export interface IClaimsProps {
    onRegisterAClaim: (formData: IClaimFormData) => void;
    onPostComment: (formData: ICommentFormData) => void;
    claims: IClaim[];
    onEditClaim: (formData: IClaim) => void;
}

export interface IClaimFormData {
    communityId?: string;
    type: string;
    mainIssue: string;
    description: string;
}

export interface IClaim {
    userId: string;
    communityId: string;
    id: string;
    type: string;
    mainIssue: string;
    description: string;
    status: string;
    claimComments: IClaimComment[];
}

export interface IClaimEditFormData {
    type: string;
    mainIssue: string;
    description: string;
}
export interface IClaimData {
    userId: string;
    communityId: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    type: string;
    mainIssue: string;
    description: string;
    status: string;
    claimComments: IClaimComment[];
    user: IUser;
}

export interface IClaimComment {
    claimId: string;
    comment: string;
    date: string;
    entityId: string;
    id: string;
    role: string;
}

export interface IClaimCommentFormData {
    claimId: string;
    comment: string;
    date: string;
    entityId: string;
    role: string;
}

export interface IClaimStatusUpdate {
    claimId: string;
    status: string;
}

export interface IClaimInfoFormdataProps {
    goBack: () => void;
    claim: IClaim;
    onSubmit: (formData: IClaim) => void;
}

export interface ICommentProps {
    isMe?: boolean;
}

export interface ICommentFormData {
    claimId: string;
    comment: string;
}

export interface ICommentFormProps {
    claimId: string;
    onPostComment: (formData: ICommentFormData) => void;
}