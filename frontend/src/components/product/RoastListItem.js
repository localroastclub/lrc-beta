import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from './Menu';
import '../userdashboard/itemcard.css';

const useStyles = makeStyles((theme) => ({
  card: {
    background: '#fffcfe',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80vw',
    maxHeight: '130vh',
    marginLeft: 0,
    marginRight: 0,
    margin: 10,
    font: 'Lato',
    [theme.breakpoints.down(840)]: {
      width: '70vw',
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down(600)]: {
      // height: '115vh',
      width: '70vw',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  headerSpace: {
    display: 'flex',
    width: '100%',
    background: '#6A7933',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, .5)',
  },
  header: {
    display: 'flex',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down(840)]: {
      width: '60vw',
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down(600)]: {
      minHeight: '90vh',
      width: '70vw',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'left',
    marginLeft: '2%',
    width: '100%',
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
  paragraph: {
    display: 'flex',
    justifyItems: 'left',
    [theme.breakpoints.down(940)]: {
      margin: 3,
    },
  },
  image: {
    margin: 10,
    marginRight: 20,
    width: 151,
    height: 151,
    objectFit: 'scale-down',
  },
  root: {
    fontFamily: 'Lato',
    marginBottom: '.2em',
    fontSize: '4vh',
  },
  text: {
    fontFamily: 'Lato',
    fontSize: '2.5vh',
    [theme.breakpoints.down(940)]: {
      fontSize: '2.5vh',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexFlow: 'wrap',
    marginRight: '2%',
    width: '35vw',
    [theme.breakpoints.down(840)]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '35vw',
    },
    [theme.breakpoints.down(600)]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50vw',
    },
  },
  button: {
    fontFamily: 'Lato',
  },
}));

const roastList = [
  'Light',
  'Medium',
  'Dark',
  'Espresso',
  'Decaf',
  'Club Choice',
];
const beanStatusList = ['Whole', 'Ground'];
const originList = ['Single', 'Blend'];
const bagSizeList = ['12 oz', '4 oz'];

const RoastListItem = (props) => {
  const classes = useStyles();
  const alt = `${props.item.roaster} ${props.item.roastType} roast ${props.item.beanStatus} bean`;
  const customSelection = props.customSelection;
  const tastersTrio = props.tastersTrio;
  const [roasterList, setRoasterList] = useState([]);
  const [roasterData, setRoasterData] = useState({});

  const [value, setValue] = useState({
    roaster: props.item.roaster,
    roast: props.item.roast,
    bean: props.item.bean,
    origin: props.item.origin,
    size: props.item.size,
    logo: props.item.logo,
  });

  const handleChange = (event) => {
    const property = event.target.name;
    console.log('property', event.target.name, '\n', event.target.value);
    setValue({ ...value, [property]: event.target.value });
    console.log('property', props.item.logo);
    if (property === 'roaster') {
      setValue({ ...value, logo: roasterData[event.target.value]['logo'] });
      props.item.logo = roasterData[event.target.value]['logo'];
    }
    props.item[property] = event.target.value;
    console.log('event value', event.target.value);
    console.log('what is item', props.item);
    updateStorage();
  };

  const updateStorage = () => {
    let storageItems = tastersTrio
      ? localStorage.getItem('orderTrio')
      : localStorage.getItem('orderChoice');

    storageItems = JSON.parse(storageItems);
    storageItems.splice(props.index - 1, 1, value);

    tastersTrio
      ? localStorage.removeItem('orderTrio')
      : localStorage.removeItem('orderChoice');

    tastersTrio
      ? localStorage.setItem('orderTrio', JSON.stringify(storageItems))
      : localStorage.setItem('orderChoice', JSON.stringify(storageItems));
  };

  const host = 'http://localhost:8000';

  useEffect(() => {
    axios.get(`${host}/api/roaster`).then((resp) => {
      console.log('what si resp?', resp);
      setRoasterList(
        _.map(resp.data, (el) => {
          return el.name;
        })
      );
      setRoasterData(
        _.reduce(
          resp.data,
          (acc, el, key) => {
            acc[el.name] = { logo: el.logo_url };
            return acc;
          },
          {}
        )
      );
    });
  }, []);

  useEffect(() => {
    setValue(props.item);
  }, [value, props.item]);

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.headerSpace}>
          <CardHeader
            className={classes.header}
            title={`Option ${props.index}:`}
          />
          {customSelection ? (
            <Button
              className={classes.button}
              size='medium'
              color='inherit'
              onClick={() => {
                props.removeItem(props.index - 1);
              }}
            >
              X
            </Button>
          ) : null}
        </div>
        <div className={classes.content}>
          <div className={classes.details}>
            <CardMedia
              className={classes.image}
              component='img'
              alt={alt}
              height='140'
              image={
                roasterData[value.roaster]
                  ? roasterData[value.roaster]['logo']
                  : ''
              }
              // title={props.item.roaster}
            />
            <CardContent className={classes.paragraph}>
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
            {customSelection && props.index > 1 ? (
              <Menu
                value={value.size}
                handleChange={handleChange}
                name={'size'}
                list={bagSizeList}
                listName={'Bag Size'}
              />
            ) : null}
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default RoastListItem;
