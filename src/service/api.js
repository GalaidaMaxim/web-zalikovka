import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export const signIn = async (ticketCode) => {
  const student = await axios.post("/students/auth", { ticketCode });
  return student.data;
};

export const getStudent = async (token) => {
  const data = await axios.get("/students/", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

export const logout = async (token) => {
  const data = await axios.patch(
    "/students/logout",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};
