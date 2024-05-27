import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

const TableComponent = ({ tableConfig, Align }) => {
    const { columns, data, registrations } = tableConfig;

    return (
        <TableContainer sx={{ boxShadow: 'none', color: 'black' }} component={Paper}>
            <Table sx={{ maxWidth: "100%", borderCollapse: 'separate' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {registrations.map((registration) => (
                            <TableCell align={Align} colSpan={registration.span} sx={{ fontWeight: '900' }} key={registration.fields}>
                                {registration.head}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell align={Align} sx={{ fontWeight: 'bold' }} key={column.field}>
                                {column.headerName}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                '&:hover': {
                                    backgroundColor: row.type === 'bold' ? 'none' : '#f5f5f599',
                                },
                            }}
                            key={index}
                        >
                            {columns.map((column) => (
                                <TableCell align={Align} sx={{ fontWeight: row.type || '400' }} key={column.field}>
                                    {column.isLink ? (
                                        <Link href={row[column.field].url} target="_blank" rel="noopener noreferrer">
                                            {row[column.field].text}
                                        </Link>
                                    ) : (
                                        row[column.field]
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
