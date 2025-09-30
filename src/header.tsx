import { Box, Stack } from "@mui/material";
import CharacterNameInput from "./character-name-input";
import SelectItems from "./select-component";
import { races } from "./races";

const Header = () => {
  return (
    <Box
      sx={{
        gridArea: "header",
        display: "flex",
        paddingX: 4,
        paddingTop: 2,
      }}
    >
      <Stack direction={"row"} width={"100%"} spacing={2} alignItems={"center"}>
        <CharacterNameInput />
        <Stack width={"100%"}>
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <SelectItems helperText={"Race"} values={races} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
