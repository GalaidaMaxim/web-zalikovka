import {
  Drawer,
  IconButton,
  Paper,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useToken } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";

const Link = styled(NavLink)`
  text-decoration: none;
`;

export const MobileNvaigation = ({ logout = () => {} }) => {
  const [open, setOpen] = useState(false);
  const token = useToken();
  const navigate = useNavigate();
  return (
    <>
      {token ? (
        <IconButton onClick={() => setOpen(true)}>
          <MenuOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            navigate("/signin");
          }}
        >
          <ExitToAppRoundedIcon />
        </IconButton>
      )}

      <Drawer anchor="right" open={open} onClick={() => setOpen(false)}>
        <Box padding={2}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Link to={"/plan"}>
                    <Typography color={"text.primary"} variant={"body1"}>
                      Індивідуальний план
                    </Typography>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link to={"/marks"}>
                    <Typography color={"text.primary"} variant={"body1"}>
                      Оцінки
                    </Typography>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Button
                    sx={{ textTransform: "none", paddingLeft: "0px" }}
                    onClick={logout}
                    endIcon={<ExitToAppRoundedIcon />}
                    color="whiteButton"
                  >
                    <Typography color={"text.primary"} variant={"body1"}>
                      Вийти
                    </Typography>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Drawer>
    </>
  );
};
