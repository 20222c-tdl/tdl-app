import React, { FunctionComponent } from "react";
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IClaim } from "../../types/claims.types";
import { CollapsibleRow } from "./CollapsibleRow";

interface IClaimsViewProps {
    claims: IClaim[]
}

const ClaimsManagementView: FunctionComponent<IClaimsViewProps> = (props: IClaimsViewProps) => {
    const { claims } = props;

    return <Container fixed>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>userId</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Main Issue</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {claims.map((claim) => <CollapsibleRow key={claim.id} row={claim}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
}

export default ClaimsManagementView;
