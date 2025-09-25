import {
  Box,
  MenuItem,
  TextField,
  type FormHelperTextProps,
  type InputBaseComponentProps,
  type TextFieldProps,
} from "@mui/material";
import merge from "lodash.merge";

interface SelectComponentProps {
  helperText?: TextFieldProps["helperText"];
  helperTextProps?: FormHelperTextProps;
  inputProps?: InputBaseComponentProps;
  sx?: TextFieldProps["sx"];
  values: { name: string; img: string }[];
}

const DEFAULT_HELPER_TEXT_PROPS: FormHelperTextProps = {
  sx: { m: 0, fontSize: "0.9rem", fontWeight: "bold" },
};

const DEFAULT_INPUT_PROPS: InputBaseComponentProps = {
  sx: { padding: 0.5 },
};

const DEFAULT_SX: TextFieldProps["sx"] = { minWidth: 200 };

const SelectItems = ({
  helperText,
  helperTextProps,
  inputProps,
  sx,
  values,
}: SelectComponentProps) => {
  const mergedHelperTextProps = merge(
    {},
    DEFAULT_HELPER_TEXT_PROPS,
    helperTextProps
  );

  const innerInputProps = merge({}, DEFAULT_INPUT_PROPS, inputProps);
  const sxProps = merge({}, DEFAULT_SX, sx);
  return (
    <TextField
      select
      variant="outlined"
      size="small"
      helperText={helperText}
      slotProps={{
        formHelperText: mergedHelperTextProps,
        htmlInput: innerInputProps,
      }}
      sx={sxProps}
    >
      {values.map((value, index) => (
        <MenuItem key={index} value={value.name}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <img
              src={value.img}
              style={{
                width: "24px",
                justifyContent: "center",
                alignContent: "center",
              }}
            />
            {value.name}
          </Box>
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectItems;
