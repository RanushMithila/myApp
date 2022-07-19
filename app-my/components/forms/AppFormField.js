import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessege from './ErrorMessege';

function AppFormField({ name, width, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();


    return (
        <>
            <AppTextInput 
                onBlur={() => setFieldTouched(name)}
                onChange={ handleChange(name) }
                width={width}
                { ...otherProps }
            />
            <ErrorMessege 
                error={errors[name]}
                visible={touched[name]}
            />
        </>
    );
}

export default AppFormField;