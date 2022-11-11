import React, { FunctionComponent } from "react";
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CollapsibleRow } from "./CollapsibleRow";
import { ClaimsState } from "../../redux/reducers/claims.reducer";
import { Skeleton } from "@mui/material";


type ClaimsViewProps = Pick<ClaimsState, "claims" | "loading">

const ClaimsManagementView: FunctionComponent<ClaimsViewProps> = (props: ClaimsViewProps) => {
    const { claims, loading } = props;

    return <Container fixed>
        {loading ?
            (
                <Skeleton variant="rectangular" height={300}/>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell/>
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
            )}
    </Container>
}

export default ClaimsManagementView;
