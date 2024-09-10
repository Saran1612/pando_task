import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const QontoStepIconRoot = styled('div')(({ theme }) => ({
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .QontoStepIcon-completedIcon': {
        color: '#008D5E',
        zIndex: 1,
        fontSize: "1.5rem",
    },
    '& .QontoStepIcon-circle': {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: '#0076DD',
    },
    '& .QontoStepIcon-circle-gray': {
        width: 12,
        height: 12,
        borderRadius: '50%',
        backgroundColor: '#CBD4D8',
    },
    ...theme.applyStyles('dark', {
        color: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                color: '#784af4',
            },
        },
    ],
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed === true ? (
                <CheckCircleIcon className="QontoStepIcon-completedIcon" />
            ) : completed === false ? (
                <div className='bg-[#CEE2F7] rounded-[50%] w-[20px] h-[20px] flex justify-center items-center'>
                    <div className="QontoStepIcon-circle" />
                </div>
            ) :
                <div className='bg-transparent rounded-[50%] w-[24px] h-[24px] flex justify-center items-center'>
                    <div className="QontoStepIcon-circle-gray" />
                </div>
            }
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};


const steps = [
    {
        content: false, completed: true, label: 'Event Details',
    },
    {
        content: false, completed: false, label: 'Lane Details',

    },
    {
        content: false, completed: true, label: 'Vendors',

    },
    {
        content: false, completed: true, label: 'Event Gating',

    }, {
        content: true, completed: null, label: 'Event Configurations',
        data: ["General Settings", "Execution Setting", "Cost & Ranking Setting", "Validations", "Negotiations", "Allocation & Awarding Setting", "Currency Setting"]

    }
];

export const Steppers = () => {

    return (
        <Stepper activeStep={1} orientation="vertical" className='steppers'>
            {steps.map((step, index) => (
                <Step key={step.label} completed={step.completed} className='!font-medium'>
                    <StepLabel
                        StepIconComponent={QontoStepIcon}
                        optional={
                            index === steps.length - 1 ? (
                                <Typography variant="caption"></Typography>
                            ) : null
                        }
                        className=''
                    >
                        {step.label}
                    </StepLabel>

                    {step.data &&
                        step.data.map((item, index) => (
                            <div key={index} className='p-[10px] ml-[2.25rem] border-left'>
                                <span className='!text-[12px] text-[#404040]'>{item}</span>
                            </div>
                        ))
                    }

                </Step>
            ))}
        </Stepper>
    )
}
