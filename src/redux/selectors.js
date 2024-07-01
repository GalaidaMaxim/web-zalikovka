import { useSelector } from "react-redux";

export const useToken = () => {
  return useSelector(
    (state) => state.student.value && state.student.value.token
  );
};

export const useStudent = () => {
  return useSelector((state) => state.student.value);
};
