import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';

const StyledCard = withStyles({
  root: {
    background: '#e6b5da',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '40vh',
    maxWidth: '55vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Card);

const HeaderRight = () => {
  return(
    <StyledCard>
        Not sure where to start? Start with a sampler of our favorites:
    </StyledCard>
  )
};

export default HeaderRight;
