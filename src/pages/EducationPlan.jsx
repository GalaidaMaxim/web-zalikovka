import { useDispatch } from "react-redux";
import { getStudentOperation } from "../redux/operations";
import { useToken, useStudent } from "../redux/selectors";
import { ContainerCustom } from "../components/Container/Container";
import { useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

export const EducationPlan = () => {
  const student = useStudent();

  return (
    <ContainerCustom>
      {student && (
        <Paper>
          <Box padding={2}>
            <Typography variant="h2">{`${student.sername} ${student.name} ${student.secondName}`}</Typography>
            <Typography variant="body1">{`${student.course} ${student.level}`}</Typography>
            <Box marginTop={4}>
              <Typography variant="h3">{`Обов'язкові дисципліни`}</Typography>
              <Table>
                <TableBody>
                  {student.subjects
                    .filter((sub) => sub.code.charAt(0) === "1")
                    .map((subject) => (
                      <TableRow>
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
                      <TableRow>
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
                      <TableRow>
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
                      <TableRow>
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
