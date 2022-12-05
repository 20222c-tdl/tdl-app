import { IClaim } from "types/claims.types";
import { ICommunity } from "types/community.types";

export interface IClaimsManagmentProps {
    row: IClaim;
    onPostComment: (formData: ICommentFormData) => void;
    user: ICommunity;
    comments: any[];
    setComments: any;
    statusArray: any;
    setStatusArray: any;
    index: number;
    opens: any;
    setOpens: any;
    openComments: any;
    setOpenComments: any;
}

export interface IClaimsViewProps {
    claims: IClaim[];
    loading: boolean;
    onPostComment: (formData: any) => void;
    user: any;
    comments: any[];
    setComments: any;
    status: any;
    setStatus: any;
    opens: any;
    setOpens: any;
    openComments: any;
    setOpenComments: any;
}

export interface ICommentProps {
    type: string;
}

export interface ICommentFormData {
    claimId: string;
    comment: string;
}

export interface IClaimCommentFormData {
    claimId: string;
    comment: string;
    date: string;
    entityId: string;
    role: string;
}