import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import QuantityMenu from './QuantityMenu';
import '../userdashboard/itemcard.css';

const useStyles = makeStyles(theme => ({
  card: {
    background: '#e6b5da',
    display: 'flex',
    width: '80vw',
    height: '20vh',
    marginLeft: 0,
    marginRight: 0,
    margin: 10,
    font: 'Lato',
    [theme.breakpoints.down(665)]: {
      height: '30vh',
      width: '70vw'
    },
    [theme.breakpoints.down(450)]: {
      height: '60vh',
      width: '70vw',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto',
    justifyItems: 'left'
  },
  image: {
    // paddingLeft: '1%',
    margin: 10,
    width: 151,
    height: 151
  },
  root: {
    fontFamily: 'Lato',
    marginBottom: '.2em',
    fontSize: '4vh'
  },
  text: {
    fontFamily: 'Lato',
    fontSize: '2vh'
  },
  actions: {
    flexGrow: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  button: {
    fontFamily: 'Lato'
  }
}));

const roasterList = [
  "Barrett's",
  'Little City',
  'Casa Brasil',
  'Greater Goods',
  'Trianon',
  "Mozart's"
];
const roast = ['Light', 'Medium', 'Dark', 'Espresso', 'Decaf'];
const beanStatus = ['Whole', 'Ground'];

const RoastListItem = props => {
  const classes = useStyles();
  const alt = `${props.item.roaster} ${props.item.roastType} roast ${props.item.beanStatus} bean`;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        component="img"
        alt={alt}
        height="140"
        // image={props.item.imageUrl}
        // title={props.item.roaster}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            className={classes.root}
          >
            {props.item.roaster}
          </Typography>
          <div className={classes.text}>
            <p>Roast Type: {props.item.roastType}</p>
            <p>Beans: {props.item.beanStatus}</p>
            <p>Origin: {props.item.origin}</p>
            <p>Bag Size: 4 oz</p>
          </div>
        </CardContent>
      </div>
      <CardActions className={classes.actions}>
        <Button className={classes.button} size="medium" color="inherit">
          Remove
        </Button>
        <Button className={classes.button} size="medium" color="inherit">
          Update Item
        </Button>
        {/* <QuantityMenu /> */}
      </CardActions>
    </Card>
  );
};

export default RoastListItem;
