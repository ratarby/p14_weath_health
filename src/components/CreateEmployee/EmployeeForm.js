import React from 'react';
import { Form } from 'formik';
import { Button } from '@mui/material';


const EmployeeForm = ({ formFields, renderFormField, handleSubmit, isSubmitting }) => (
    <Form onSubmit={handleSubmit} id="createemployee" style={{ width: '100%' }}>
        {formFields.map((field, index) => (
            field.group ? (
                <fieldset key={`group-${field.group}`}>
                    <legend>{field.legend}</legend>
                    {field.fields.map((subField, subIndex) =>
                        renderFormField(subField, `${field.group}-${subIndex}`)
                    )}
                </fieldset>
            ) : (
                renderFormField(field, index)
            )
        ))}
        <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            style={{ marginTop: '20px' , marginBottom: '20px', width: '100%'}}
        >
            Save
        </Button>
    </Form>
);

export default EmployeeForm;
