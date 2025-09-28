import { Box, Container } from "@mui/material";
import Header from "./header";

const App = () => {
  return (
    <Container
      disableGutters
      sx={{
        height: "100%",
        backgroundColor: "#c2baa3ff",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 5fr 2fr",
        gridTemplateAreas: `
          "header header header header"
          "characteristics skills-throws battle-stats features-traits"
          "other other battle-stats features-traits"
        `,
        gap: 1,
      }}
    >
      <Header />
      <Box
        sx={{ backgroundColor: "#7c8fb6ff", gridArea: "characteristics" }}
      ></Box>
      <Box sx={{ backgroundColor: "#9e5091ff", gridArea: "skills-throws" }}></Box>
      <Box sx={{ backgroundColor: "#beca76ff", gridArea: "battle-stats" }}></Box>
      <Box
        sx={{ backgroundColor: "#b3855fff", gridArea: "features-traits" }}
      ></Box>
      <Box sx={{ backgroundColor: "#81142cff", gridArea: "other" }}></Box>
    </Container>
  );
};

export default App;
