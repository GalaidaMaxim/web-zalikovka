import { Box, Button, Paper } from "@mui/material";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Button variant="contained" color="secondary">
          sasdsa
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
