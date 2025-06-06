import {
  Paper,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { StudentHead } from "../components/StudentHead/StudentHead";
import { ContainerCustom } from "../components/Container/Container";
import { useStudent, useToken } from "../redux/selectors";
import { SemesterSelector } from "../components/SemesterSelector/SemesterSelector";
import { useState, useEffect } from "react";
import { intToABC, intToNational } from "../service/formulas";
import { getColor } from "../service/getColor";
import { refreshInfo } from "../redux/operations";
import { useDispatch } from "react-redux";

export const Marks = () => {
  const [semester, setSemester] = useState(1);
  const [subjects, setSubjects] = useState([]);
  const student = useStudent();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const token = useToken();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!student && token) {
      dispatch(refreshInfo(token));
    }
    if (!student) {
      setSubjects([]);
      return;
    }
    setSubjects(
      student.subjects.filter((subject) => {
        return subject.semesters[semester - 1].include;
      })
    );
  }, [student, semester, setSubjects, token, dispatch]);

  return (
    <ContainerCustom>
      <Paper>
        <Box padding={2}>
          {student && (
            <>
              <StudentHead student={student} />
              <Box
                display={"flex"}
                gap={{
                  mobile: 4,
                  tablet: 20,
                }}
                alignItems={"center"}
                marginTop={4}
              >
                <Typography minWidth={"200px"} variant="h3">
                  Оберіть семестр
                </Typography>
                <Box width={"300px"}>
                  <SemesterSelector
                    semester={semester}
                    setSemester={setSemester}
                  />
                </Box>
              </Box>
              <Box>
                {subjects.length > 0 && (
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Назва предмету</TableCell>
                        <TableCell>Оцінка</TableCell>
                        {!isMobile && (
                          <>
                            <TableCell>ECTS</TableCell>
                            <TableCell>Національна шкала</TableCell>
                          </>
                        )}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {subjects.map((subject) => (
                        <TableRow key={subject._id}>
                          <TableCell>{subject.name}</TableCell>
                          <TableCell
                            sx={{
                              backgroundColor: getColor(
                                subject.semesters[semester - 1].ignore,
                                subject.semesters[semester - 1].reDelivery
                              ),
                            }}
                          >
                            {subject.semesters[semester - 1].mark
                              ? subject.semesters[semester - 1].mark.slice(0, 3)
                              : ""}
                          </TableCell>
                          {!isMobile && (
                            <>
                              <TableCell
                                sx={{
                                  backgroundColor: getColor(
                                    subject.semesters[semester - 1].ignore,
                                    subject.semesters[semester - 1].reDelivery
                                  ),
                                }}
                              >
                                {intToABC(subject.semesters[semester - 1].mark)}
                              </TableCell>
                              <TableCell
                                sx={{
                                  backgroundColor: getColor(
                                    subject.semesters[semester - 1].ignore,
                                    subject.semesters[semester - 1].reDelivery
                                  ),
                                }}
                              >
                                {intToNational(
                                  subject.semesters[semester - 1].mark
                                )}
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </ContainerCustom>
  );
};
