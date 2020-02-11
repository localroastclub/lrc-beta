import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    height: '120px'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  content: {
    backgroundColor: '#d7b56e'
  }
}));

const Panels = props => {
  const i = props.i + 1;
  const handleChange = props.handleChange;
  const expanded = props.expanded;

  console.log('props?', props);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === `panel${i}`}
        onChange={handleChange(`panel${i}`)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{props.roaster}</Typography>
          <Typography className={classes.secondaryHeading}>
            I am an expansion panel
            {/* put some logo pictures in here */}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.content}>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Panels;
