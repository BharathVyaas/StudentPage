import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomStepIcon from "./steps/CustomStepIcon"; // import your CustomStepIcon component

function VerticalLinearStepperComponent({
  mcqAndProgramData,
  mcqAndProgramIsError,
  mcqAndProgramIsLoading,
}) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
  }, [mcqAndProgramData]);

  const handleNext = (i) => {
    if (mcqAndProgramData && activeStep < mcqAndProgramData.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (mcqAndProgramData) {
      setActiveStep(0);
    }
  };

  const handleBack = (i) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
            <Step key={step.TransactionId || step.TestId}>
              <StepLabel
                StepIconComponent={(props) => (
                  <CustomStepIcon {...props} icon={index + 1} />
                )}
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
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
                  <i className="font-semibold">text link: </i>
                  <a
                    href={
                      step.Qtype
                        ? `https://www.nareshit.net/previewexampage?TestId=${step.TestId}&TransactionId=${step.TransactionId}`
                        : `http://codeide.nareshit.net/problem/${step.ProgramId}`
                    }
                    className="text-blue-500 font-medium underline"
                  >
                    {step.Qtype
                      ? "https://www.nareshit.net/previewexampage"
                      : "http://codeide.nareshit.net/problem/"}
                  </a>
                  <p></p>
                </p>
                {mcqAndProgramData.length > 1 && (
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={() => handleNext(index)}
                        sx={{
                          mt: 1,
                          mr: 1,
                          fontSize: 10,
                          background: "#075985",
                          "&:hover": {
                            backgroundColor: "#05496b",
                          },
                        }}
                      >
                        Next
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={() => handleBack(index)}
                        sx={{
                          mt: 1,
                          mr: 1,
                          color: "#05496b",
                          fontSize: 10,
                        }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                )}
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
  mcqAndProgramData: state.mcqsandprograms.data,
  mcqAndProgramIsError: state.mcqsandprograms.isError,
  mcqAndProgramIsLoading: state.mcqsandprograms.isLoading,
});

const VerticalLinearStepper = connect(mapState)(VerticalLinearStepperComponent);

export default VerticalLinearStepper;
