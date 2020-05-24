import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuIconBtn = withStyles({
  root: {
    width: '35px',
    height: '35px',
  },
})(MenuIcon);

const MenuDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIconBtn
        aria-controls='navigation-menu'
        color='inherit'
        aria-haspopup='true'
        onClick={handleClick}
      />
      <Menu
        id='navigation-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <Link to='/subscribe'>
            <MenuItem onClick={handleClose}>Subscribe</MenuItem>
          </Link>
          <Link to='/shop'>
            <MenuItem onClick={handleClose}>Shop</MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
};

export default MenuDropdown;
