import {
  TextField,
  type FormHelperTextProps,
  type InputBaseComponentProps,
  type TextFieldProps,
} from "@mui/material";
import merge from "lodash.merge";
import { useState } from "react";

interface InputCharacterNameProps {
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

const InputCharacterName = ({
  helperText,
  helperTextProps,
  inputProps,
  sx,
}: InputCharacterNameProps) => {
  const mergedHelperTextProps = merge(
    {},
    DEFAULT_HELPER_TEXT_PROPS,
    helperTextProps
  );

  const [characterName, setCharacterName] = useState<string>("");

  const innerInputProps = merge({}, DEFAULT_INPUT_PROPS, inputProps);
  const sxProps = merge({}, DEFAULT_SX, sx);
  return (
    <TextField
      variant="outlined"
      size="small"
      helperText={helperText}
      value={characterName}
      onChange={(e) => {
        setCharacterName(
          characterName.slice(-1) === " "
            ? e.target.value.trim() + " "
            : e.target.value
        );
        localStorage.setItem("MyPerson", characterName);
        console.log(localStorage.getItem("MyPerson"));
      }}
      slotProps={{
        formHelperText: mergedHelperTextProps,
        htmlInput: innerInputProps,
      }}
      sx={sxProps}
    />
  );
};

export default InputCharacterName;
