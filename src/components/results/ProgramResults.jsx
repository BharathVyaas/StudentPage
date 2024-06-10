import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Divider,
  TableSortLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import { getProgramResults } from "../../redux/actions/result";
import { useEffect } from "react";
import { useLocation } from "react-router";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  paddingBlock: ".4rem",
  paddingBlockStart: ".6rem",
}));

const StyledTableB_Cell = styled(TableCell)(({ theme }) => ({
  paddingBlock: "1rem",
}));

const rows = [
  {
    name: "Test Case 1",
    input: "i got candy",
    expected: "you got candy",
    output: "they got candy",
    status: "fail",
  },
  {
    name: "Test Case 2",
    input: "Ice cream sandwich",
    expected: "cream sandwich",
    output: "cream sandwich",
    status: "fail",
  },
  {
    name: "Test Case 3",
    input: "test case fail",
    expected: "you did fail",
    output: "you took a trun",
    status: "pass",
  },
  {
    name: "Test Case 4",
    input: "what a boring day",
    expected: "no it's not",
    output: "yes it is",
    status: "fail",
  },
  {
    name: "Test Case 5",
    input: "Ice cream sandwich",
    expected: "you did fail",
    output: "yes it is",
    status: "fail",
  },
];

function ProgramResultsComponent({
  userName,
  programResultsData,
  getProgramResultsDispatch,
}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const programId = queryParams.get("programId");

  useEffect(() => {
    if (userName && programId)
      getProgramResultsDispatch({ userName: userName, programId: programId });
  }, []);

  return (
    <Box p={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {programResultsData?.TestCaseName}
      </Typography>

      <p className="mb-2">{programResultsData?.ProgramDescription} </p>

      <Box display="flex" paddingInlineEnd={1} mb={4}>
        <Typography variant="body1" marginInlineEnd={2}>
          <strong>Test Date:</strong>{" "}
          {new Date(programResultsData?.SubmittedAt).toDateString()}
        </Typography>
      </Box>

      <Divider />

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="bg-blue-800 bg-opacity-[.10]">
              <StyledTableCell align="left">
                <TableSortLabel>No_AttemptsPerBuildSucceeded</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TableSortLabel>No_TestCasesPassed</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TableSortLabel>No_TestCasesFailed</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TableSortLabel>Result</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell align="left">
                <TableSortLabel>Grade</TableSortLabel>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableB_Cell component="th" scope="row">
                {programResultsData?.No_AttemptsPerBuildSucceeded}
              </StyledTableB_Cell>
              <StyledTableB_Cell>
                {programResultsData?.No_TestCasesFailed}
              </StyledTableB_Cell>
              <StyledTableB_Cell>
                {programResultsData?.No_TestCasesFailed}
              </StyledTableB_Cell>
              <StyledTableB_Cell>
                {programResultsData?.Result}
              </StyledTableB_Cell>
              <StyledTableB_Cell>
                <Typography variant="body2">
                  {programResultsData?.Grade}
                </Typography>
              </StyledTableB_Cell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
  programResultsData: state.programResults.data,
});

const mapDispatch = {
  getProgramResultsDispatch: getProgramResults,
};

const ProgramResults = connect(mapState, mapDispatch)(ProgramResultsComponent);

export default ProgramResults;
