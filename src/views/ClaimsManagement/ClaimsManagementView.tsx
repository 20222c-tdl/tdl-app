import React, { FunctionComponent } from "react";

import { CollapsibleRow } from "./CollapsibleRow";
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
import { ClaimsState } from "../../types/claims.types";
import { IClaimsViewProps } from "./types";
import { ClaimsIcon, EmptyContainer, Title } from "./styles";

const ClaimsManagementView: FunctionComponent<IClaimsViewProps> = (props: IClaimsViewProps) => {
    const {
        claims,
        loading,
        onPostComment,
        user,
        comments,
        setComments,
        status,
        setStatus,
        opens,
        setOpens,
        openComments,
        setOpenComments
    } = props;

    return <Container fixed>
        {claims && !claims.length
            ?
            <EmptyContainer>
                <ClaimsIcon />
                <Title>There are no claims yet</Title>
            </EmptyContainer>
            :
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Main Issue</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {claims.map((claim, index) =>
                            <CollapsibleRow
                                key={claim.id}
                                row={claim}
                                onPostComment={onPostComment}
                                user={user}
                                comments={comments}
                                setComments={setComments}
                                statusArray={status}
                                setStatusArray={setStatus}
                                index={index}
                                opens={opens}
                                setOpens={setOpens}
                                openComments={openComments}
                                setOpenComments={setOpenComments}
                            />)
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        }
    </Container >
}

export default ClaimsManagementView;
