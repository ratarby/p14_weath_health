import React from 'react';
import { Field } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { frFR } from '@mui/x-date-pickers/locales';

const DatePickerField = ({ name, label }) => (
    <Field name={name}>
        {({ field, form, meta }) => {
            const commonProps = {
                id: name,
                label,
                fullWidth: true,
                margin: "normal",
                error: meta.touched && !!meta.error,
                helperText: meta.touched && meta.error,
            };

            return (
                <DatePicker
                    {...field}
                    {...commonProps}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) => form.setFieldValue(name, date)}
                    slotProps={{ textField: commonProps }}
                    localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText}
                />
            );
        }}
    </Field>
);

export default DatePickerField;
