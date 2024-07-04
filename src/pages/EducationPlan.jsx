import { useStudent } from "../redux/selectors";
import { ContainerCustom } from "../components/Container/Container";
import { StudentHead } from "../components/StudentHead/StudentHead";

import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useToken } from "../redux/selectors";
import { refreshInfo } from "../redux/operations";

export const EducationPlan = () => {
  const student = useStudent();
  const dispatch = useDispatch();
  const token = useToken();
  useEffect(() => {
    if (!student && token) {
      dispatch(refreshInfo(token));
    }
  }, [token, student, dispatch]);

  return (
    <ContainerCustom>
      {student && (
        <Paper>
          <Box padding={2}>
            <StudentHead student={student} />
            <Box marginTop={4}>
              <Typography variant="h3">{`Обов'язкові дисципліни`}</Typography>
              <Table>
                <TableBody>
                  {student.subjects
                    .filter((sub) => sub.code.charAt(0) === "1")
                    .map((subject) => (
                      <TableRow key={subject._id}>
                        <TableCell>{subject.name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
            <Box marginTop={4}>
              <Typography variant="h3">{`Профільні дисципліни`}</Typography>
              <Table>
                <TableBody>
                  {student.subjects
                    .filter((sub) => sub.code.charAt(0) === "2")
                    .map((subject) => (
                      <TableRow key={subject._id}>
                        <TableCell>{subject.name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
            <Box marginTop={4}>
              <Typography variant="h3">{`Дисципліни додаткових кваліфікацій`}</Typography>
              <Table>
                <TableBody>
                  {student.subjects
                    .filter((sub) => sub.code.charAt(0) === "3")
                    .map((subject) => (
                      <TableRow key={subject._id}>
                        <TableCell>{subject.name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
            <Box marginTop={4}>
              <Typography variant="h3">{`Вибіркові дисципліни`}</Typography>
              <Table>
                <TableBody>
                  {student.subjects
                    .filter((sub) => sub.code.charAt(0) === "4")
                    .map((subject) => (
                      <TableRow key={subject._id}>
                        <TableCell>{subject.name}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Paper>
      )}
    </ContainerCustom>
  );
};
