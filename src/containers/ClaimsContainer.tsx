import React, { FunctionComponent } from "react";
import ClaimsView from "../views/Claims/ClaimsView";

export interface IClaim {
    id: string;
    userId: string;
    communityId: string;
    type: string;
    mainIssue: string;
    description: string;
    status: number;
}

const ClaimsContainer: FunctionComponent = () => {
    const claims: IClaim[] = [
        {
            id: '9ab122bb-00b9-4a28-b030-c144e9513481',
            userId: 'b000d544-3b99-40d5-b075-976b1ff3d16d',
            communityId: 'eaa72790-2cf3-40d3-bdf4-edf4cf91ed68',
            type: 'claim type',
            mainIssue: 'claim main issue',
            description: 'claim descrption',
            status: 1,
        }
    ]

    return <ClaimsView claims={claims}/>
}

export default ClaimsContainer;
