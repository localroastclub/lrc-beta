import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

import OrderModal from './OrderModal';

const useStyles = makeStyles((theme) => ({
  itemSquare: {
    width: 200,
    height: 200,
    padding: 2,
  },
  image: {
    objectFit: 'scale-down',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

const RoastTile = (props) => {
  const classes = useStyles();
  const { tile } = props;

  const [openOrderModal, setOpenOrderModal] = React.useState(false);

  const handleOpen = () => {
    setOpenOrderModal(true);
  };

  const handleClose = () => {
    setOpenOrderModal(false);
  };
  return (
    <div>
      <GridListTile
        key={props.i}
        cols={tile.featured ? 2 : 1}
        rows={tile.featured ? 2 : 1}
        className={classes.itemSquare}
      >
        <img src={tile.img} alt={tile.title} className={classes.image} />
        <GridListTileBar
          title={tile.title}
          titlePosition='bottom'
          subtitle={<span>{tile.description}</span>}
          actionIcon={
            <IconButton
              aria-label={`star ${tile.title}`}
              className={classes.icon}
            >
              <AddShoppingCartOutlinedIcon />
            </IconButton>
          }
          actionPosition='left'
          className={classes.titleBar}
          onClick={handleOpen}
        />
        {openOrderModal ? (
          <OrderModal
            handleClose={handleClose}
            open={openOrderModal}
            p={tile.title}
          />
        ) : null}
      </GridListTile>
    </div>
  );
};

export default RoastTile;
