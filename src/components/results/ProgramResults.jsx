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

const StyledCaption = styled("caption")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "bold",
  padding: "1rem",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
}));

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

      <Typography variant="body1" gutterBottom>
        {programResultsData?.ProgramDescription}
      </Typography>

      <Box display="flex" paddingInlineEnd={1} mb={4}>
        <Typography variant="body1" marginInlineEnd={2}>
          <strong>Test Date:</strong>{" "}
          {new Date(programResultsData?.SubmittedAt).toDateString()}
        </Typography>
      </Box>

      <Divider />

      <TableContainer component={Paper} sx={{ mt: 2, width: "600px" }}>
        <div className="w-full bg-blue-800 bg-opacity-10">
          <StyledCaption>Results</StyledCaption>
        </div>
        <Table aria-label="program results table">
          <TableBody>
            <TableRow>
              <StyledTableB_Cell>No. Test Cases Passed</StyledTableB_Cell>
              <StyledTableB_Cell align="right">
                {programResultsData?.No_TestCasesPassed}
              </StyledTableB_Cell>
            </TableRow>
            <TableRow>
              <StyledTableB_Cell>No. Test Cases Failed</StyledTableB_Cell>
              <StyledTableB_Cell align="right">
                {programResultsData?.No_TestCasesFailed}
              </StyledTableB_Cell>
            </TableRow>
            <TableRow>
              <StyledTableB_Cell>Result</StyledTableB_Cell>
              <StyledTableB_Cell align="right">
                {programResultsData?.Result}
              </StyledTableB_Cell>
            </TableRow>
            <TableRow>
              <StyledTableB_Cell>Grade</StyledTableB_Cell>
              <StyledTableB_Cell align="right">
                {programResultsData?.Grade}
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
