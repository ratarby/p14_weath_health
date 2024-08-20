// Import necessary React hooks and components
import React, { useMemo, useCallback, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Import custom constants and components
import { departments, states } from '../../components/Constants/Constants';
import { Link } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import EmployeeForm from '../../components/CreateEmployee/EmployeeForm';
import FormField from '../../components/CreateEmployee/FormField';
import Modal from '../../components/CreateEmployee/Modal';

// Import date-related libraries
import dayjs from 'dayjs';



// Define the validation schema for the form
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dateOfBirth: Yup.date()
        .transform((value, originalValue) => {
            return dayjs(originalValue, 'MM-DD-YYYY').toDate();
        })
        .min(dayjs().subtract(120, 'year').toDate(), 'Invalid birth date')
        .max(dayjs().subtract(18, 'year').toDate(), 'Must be at least 18 years old')
        .required('Birth date is Required'),
    startDate: Yup.date()
        .transform((value, originalValue) => {
            return dayjs(originalValue, 'MM-DD-YYYY').toDate();
        })
        .min(dayjs('1970-01-01').toDate(), 'Start date must not be before 1970')
        .required('Start Date is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State'),
    zipCode: Yup.string().matches(/^\d{5}$/, 'Must be exactly 5 digits').required('Zip code is required'),
    department: Yup.string().required('Department is required'),
});

// Define initial values for the form fields
const initialValues = {
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
};

// Define the structure of form fields
const formFields = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "dateOfBirth", label: "Date of Birth", type: "date" },
    { name: "startDate", label: "Start Date", type: "date" },
    {
        group: "address",
        legend: "Address",
        fields: [
            { name: "street", label: "Street" },
            { name: "city", label: "City" },
            { name: "state", label: "State", options: states },
            { name: "zipCode", label: "Zip Code" }
        ]
    },
    { name: "department", label: "Department", options: departments },
];

// Create the CreateEmployee component
const CreateEmployee = React.memo(() => {
    const [modalOpen, setModalOpen] = useState(false);
    // Memoize the validation schema
    const memoizedValidationSchema = useMemo(() => validationSchema, []);

    // Define the form submission handler
    const saveEmployee = useCallback((values, { setSubmitting, resetForm }) => {
        // Log the submitted values to the console
        const formattedValues = {
            ...values,
            dateOfBirth: values.dateOfBirth.format('MM-DD-YYYY'),
            startDate: values.startDate.format('MM-DD-YYYY'),
        };
        // Reset the form after submission
        console.log('Employee Data:', formattedValues);
        setSubmitting(false);
        setModalOpen(true);
        resetForm();
    }, []);

    const handleModalClose = () => setModalOpen(false);


    // Render individual form fields
    const renderFormField = useCallback((field, index) => (
        <FormField key={index} {...field} />
    ), []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                maxWidth={500}
                margin="0 auto"
                padding="25px"
            >
                <Typography variant="h4" fontWeight="bold" mt="20px" mb="20px">
                    Create an Employee
                </Typography>
                <Button component={Link} to="/employeelist" variant="outlined" sx={{ mb: 2 }}>
                    <Typography variant="body1" textTransform="capitalize">
                        View Current Employees
                    </Typography>
                </Button>

                {/* Formik form component */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={memoizedValidationSchema}
                    onSubmit={saveEmployee}
                >
                    
                    {({ isSubmitting, handleSubmit }) => (
                        <EmployeeForm
                            formFields={formFields}
                            renderFormField={renderFormField}
                            handleSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                        />
                    )}
                </Formik>
            </Box>
            {/* Modal for success message */}
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                title="Employee Created Successfully"
            />
        </LocalizationProvider>
    );
});

export default CreateEmployee;
