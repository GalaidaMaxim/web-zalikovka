import { Box } from "@mui/material";
import { Header } from "./components/Header/Header";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { SignInPage } from "./pages/SingIPage";
import { Redirection } from "./components/Redirection/Redirection";
import { EducationPlan } from "./pages/EducationPlan";
import { Marks } from "./pages/Marks";
import { darkTheme } from "./theme/darkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Header />
        <Box marginTop={4} marginBottom={4} component={"main"}>
          <Routes>
            <Route
              path="/"
              element={
                <Redirection auth>
                  <MainPage />
                </Redirection>
              }
            />

            <Route
              path="/signin"
              element={
                <Redirection auth>
                  <SignInPage />
                </Redirection>
              }
            />

            <Route
              path="/plan"
              element={
                <Redirection>
                  <EducationPlan />
                </Redirection>
              }
            />
            <Route
              path="/marks"
              element={
                <Redirection>
                  <Marks />
                </Redirection>
              }
            />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
