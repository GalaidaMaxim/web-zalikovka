import {
  Paper,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  Box,
} from "@mui/material";

import { StudentHead } from "../components/StudentHead/StudentHead";
import { ContainerCustom } from "../components/Container/Container";
import { useStudent } from "../redux/selectors";
import { SemesterSelector } from "../components/SemesterSelector/SemesterSelector";
import { useState, useEffect } from "react";
import { intToABC, intToNational } from "../service/formulas";
import { getColor } from "../service/getColor";

export const Marks = () => {
  const [semester, setSemester] = useState(1);
  const [subjects, setSubjects] = useState([]);
  const student = useStudent();

  useEffect(() => {
    if (!student) {
      setSubjects([]);
      return;
    }
    setSubjects(
      student.subjects.filter(
        (subject) => subject.semesters[semester - 1].include
      )
    );
  }, [student, semester, setSubjects]);

  return (
    <ContainerCustom>
      <Paper>
        <Box padding={2}>
          {student && (
            <>
              <StudentHead student={student} />
              <Box
                display={"flex"}
                gap={20}
                alignItems={"center"}
                marginTop={4}
              >
                <Typography variant="h3">Оберіть семестр</Typography>
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
                        <TableCell>Назва прежмету</TableCell>
                        <TableCell>Оцінка</TableCell>
                        <TableCell>ECTS</TableCell>
                        <TableCell>Національна шкала</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {subjects.map((subject) => (
                        <TableRow>
                          <TableCell>{subject.name}</TableCell>
                          <TableCell
                            sx={{
                              backgroundColor: getColor(
                                subject.semesters[semester - 1].ignore,
                                subject.semesters[semester - 1].reDelivery
                              ),
                            }}
                          >
                            {subject.semesters[semester - 1].mark}
                          </TableCell>
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
