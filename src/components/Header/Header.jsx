import { AppBar, Typography, Button, Box } from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useToken } from "../../redux/selectors";
import { ContainerCustom } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutOperation } from "../../redux/operations";
import { forgetStudent } from "../../redux/slises";

const StyledHeader = styled(AppBar)`
  /* background-color: #ffffff; */
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: space-between;
`;

const Navigation = styled(Box)`
  display: flex;
  gap: 2rem;
`;
const Link = styled(NavLink)`
  text-decoration: none;
`;

export const Header = () => {
  const token = useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <StyledHeader position="static">
      <ContainerCustom
        sx={{
          height: "4rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/"}>
          <Typography color={"text.primary"} variant={"h1"}>
            Web Заліковка
          </Typography>
        </Link>
        {token && (
          <Navigation component={"nav"}>
            <Link to={"/plan"}>
              <Typography color={"text.primary"} variant={"body1"}>
                Індивідуальний план
              </Typography>
            </Link>
            <Link to={"/marks"}>
              <Typography color={"text.primary"} variant={"body1"}>
                Оцінки
              </Typography>
            </Link>
          </Navigation>
        )}
        {!token ? (
          <Button onClick={() => navigate("/signin")}>
            <Typography color={"text.primary"} variant={"body1"}>
              Увійти
            </Typography>
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(forgetStudent());
              dispatch(logoutOperation(token));
            }}
          >
            <Typography color={"text.primary"} variant={"body1"}>
              Вийти
            </Typography>
          </Button>
        )}
      </ContainerCustom>
    </StyledHeader>
  );
};
