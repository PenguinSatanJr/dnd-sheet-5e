import {Container, Divider, Stack, Typography} from "@mui/material";
import ClassSelectButton from "./class-select-button";

interface ComponentsProps {
  children?: React.ReactNode;
}

const Components = ({children}: ComponentsProps) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom sx={{textAlign: "center"}}>
        Components
      </Typography>
      <Stack spacing={2} divider={<Divider />}>
        <Stack direction="row" spacing={4}>
          <ClassSelectButton dndClass="Barbarian" icon="/barb.jpeg" />
        </Stack>
        {children}
      </Stack>
    </Container>
  );
};

export default Components;
