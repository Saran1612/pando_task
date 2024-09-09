import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const steps = [
    {
        completed: true, label: 'Event Details',
    },
    {
        completed: false, label: 'Lane Details',

    },
    {
        completed: true, label: 'Vendors',

    },
    {
        completed: true, label: 'Event Gating',

    }, {
        completed: true, label: 'Event Configurations',
        description: "event_config"

    }
];

export const Steppers = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Stepper activeStep={1} orientation="vertical" className='steppers'>
            {steps.map((step, index) => (
                <Step key={step.label} completed={step.completed} className='!font-medium'>
                    <StepLabel
                        optional={
                            index === steps.length - 1 ? (
                                <Typography variant="caption"></Typography>
                            ) : null
                        }
                    >
                        {step.label}
                    </StepLabel>
                    {/* <StepContent>
                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                            </Button>
                            <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Back
                            </Button>
                        </Box>
                    </StepContent> */}
                </Step>
            ))}
        </Stepper>
    )
}
