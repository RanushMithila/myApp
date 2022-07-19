import React from 'react';
import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessege from './ErrorMessege';

function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUri = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUri, uri]);
    }
    
    const handleRemove = (uri) => {
        setFieldValue(name, imageUri.filter(imageUris => imageUris !== uri));
    }
    return (
        <>
            <ImageInputList 
                imageUris={imageUri} 
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessege error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;