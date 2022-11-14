export interface IClaimsProps {
    onRegisterAClaim: (formData: IClaimFormData) => void;
    claims: IClaimFormData[];
    onEditClaim: () => void;
}

export interface IClaimFormData {
    userId?: string;
    communityId?: string;
    id?: string;
    type: string;
    mainIssue: string;
    description: string;
    status?: string;
}

export interface IClaimStatusUpdate {
    claimId: string;
    status: string;
}
