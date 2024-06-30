import { Container } from "@mui/material";

export const ContainerCustom = ({ sx, children }) => {
  return (
    <Container
      sx={Object.assign(
        {
          maxWidth: {
            xs: "100%",
            sm: "300px",
            md: "736px",
            lg: "1240px",
            xl: "1240px",
          },
        },
        sx
      )}
    >
      {children}
    </Container>
  );
};
