export interface IClaimsProps {
    onRegisterAClaim: (formData: IClaimFormData) => void;
    onPostComment: (formData: any) => void;
    claims: IClaimFormData[];
    onEditClaim: (formData: IClaimFormData) => void;
}

export interface IClaimFormData {
    userId?: string;
    communityId?: string;
    id?: string;
    type: string;
    mainIssue: string;
    description: string;
    status?: string;
    claimComments?: any[];
}

export interface IClaimStatusUpdate {
    claimId: string;
    status: string;
}

export interface IClaimInfoFormdataProps {
    goBack: () => void;
    claim: IClaimFormData;
    onSubmit: (formData: IClaimFormData) => void;
}