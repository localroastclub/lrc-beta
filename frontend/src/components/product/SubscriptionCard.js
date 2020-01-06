import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 345,
    minWidth: 245,
    height: 350,
    margin: '3vw'
  },
  media: {
    height: 140
  }
});

const SubscriptionCard = props => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      name={props.item.name}
      onClick={props.handleSelection}
    >
      <CardActionArea name={props.item.name}>
        <CardMedia
          className={classes.media}
          name={props.item.name}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent name={props.item.name}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            name={props.item.name}
          >
            {props.item.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            name={props.item.name}
          >
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default SubscriptionCard;
