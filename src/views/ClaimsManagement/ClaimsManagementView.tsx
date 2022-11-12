import React, { FunctionComponent } from "react";

import { CollapsibleRow } from "./CollapsibleRow";
import { ClaimsState } from "../../redux/reducers/claims.reducer";
import {
    Container,
    Paper,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";


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
