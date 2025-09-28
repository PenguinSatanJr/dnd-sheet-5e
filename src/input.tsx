import {
  TextField,
  type FormHelperTextProps,
  type InputBaseComponentProps,
  type TextFieldProps,
} from "@mui/material";
import merge from "lodash.merge";

interface InputProps {
  value: string;
  helperText?: TextFieldProps["helperText"];
  helperTextProps?: FormHelperTextProps;
  inputProps?: InputBaseComponentProps;
  sx?: TextFieldProps["sx"];
  setValue: (value: string) => void;
}

const DEFAULT_HELPER_TEXT_PROPS: FormHelperTextProps = {
  sx: { m: 0, fontSize: "0.9rem", fontWeight: "bold" },
};

const DEFAULT_INPUT_PROPS: InputBaseComponentProps = {
  sx: { padding: 0.5 },
};

const DEFAULT_SX: TextFieldProps["sx"] = { minWidth: 200 };

const Input = ({
  value,
  helperText,
  helperTextProps,
  inputProps,
  sx,
  setValue,
}: InputProps) => {
  const mergedHelperTextProps = merge(
    {},
    DEFAULT_HELPER_TEXT_PROPS,
    helperTextProps
  );

  const innerInputProps = merge({}, DEFAULT_INPUT_PROPS, inputProps);

  const sxProps = merge({}, DEFAULT_SX, sx);

  return (
    <TextField
      value={value}
      helperText={helperText}
      slotProps={{
        formHelperText: mergedHelperTextProps,
        htmlInput: innerInputProps,
      }}
      sx={sxProps}
      variant="outlined"
      size="small"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default Input;
