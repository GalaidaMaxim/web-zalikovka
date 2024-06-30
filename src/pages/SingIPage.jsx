import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { signInOperation } from "../redux/operations";
import { useDispatch } from "react-redux";

export const SignInPage = () => {
  const [ticketCode, setTicketCode] = useState("");
  const dispatch = useDispatch();
  const run = async (event) => {
    event.preventDefault();
    dispatch(signInOperation(ticketCode));
  };
  return (
    <Box paddingTop={10} minHeight={"60vh"}>
      <Paper
        elevation={3}
        sx={{
          width: "600px",
          height: "300px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        component={"form"}
        onSubmit={run}
      >
        <Typography textAlign={"center"} variant="h3">
          Увійти до заліковки
        </Typography>
        <TextField
          onChange={(event) => setTicketCode(event.target.value)}
          value={ticketCode}
          label={"Квиток"}
          variant="standard"
          fullWidth
        />
        <Button type="submit" variant="contained">
          Увійти
        </Button>
      </Paper>
    </Box>
  );
};
