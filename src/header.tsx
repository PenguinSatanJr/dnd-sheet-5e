import {Box, Stack} from "@mui/material";
import Input from "./input";
import InputCharacterName from "./input-character-name";

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
        <InputCharacterName helperText="Character name" sx={{width: "max(30%, 200px)"}} />

        <Stack width={"100%"}>
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Input helperText="Class" />
            <Input helperText="Background" />
            <Input helperText="Player name" />
          </Stack>

          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Input helperText="Race" />
            <Input helperText="Alignment" />
            <Input helperText="Experience points" />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
