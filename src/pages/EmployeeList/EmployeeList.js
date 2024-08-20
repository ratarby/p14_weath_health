import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function EmployeeList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
        { field: 'startDate', headerName: 'Start Date', width: 150 },
        { field: 'street', headerName: 'Street', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'state', headerName: 'State', width: 100 },
        { field: 'zipCode', headerName: 'Zip Code', width: 120 },
        { field: 'department', headerName: 'Department', width: 150 },
    ];

    const rows = [
        { id: 1, firstName: 'John', lastName: 'Doe', dateOfBirth: '01-01-1990', startDate: '01-01-2020', street: '123 Main St', city: 'New York', state: 'NY', zipCode: '10001', department: 'Sales' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', dateOfBirth: '01-01-1995', startDate: '01-01-2021', street: '456 Main St', city: 'New York', state: 'NY', zipCode: '10001', department: 'Marketing' },
        // Add more rows here...
    ];

    return (
        <Box m="1.5rem 2.5rem">
            <header>
                <Typography variant="h3" component="h1" fontWeight="bold" mt="20px" mb="20px">
                    Employees
                </Typography>
                <Typography variant="body1" component="p">
                    List of Employees
                </Typography>
            </header>
            <Box sx={{ height: '55vh', width: '100%' }} mt="40px">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        sorting: {
                            sortModel: [{ field: 'id', sort: 'desc' }],
                        },
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        }
                    }}
                    pageSizeOptions={[10, 25, 50, 100]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    aria-label="Employee list"
                />
            </Box>
        </Box>
    );
}
