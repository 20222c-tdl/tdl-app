import { IClaim } from "types/claims.types";
import { ICommunity } from "types/community.types";

export interface IClaimsManagmentProps {
    row: IClaim;
    onPostComment: (formData: any) => void;
    user: ICommunity;
}

export interface IClaimsViewProps {
    claims: IClaim[];
    loading: boolean;
    onPostComment: (formData: any) => void;
    user: any;
}

export interface ICommentProps {
    type: string;
}
