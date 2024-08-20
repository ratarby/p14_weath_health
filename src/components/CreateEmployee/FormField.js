import React from 'react';
import { Field } from 'formik';
import { TextField, MenuItem } from '@mui/material';
import DatePickerField from './DatePickerField';


// Memoized FormField component for optimized rendering
const FormField = React.memo(({ name, label, type = 'text', options = [] }) => (
    // Formik Field component to handle form state and validation
    <Field name={name}>
        {({ field, form, meta }) => {
            // Common props for all field types
            const commonProps = {
                id: name,
                label,
                fullWidth: true,
                margin: "normal",
                error: meta.touched && !!meta.error,
                helperText: meta.touched && meta.error,
            };


            // DatePicker field
            if (type === 'date') {
                return <DatePickerField name={name} label={label} />;
            }

            // TextField for regular inputs and dropdowns
            return (
                <TextField
                    {...field}
                    {...commonProps}
                    type={type}
                    // Enable select mode for dropdowns when options are provided
                    select={options.length > 0}
                >
                    {/* Render dropdown options if available */}
                    {options.length > 0 && options.map((option, index) => (
                        <MenuItem key={index} value={option.value || option}>
                            {option.label || option}
                        </MenuItem>
                    ))}
                </TextField>
            );
        }}
    </Field>
));

export default FormField;
