import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import RoastTile from './RoastTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 500,
    width: '100%',
    height: 250,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    [theme.breakpoints.down(840)]: {
      width: '60vw',
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down(600)]: {
      minHeight: '50vh',
      width: '70vw',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const RoastsGridList = (props) => {
  const classes = useStyles();
  const { tileData } = props;

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={200}
        cols={7}
        spacing={1}
        className={classes.gridList}
      >
        {tileData.map((tile, i) => (
          <RoastTile tile={tile} key={i} i={i} />
        ))}
      </GridList>
    </div>
  );
};

export default RoastsGridList;
