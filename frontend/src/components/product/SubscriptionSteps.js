import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SubscriptionTypes from './SubscriptionTypes';
import TastersTrio from './TastersTrio';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '5%',
    marginBottom: '5%'
  },
  nextButton: {
    backgroundColor: '#e6b5da'
  },
  backButton: {
    marginRight: theme.spacing(1),
    backgroundColor: '#e6b5da'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  stepper: {
    backgroundColor: '#e6b5da'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '10%'
  },
  stepIcon: {
    '& circle, & path': {
      color: '#e6b5da'
    }
  }
}));

function getSteps() {
  return [
    'Choose your subscription level',
    'Select your roasts',
    'Confirm your subscription date'
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      // choose your subscription type
      return <SubscriptionTypes />;
    case 1:
      // select roasters, take logic from whatever they click on subscription types
      // we'll probably have to pass state down to subscription types to know which one they've clicked
      // then render taster's trio with three options
      // choose your own adventure with one option required, and a + icon
      // if coffee of the month, skip step 2 (case 1)
      return <TastersTrio />;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

const SubscriptionSteps = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                classes: {
                  active: classes.stepIcon,
                  completed: classes.stepIcon
                  // error:
                }
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>
              {getStepContent(activeStep)}
            </div>
            <div className={classes.buttons}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                className={classes.nextButton}
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionSteps;
