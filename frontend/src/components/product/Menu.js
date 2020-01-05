import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
    [theme.breakpoints.down(390)]: {
      height: '8vh',
      width: '40vw',
      minWidth: 80
      // maxWidth: 100
      // flexDirection: 'column',
      // alignItems: 'center'
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  label: {
    [theme.breakpoints.down(390)]: {
      fontSize: '2.2vh'
    }
  },
  select: {
    [theme.breakpoints.down(390)]: {
      height: '8vh',
      width: '40vw'
    }
  },
  menuItem: {
    [theme.breakpoints.down(390)]: {
      height: '8vh',
      width: '40vw'
    }
  }
}));

const Menu = props => {
  const classes = useStyles();

  return (
    <>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel
          id={`${props.listName}-selection`}
          className={classes.label}
        >
          {props.listName}
        </InputLabel>
        <Select
          labelId="select-value"
          id={`select-${props.listName}`}
          className={classes.select}
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        >
          {_.map(props.list, (item, key) => {
            return (
              <MenuItem value={item} key={key}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default Menu;
