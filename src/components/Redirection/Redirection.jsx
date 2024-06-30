import { useToken } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Redirection = ({ auth = false, children }) => {
  const token = useToken();
  useEffect(() => {
    if (!auth && !token) {
      useNavigate("/signin");
    }
    if (auth && token) {
      useNavigate("/plan");
    }
  });
  return <>{children}</>;
};
