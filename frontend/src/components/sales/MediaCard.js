import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: '2%',
    marginBottom: '2%',
    // border: 'solid white 1px'
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)'
  },
  cardCopy: {
    backgroundColor: '#F18F36'
  },
  howCards: {
    backgroundColor: '#F18F36'
  },
  media: {
    height: 240
  },
  cardText: {
    height: '100px'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  const rowName = props.rowName === 'subheader' ? 'cardCopy' : 'howCards';

  return (
    <Card
      className={`${classes.card} ${
        rowName === 'cardCopy' ? classes.cardCopy : classes.howCards
      }`}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title={props.item.alt}
        />
        <CardContent className={classes.cardText}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.copy}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
