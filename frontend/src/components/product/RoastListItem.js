import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from './Menu';
import '../userdashboard/itemcard.css';

const useStyles = makeStyles(theme => ({
  card: {
    background: '#e6b5da',
    display: 'flex',
    justifyContent: 'space-between',
    width: '80vw',
    maxHeight: '100vh',
    marginLeft: 0,
    marginRight: 0,
    margin: 10,
    font: 'Lato',
    [theme.breakpoints.down(840)]: {
      width: '70vw',
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.down(600)]: {
      height: '95vh',
      width: '70vw',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  details: {
    display: 'flex',
    flexGrow: 1.5,
    width: '20vw',
    flexDirection: 'column',
    [theme.breakpoints.down(940)]: {
      width: '80vw',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  content: {
    display: 'flex',
    justifyItems: 'left',
    [theme.breakpoints.down(940)]: {
      margin: 3
    }
  },
  image: {
    margin: 10,
    marginRight: 20,
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
    fontSize: '2vh',
    [theme.breakpoints.down(940)]: {
      fontSize: '2.5vh'
    }
  },
  actions: {
    flexFlow: 'wrap',
    justifyContent: 'flex-end',
    [theme.breakpoints.down(940)]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    [theme.breakpoints.down(600)]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
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
const roastList = ['Light', 'Medium', 'Dark', 'Espresso', 'Decaf'];
const beanStatusList = ['Whole', 'Ground'];
const originList = ['Single', 'Blend'];
const bagSizeList = ['5 lb', '12 oz', '4 oz'];

const RoastListItem = props => {
  const classes = useStyles();
  const alt = `${props.item.roaster} ${props.item.roastType} roast ${props.item.beanStatus} bean`;
  const customSelection = props.customSelection;
  const tastersTrio = props.tastersTrio;

  const [value, setValue] = React.useState({
    roaster: '',
    roast: '',
    bean: '',
    origin: '',
    size: tastersTrio ? '4 oz' : props.option === 1 ? '12 oz' : ''
  });

  const handleChange = event => {
    const property = event.target.name;
    setValue({ ...value, [property]: event.target.value });
  };

  return (
    <div>
      <h3>{`Option ${props.option}:`}</h3>
      <Card className={classes.card}>
        {/* <Typography
          gutterBottom
          variant="h4"
          component="h4"
          className={classes.root}
        >
          {`Option ${props.option}`}
        </Typography> */}
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
            <div className={classes.text}>
              <p>Roaster: {value.roaster}</p>
              <p>Roast Type: {value.roast}</p>
              <p>Beans: {value.bean}</p>
              <p>Origin: {value.origin}</p>
              <p>Bag Size: {value.size}</p>
            </div>
          </CardContent>
        </div>
        <CardActions className={classes.actions}>
          <Menu
            value={value.roaster}
            handleChange={handleChange}
            name={'roaster'}
            list={roasterList}
            listName={'Roaster'}
          />
          <Menu
            value={value.roast}
            handleChange={handleChange}
            name={'roast'}
            list={roastList}
            listName={'Roast'}
          />
          <Menu
            value={value.bean}
            handleChange={handleChange}
            name={'bean'}
            list={beanStatusList}
            listName={'Bean Status'}
          />
          <Menu
            value={value.origin}
            handleChange={handleChange}
            name={'origin'}
            list={originList}
            listName={'Origin'}
          />
          {customSelection && props.option > 1 ? (
            <Menu
              value={value.size}
              handleChange={handleChange}
              name={'size'}
              list={bagSizeList}
              listName={'Bag Size'}
            />
          ) : null}
        </CardActions>
      </Card>
    </div>
  );
};

export default RoastListItem;
