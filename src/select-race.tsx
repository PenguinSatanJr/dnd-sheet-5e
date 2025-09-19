import {
  Box,
  MenuItem,
  TextField,
  type FormHelperTextProps,
  type InputBaseComponentProps,
  type TextFieldProps,
} from "@mui/material";
import merge from "lodash.merge";
import { races } from "./race";

interface SelectRaceProps {
  helperText?: TextFieldProps["helperText"];
  helperTextProps?: FormHelperTextProps;
  inputProps?: InputBaseComponentProps;
  sx?: TextFieldProps["sx"];
}

const DEFAULT_HELPER_TEXT_PROPS: FormHelperTextProps = {
  sx: { m: 0, fontSize: "0.9rem", fontWeight: "bold" },
};

const DEFAULT_INPUT_PROPS: InputBaseComponentProps = {
  sx: { padding: 0.5 },
};

const DEFAULT_SX: TextFieldProps["sx"] = { minWidth: 200 };

const SelectRace = ({
  helperText,
  helperTextProps,
  inputProps,
  sx,
}: SelectRaceProps) => {
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
      {races.map((race, index) => (
        <MenuItem key={index} value={race.name}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <img
              src={race.image}
              style={{
                width: "24px",
                justifyContent: "center",
                alignContent: "center",
              }}
            />
            {race.name}
          </Box>
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectRace;
