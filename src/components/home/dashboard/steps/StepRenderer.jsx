import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

function StepRenderer({
  label,
  description,
  index,
  step,
  steps,
  length,
  handleBack,
  handleNext,
}) {
  return (
    <Step key={step.label}>
      <StepLabel
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

            <Button endIcon={<StickyNote2Icon />}>Results </Button>
          </div>
        </Box>
      </StepContent>
    </Step>
  );
}

export default StepRenderer;
