import { IClaim } from "types/claims.types";
import { ICommunity } from "types/community.types";

export interface IClaimsManagmentProps {
    row: IClaim;
    onPostComment: (formData: any) => void;
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
