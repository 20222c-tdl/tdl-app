import { CLAIMS_STATUS, IClaim } from "../../types/claims.types";
import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Box, Collapse, Grid, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { onUpdateClaimStatusRequested } from "../../redux/actions/claims.actions";
import { useDispatch } from "react-redux";
import { IClaimStatusUpdate } from "../Claims/types";

export function CollapsibleRow(props: { row: IClaim }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleStatusChange = (
        event: React.MouseEvent<HTMLElement>,
        newStatus: string,
    ) => {
        if (newStatus !== null) {
            const data: IClaimStatusUpdate = {
                claimId: row.id,
                status: newStatus
            }
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
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
            <TableCell align="center">{row.status}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Typography variant="h5" gutterBottom component="div">
                                    Description:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                {row.description}
                            </Grid>
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
                                    value={row.status}
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

