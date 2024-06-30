import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export const signIn = async (ticketCode) => {
  const token = await axios.post("/students/auth", { ticketCode });
  return token.data;
};
