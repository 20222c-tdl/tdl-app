import { CLAIMS_STATUS, IClaim } from "../../types/claims.types";
import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Box, Collapse, Grid, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { onUpdateClaimStatusRequested } from "../../redux/actions/claims.actions";
import { useDispatch } from "react-redux";
import { IClaimStatusUpdate } from "../Claims/types";
import { CommentsButton, CommentsDiv, Description, RowDiv, Comment, Text, CommentDescription, StatusText, TimeText } from "./styles";
import CommentIcon from '@mui/icons-material/Comment';
import CommentForm from "./components/CommentForm";
import { IClaimsManagmentProps } from "./types";
import { onCommunityPostCommentRequested } from "redux/actions/community.actions";

export function CollapsibleRow(props: IClaimsManagmentProps) {
    const {
        row,
        onPostComment,
        user,
        comments,
        setComments,
        statusArray,
        setStatusArray,
        index,
        opens,
        setOpens,
        openComments,
        setOpenComments
    } = props;
    const dispatch = useDispatch();

    const [currentClaim, setCurrentClaim] = useState<any>(null);
    const userNameClaim = row.user.firstName + " " + row.user.lastName;

    const handleNameStatus = (status: string) => {
        if (status === "OPEN") return "OPEN";
        if (status === "TAKING_ACTION") return "TAKING ACTION";
        if (status === "RESOLVED") return "RESOLVED";
    };

    const handleStatusChange = (
        event: React.MouseEvent<HTMLElement>,
        newStatus: string,
    ) => {
        if (newStatus !== null) {
            const data: IClaimStatusUpdate = {
                claimId: row.id,
                status: newStatus
            }
            const commentData = {
                claimId: row.id,
                entityId: user.id,
                role: user.role,
                comment: "The claim has changed it's status from " + handleNameStatus(row.status) + " to " + handleNameStatus(newStatus),
                date: (new Date()).toISOString(),
            }
            setComments(comments.concat(commentData))
            const statuses = [...statusArray];
            statuses[index] = newStatus;
            setStatusArray(statuses);

            dispatch(onCommunityPostCommentRequested(commentData))
            dispatch(onUpdateClaimStatusRequested(data))
        }
    };

    return <React.Fragment>
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell padding="checkbox">
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => {
                        const newOpens = [...opens];
                        newOpens[index] = !newOpens[index];
                        setOpens(newOpens);
                        setComments(row.claimComments)
                        setOpenComments(false)
                    }}
                >
                    {opens[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {row.id}
            </TableCell>
            <TableCell component="th" scope="row">
                {row.user.firstName}
            </TableCell>
            <TableCell component="th" scope="row">
                {row.user.lastName}
            </TableCell>
            <TableCell align="center">{row.type}</TableCell>
            <TableCell align="center">{row.mainIssue}</TableCell>
            <TableCell align="center"><StatusText color={statusArray[index]}>{handleNameStatus(statusArray[index])}</StatusText></TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                <Collapse in={opens[index]} timeout="auto">
                    <Box sx={{ margin: 1 }}>
                        <Grid container spacing={2}>
                            <RowDiv>
                                <Grid item xs={8}>
                                    <Description style={{ paddingTop: 20 }}><b>Description:</b></Description>
                                    <Description style={{ paddingLeft: 6, paddingBottom: 20 }}>{row.description}</Description>
                                    <CommentsDiv>
                                        <CommentsButton onClick={() => {
                                            setOpenComments(!openComments)
                                            setCurrentClaim(row)
                                        }}>{openComments && row && currentClaim && currentClaim.id === row.id ? "Close comments" : "View comments"}</CommentsButton>
                                    </CommentsDiv>
                                    {openComments && comments.map((comment) => {
                                        let commentType;
                                        if (comment.comment.includes("RESOLVED")) commentType = "resolved"
                                        else if (comment.comment.includes("TAKING ACTION")) commentType = "taking action"
                                        else commentType = comment.role

                                        const commentDate = comment.date.split('T')[0]
                                        const commentTime0 = comment.date.split('T')[1].split(':')[0]
                                        const commentTime1 = comment.date.split('T')[1].split('.')[0].split(':')[1]

                                        return (
                                            <>
                                                <Comment typeComment={commentType} key={row.id}>
                                                    <RowDiv>
                                                        <Text isBold>{comment.role === "community" ? "Admin" : userNameClaim}</Text>
                                                        <TimeText>{commentDate + ' ' + commentTime0 + ':' + commentTime1}</TimeText>
                                                    </RowDiv>
                                                    <CommentDescription>{comment.comment}</CommentDescription>
                                                </Comment>
                                            </>
                                        )
                                    })
                                    }
                                    {
                                        openComments && row && currentClaim && currentClaim.id === row.id && row.claimComments && !row.claimComments.length &&
                                        <RowDiv>
                                            <CommentIcon />
                                            <Description>There are no comments yet</Description>
                                        </RowDiv>
                                    }
                                    <CommentForm
                                        onPostComment={onPostComment}
                                        claimId={row.id}
                                    />
                                </Grid>
                            </RowDiv>

                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="stretch"
                                item
                                xs={12}
                            >
                                <ToggleButtonGroup
                                    color="primary"
                                    value={handleNameStatus(statusArray[index])}
                                    exclusive
                                    onChange={handleStatusChange}
                                    aria-label="Platform"
                                >
                                    {CLAIMS_STATUS.map(status =>
                                        <ToggleButton key={status.value} value={status.value}>{status.text}</ToggleButton>
                                    )}
                                </ToggleButtonGroup>
                            </Grid>
                        </Grid>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>;
}

