import {
  TextField,
  type FormHelperTextProps,
  type InputBaseComponentProps,
  type TextFieldProps,
} from "@mui/material";
import merge from "lodash.merge";

interface InputProps {
  helperText?: TextFieldProps["helperText"];
  helperTextProps?: FormHelperTextProps;
  inputProps?: InputBaseComponentProps;
  sx?: TextFieldProps["sx"];
}

const DEFAULT_HELPER_TEXT_PROPS: FormHelperTextProps = {
  sx: {m: 0, fontSize: "0.9rem", fontWeight: "bold"},
};

const DEFAULT_INPUT_PROPS: InputBaseComponentProps = {
  sx: {padding: 0.5},
};

const DEFAULT_SX: TextFieldProps["sx"] = {minWidth: 200};

const Input = ({helperText, helperTextProps, inputProps, sx}: InputProps) => {
  const mergedHelperTextProps = merge(
    {},
    DEFAULT_HELPER_TEXT_PROPS,
    helperTextProps
  );

  const innerInputProps = merge({}, DEFAULT_INPUT_PROPS, inputProps);

  const sxProps = merge({}, DEFAULT_SX, sx);

  return (
    <TextField
      variant="outlined"
      size="small"
      helperText={helperText}
      slotProps={{
        formHelperText: mergedHelperTextProps,
        htmlInput: innerInputProps,
      }}
      sx={sxProps}
    />
  );
};

export default Input;
