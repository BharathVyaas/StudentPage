import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomStepIcon from "./steps/CustomStepIcon";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { useNavigate } from "react-router-dom";

function VerticalLinearStepperComponent({
  userName,
  email,
  mcqAndProgramData,
  mcqAndProgramIsError,
  mcqAndProgramIsLoading,
}) {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
  }, [mcqAndProgramData]);

  const stepHandler = (i) => {
    setActiveStep(i);
  };

  if (mcqAndProgramIsLoading)
    return <div className="min-h-40 grid place-content-center">Loading...</div>;
  if (mcqAndProgramIsError)
    return (
      <div className="min-h-40 grid place-content-center text-red opacity-50">
        Error please try refreshing
      </div>
    );

  return (
    <Box sx={{ width: "100%", padding: 4 }}>
      {mcqAndProgramData ? (
        <Stepper activeStep={activeStep} orientation="vertical">
          {mcqAndProgramData.map((step, index) => (
            <Step
              onClick={() => stepHandler(index)}
              className="cursor-pointer"
              key={step.TransactionId || step.TestId}
            >
              <StepLabel
                StepIconComponent={(props) => (
                  <CustomStepIcon {...props} icon={index + 1} />
                )}
                sx={{
                  "& .Mui-completed": {
                    color: "#0a0a0f !important",
                    fontSize: "1.2rem",
                  },
                  "& .Mui-active": {
                    color: "#0a0a0f !important",
                    fontSize: "1.2rem",
                  },
                }}
              >
                {step.TestName}
              </StepLabel>
              <StepContent>
                <Typography variant="body2">{step.TestDescription}</Typography>
                <p className="py-1">
                  {step.IsResultSubmited || step.IsResultSubmitted ? (
                    <button
                      onClick={() => {
                        if (step.Qtype === "MCQ") {
                          const url = `http://49.207.10.13:3009/studentResultPage?testId=${step.TestId}&username=${userName}&transactionID=${step.TransactionId}`;
                          window.open(url, "_blank", "noopener,noreferrer");
                        } else {
                          navigate(
                            `/program-results?programId=${step.ProgramId}`
                          );
                        }
                      }}
                      className="text-sm text-blue-800 font-semibold underline"
                    >
                      view test results{" "}
                      <span>
                        <StickyNote2Icon sx={{ fontSize: "1.2rem" }} />
                      </span>
                    </button>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          const url =
                            step.Qtype === "MCQ"
                              ? `http://49.207.10.13:3009/MCQExamPage?testID=${step.TestId}&transactionId=${step.TransactionId}&UserName=${userName}`
                              : `http://localhost:3010/problem/${step.ProgramId}?email=${email}&username=${userName}&source=dashboard`;
                          window.open(url, "_blank", "noopener,noreferrer");
                        }}
                        sx={{
                          color: "rgb(30 64 175)",
                          fontSize: "500",
                        }}
                        size="small"
                      >
                        Start Test
                      </Button>
                    </>
                  )}
                </p>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      ) : (
        <div className="min-h-40 grid place-content-center">
          <h2 className="text-2xl font-semibold text-[#070707] opacity-50">
            no tasks to show
          </h2>
        </div>
      )}
    </Box>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
  email: state.user.email,
  mcqAndProgramData: state.mcqsandprograms.data,
  mcqAndProgramIsError: state.mcqsandprograms.isError,
  mcqAndProgramIsLoading: state.mcqsandprograms.isLoading,
});

const VerticalLinearStepper = connect(mapState)(VerticalLinearStepperComponent);

export default VerticalLinearStepper;
