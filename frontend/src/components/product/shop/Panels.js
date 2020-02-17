import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RoastsGridList from './RoastsGridList';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80vw',
    marginTop: '2%'
  },
  panel: {
    display: 'flex',
    minHeight: '20vh',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  summary: {
    display: 'flex',
    padding: 0
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  expandIcon: {
    marginRight: 0,
    width: '30px'
  },
  innerContent: {
    minHeight: '20vh',
    backgroundColor: '#d7b56e'
  },
  logos: {
    maxWidth: '400px',
    maxHeight: '250px'
  }
}));

const Panels = props => {
  const i = props.i + 1;
  const handleChange = props.handleChange;
  const expanded = props.expanded;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === `panel${i}`}
        onChange={handleChange(`panel${i}`)}
        className={classes.panel}
      >
        <ExpansionPanelSummary
          classes={classes}
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
        >
          <img
            src={props.item.logo}
            className={classes.logos}
            aria-label={props.item.roaster}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.innerContent}>
          <RoastsGridList />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Panels;
