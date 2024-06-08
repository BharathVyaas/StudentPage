import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { getDailyTasksDispatch } from "../../../redux/actions/dashboard";
import { useEffect, useState } from "react";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
];

function VerticalLinearStepperComponent({ dailyTasks, getDailyTasks }) {
  const [activeStep, setActiveStep] = useState(0);
  console.log(dailyTasks);

  useEffect(() => {
    getDailyTasks({ studentId: 1113, date: new Date() });
  }, [getDailyTasks]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%", padding: 4 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
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
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography variant="body2">{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
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
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
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
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          square
          elevation={1}
          sx={{ p: 2, mt: 2, backgroundColor: "#07598510" }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 1, color: "#075985", fontWeight: "bold" }}
          >
            Awesome job! You're all set for today!
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "#075985" }}>
            Congratulations! You've successfully completed all tasks for today.
          </Typography>
        </Paper>
      )}
    </Box>
  );
}

const mapState = (state) => ({
  dailyTasks: state.dailyTasks.data,
});

const mapDispatch = {
  getDailyTasks: getDailyTasksDispatch,
};

const VerticalLinearStepper = connect(
  mapState,
  mapDispatch
)(VerticalLinearStepperComponent);

export default VerticalLinearStepper;
