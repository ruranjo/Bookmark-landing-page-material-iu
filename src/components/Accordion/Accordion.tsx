
import React from 'react'
import { AccordionProps } from '../../intefaces/accordion.interface';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

export interface Props {
    accordion: AccordionProps
}

const AccordionComponent:React.FC<Props> = ({accordion}) => {
    
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {accordion.question}
        </AccordionSummary>
        <AccordionDetails>
          {accordion.answer}
        </AccordionDetails>
    </Accordion>
    );
}

export default AccordionComponent;

