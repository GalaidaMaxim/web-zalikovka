import {
  AppBar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useToken } from "../../redux/selectors";
import { ContainerCustom } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutOperation } from "../../redux/operations";
import { MobileNvaigation } from "./MobileNavigation";

const StyledHeader = styled(AppBar)`
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;

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
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("tablet"));

  const logout = () => {
    dispatch(logoutOperation(token));
  };
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
        {!isPhone && (
          <>
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
              <Button onClick={logout}>
                <Typography color={"text.primary"} variant={"body1"}>
                  Вийти
                </Typography>
              </Button>
            )}
          </>
        )}
        {isPhone && <MobileNvaigation logout={logout} />}
      </ContainerCustom>
    </StyledHeader>
  );
};
