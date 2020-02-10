import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SubscriptionTypes from './SubscriptionTypes';
import TastersTrio from './TastersTrio';
import ChooseYourAdventure from './ChooseYourAdventure';
import ConfirmOrder from './ConfirmOrder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '5%',
    marginBottom: '5%'
  },
  nextButton: {
    backgroundColor: '#f18f36'
  },
  backButton: {
    marginRight: theme.spacing(1),
    backgroundColor: '#f18f36'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  stepper: {
    backgroundColor: '#f18f36'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '10%'
  },
  stepIcon: {
    '& circle, & path': {
      color: '#f18f36'
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

function getStepContent(
  stepIndex,
  subscriptionType,
  handleSubscriptionType,
  handleNext
) {
  switch (stepIndex) {
    case 0:
      return (
        <SubscriptionTypes
          selection={subscriptionType}
          handleSelection={handleSubscriptionType}
        />
      );
    case 1:
      if (subscriptionType === 'Tasters trio') {
        return <TastersTrio />;
      } else if (subscriptionType === 'Choose your own adventure') {
        return <ChooseYourAdventure />;
      } else {
        const roastItems = [
          {
            roaster: 'Coffee of the month',
            roast: 'Club Choice',
            size: '12 oz'
          }
        ];
        localStorage.setItem('orderCoffeeOfMonth', JSON.stringify(roastItems));
        handleNext();
      }
    case 2:
      return <ConfirmOrder />;
    default:
      return 'Unknown stepIndex';
  }
}

const SubscriptionSteps = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [needsRequiredInput, setNeedsRequiredInput] = React.useState(true);
  const [displayError, setDisplayError] = React.useState(false);
  const [pressedNext, setPressedNext] = React.useState(false);
  // consider setting displayError and pressedNext in context... or localStorage

  const steps = getSteps();

  const handleNext = () => {
    console.log(
      'what is pressedNext?',
      pressedNext,
      'what is displayError?',
      displayError
    );
    if (activeStep === 1) {
      handleStepValidation();
      if (needsRequiredInput && pressedNext) {
        setDisplayError(true);
      }
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    if (localStorage.getItem('subscriptionChoice') === 'Coffee of the month') {
      setActiveStep(prevActiveStep => activeStep - 2);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const subscriptionChoice = localStorage.getItem('subscriptionChoice');
  const [subscriptionType, setSubscriptionType] = React.useState(
    subscriptionChoice || ''
  );

  const handleStepValidation = () => {
    let roastItems;
    if (subscriptionChoice === 'Choose your own adventure') {
      roastItems = JSON.parse(localStorage.getItem('orderChoice'));
      if (activeStep === 1 && !pressedNext) {
        setPressedNext(true);
      }
    } else if (subscriptionChoice === 'Tasters trio') {
      roastItems = JSON.parse(localStorage.getItem('orderTrio'));
    }

    const needsInput = _.find(roastItems, function(obj) {
      return _.includes(obj, '');
    });
    if (needsInput && !needsRequiredInput) {
      setNeedsRequiredInput(true);
    }

    if (!needsInput) {
      setNeedsRequiredInput(false);
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleSubscriptionType = event => {
    const subType = event.target.getAttribute('name');
    setSubscriptionType(subType);
    localStorage.setItem('subscriptionChoice', subType);
    handleNext();
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
              {getStepContent(
                activeStep,
                subscriptionType,
                handleSubscriptionType,
                handleNext
              )}
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
