import { Box } from "@mui/material";
import { Header } from "./components/Header/Header";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { SignInPage } from "./pages/SingIPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: "36px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 600,
    },
  },
  values: {
    xs: 0,
    sm: 380,
    md: 768,
    lg: 1280,
    xl: 1536,
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Header />
        <Box marginTop={4} component={"main"}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
