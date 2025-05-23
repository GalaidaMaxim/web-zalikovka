import {
  AppBar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
} from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useToken } from "../../redux/selectors";
import { ContainerCustom } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutOperation } from "../../redux/operations";
import { MobileNvaigation } from "./MobileNavigation";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  height: 4rem;
  display: flex;
  flex-direction: column;
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
  const [isOpen, setIsOpen] = useState(true);

  const logout = () => {
    dispatch(logoutOperation(token));
  };
  return (
    <StyledHeader position="static">
      <Drawer open={isOpen} onClick={() => setIsOpen(false)}>
        <Box
          sx={{ padding: "20px", backgroundColor: "black", cursor: "pointer" }}
          position="fixed"
        >
          <Typography variant="body2">
            <Typography sx={{ color: "yellow" }} component="span" variant="h2">
              {"Увага   "}
            </Typography>{" "}
            Web заліковка мігрує. Актуальна версія доступна за посиланням
            <Typography component="span" variant="body2">
              {" "}
              <a
                style={{ color: "cyan" }}
                href="https://web-zalikowka-next-93au.vercel.app/ "
              >
                https://web-zalikowka-next-93au.vercel.app/
              </a>{" "}
              Актуальні оновлення будуть доступні на новому домені, тому
              рекомендуємо використовувати саме його. Поточна сторінка буде
              доступна протягом 2025 року.
            </Typography>
          </Typography>
          <Typography sx={{ marginTop: "20px" }} variant="body2">
            Натисньть щоб закрити
          </Typography>
        </Box>
      </Drawer>
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
