import { Box, Stack } from "@mui/material";
import CharacterNameInput from "./character-name-input";

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
      </Stack>
    </Box>
  );
};

export default Header;
