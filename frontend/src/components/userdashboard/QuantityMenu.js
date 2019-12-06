import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const QuantityMenu = () => {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState('');

  const handleChange = event => {
    setQuantity(event.target.value);
  };

  const qtyChoices = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Qty:</InputLabel>
        <Select
          labelId="select-quantity"
          id="select-quantity"
          value={quantity}
          onChange={handleChange}
        >
          {_.map(qtyChoices, (item, key) => {
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

export default QuantityMenu;
