import { IClaim } from "../../types/claims.types";
import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function CollapsibleRow(props: { row: IClaim }) {
    const { row } = props;
    const [ open, setOpen ] = React.useState(false);

    return <React.Fragment>
        <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {row.userId}
            </TableCell>
            <TableCell align="center">{row.type}</TableCell>
            <TableCell align="center">{row.mainIssue}</TableCell>
            <TableCell align="center">{row.status}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Description
                        </Typography>
                        {row.description}
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>;
}
