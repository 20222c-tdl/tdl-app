import React, { FunctionComponent } from "react";
import { IClaim } from "../../containers/ClaimsContainer";

interface IClaimsViewProps {
    claims: IClaim[]
}

const ClaimsView: FunctionComponent<IClaimsViewProps> = (props: IClaimsViewProps) => {
    const { claims } = props;

    return <table>
        <tr>
            <th>id</th>
            <th>status</th>
        </tr>
        {claims.map(({ id, status }) => (
            <tr>
                <td>{id}</td>
                <td>{status}</td>
            </tr>
        ))}
    </table>
}

export default ClaimsView;
