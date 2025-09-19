import {Avatar, Button, Paper} from "@mui/material";

interface ClassSelectButtonProps {
  dndClass: string;
  icon: string;
}

const ClassSelectButton = ({dndClass, icon}: ClassSelectButtonProps) => {
  return (
    <Button
      component={Paper}
      variant="outlined"
      elevation={3}
      size="small"
      sx={{paddingX: 1}}
      startIcon={
        <Avatar
          sx={{
            width: 24,
            height: 24,
            filter: "saturate(3) brightness(0.7)",
            borderRadius: "10%",
          }}
          alt={dndClass}
          src={icon}
        />
      }
    >
      {dndClass}
    </Button>
  );
};

export default ClassSelectButton;
