import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Steppers } from './stepper';

export const Accordions = () => {
    return (
        <div>
            <Accordion defaultExpanded className='accordions !bg-transparent'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="stepper-svg" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className='font-medium hover:!text-[#0076DD] '
                >
                    Sourcing Event
                </AccordionSummary>
                <AccordionDetails>
                    <Steppers />
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordions !bg-transparent'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className='font-medium'
                >
                    Bidding & Negotiation
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordions !bg-transparent'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className='font-medium'
                >
                    Allocation & Awarding
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordions !bg-transparent'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className='font-medium'
                >
                    Contract & Update
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
