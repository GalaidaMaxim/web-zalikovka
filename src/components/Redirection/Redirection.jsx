import { useToken } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Redirection = ({ auth = false, children }) => {
  const token = useToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth && !token) {
      navigate("/signin");
    }
    if (auth && token) {
      navigate("/plan");
    }
  });
  return <>{children}</>;
};
