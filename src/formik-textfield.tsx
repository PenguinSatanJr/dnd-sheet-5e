import { TextField, type TextFieldProps } from "@mui/material";
import { FastField, type FieldProps } from "formik";
import * as React from "react";

type FormikTextFieldProps = {
  name: string;
  onChange?: (event: React.ChangeEvent<unknown>) => void;
} & TextFieldProps;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultOnChange = () => {};

const FormikTextField = ({
  name,
  onChange = defaultOnChange,
  helperText: helperTextProp,
  ...props
}: FormikTextFieldProps) => {
  return (
    <FastField name={name}>
      {({ field, meta }: FieldProps) => {
        const handleChange = (event: React.ChangeEvent<unknown>) => {
          onChange(event);
          field.onChange(event);
        };

        const handleBlur = (event: React.FocusEvent<unknown>) => {
          field.onBlur(event);
        };

        const isError = !!(meta.touched && meta.error);
        const helperText = isError ? meta.error : helperTextProp;

        return (
          <TextField
            slotProps={{ htmlInput: { sx: { paddingY: 0.5 } } }}
            {...props}
            {...field}
            value={
              typeof field.value === "string" || typeof field.value === "number"
                ? field.value
                : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
            error={isError}
            helperText={helperText}
          />
        );
      }}
    </FastField>
  );
};

export default FormikTextField;
