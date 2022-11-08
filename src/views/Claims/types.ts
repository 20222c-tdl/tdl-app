export interface IClaimsProps {
    onRegisterAClaim: (formData: IClaimFormData) => void;
}

export interface IClaimFormData {
    userId?: string;
    communityId?: string;
    type: string;
    mainIssue: string;
    description: string;
}