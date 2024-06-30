import { useSelector } from "react-redux";

export const useToken = () => {
  return useSelector((state) => state.token.value);
};

export const useStudent = () => {
  return useSelector((state) => state.student.value);
};
