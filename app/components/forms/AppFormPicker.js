import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessege from "./ErrorMessege";

function AppFormPicker({ 
  items, 
  name, 
  placeholder, 
  width, 
  PickerItemComponent, 
  numberOfColumns
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent} // <==============|
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessege error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
