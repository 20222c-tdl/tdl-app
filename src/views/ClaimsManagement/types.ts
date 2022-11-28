import { IClaim } from "types/claims.types";

export interface IClaimsManagmentProps {
    row: IClaim;
    onPostComment: (formData: any) => void;
}

export interface IClaimsViewProps {
    claims: IClaim[];
    loading: boolean;
    onPostComment: (formData: any) => void;
}

export interface ICommentProps {
    isAdmin?: boolean;
  }
