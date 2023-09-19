/* eslint-disable no-unused-vars */
import React from 'react'
import './Side.css'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap-grid.min.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




// eslint-disable-next-line react/prop-types
const SideNave = ({value}) => {
  return (
    <>
    <Container fluid="md">
    <div className="hi">
    <h3 >profile</h3> <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Moments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><p className="all" onClick={() => value(true)}
          >Moment List
          </p>
          </Typography>
          <Typography><p
           className="all" onClick={()=>value(!true)}
          > Add new moment
          </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Container>
    </>
  )
}

export default SideNave
