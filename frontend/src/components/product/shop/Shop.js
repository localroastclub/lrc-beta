import React from 'react';
import _ from 'lodash';
import Panels from './Panels';
import './shop.css';

// import mozarts from './../../../images/roasterlogos/mozartslogo.png';

const roasters = [
  {
    roaster: "Mozart's",
    logo: '/images/roasterlogos/mozartslogo.png',
    roasts: []
  },
  {
    roaster: 'Austin Roasting Company',
    logo: '/images/roasterlogos/arclogo.png',
    roasts: []
  },
  {
    roaster: 'Little City',
    logo: '/images/roasterlogos/lclogo.png',
    roasts: [
      {
        title: 'San Ignacio, Costa Rica',
        img: '/images/roasts/littlecity/SanIgnacio.jpg'
      },
      {
        title: 'Geisha Mallorca, Colombia',
        img: '/images/roasts/littlecity/Geisha.jpg'
      },
      {
        title: 'Kerinci, Sumatra',
        img: '/images/roasts/littlecity/Sumatra.jpg'
      },
      {
        title: 'La Estrella Del Ostro, Colombia',
        img: '/images/roasts/littlecity/LaEstrella.png'
      },
      {
        title: 'Karugiro, Kenya',
        img: '/images/roasts/littlecity/Kenya.jpg'
      },
      {
        title: 'Tha Pye Gone, Myanmar',
        img: '/images/roasts/littlecity/ThayPyeGone.png'
      },
      {
        title: 'Congress Avenue Blend',
        img: '/images/roasts/littlecity/LCCongress.png'
      },
      {
        title: 'Messenger Blend',
        img: '/images/roasts/littlecity/LCMessenger.png'
      },
      {
        title: 'Republic Blend',
        img: '/images/roasts/littlecity/LCRepublic.png'
      },
      {
        title: 'Violet Crown Blend',
        img: '/images/roasts/littlecity/LCVioletCrown.png'
      },
      {
        title: 'Slacker Blend Swiss Water Process Decaf',
        img: '/images/roasts/littlecity/LCSlacker.png'
      },
      {
        title: 'Cold Brew Blend',
        img: '/images/roasts/littlecity/ColdBrewBag.png'
      },
      {
        title: 'Grackle Blend',
        img: '/images/roasts/littlecity/Grackle.png'
      }
    ]
  },
  {
    roaster: 'Casa Brasil',
    logo: '/images/roasterlogos/casabrasillogo.png',
    roasts: []
  },
  {
    roaster: 'Trianon',
    logo: '/images/roasterlogos/trianonlogo.png',
    roasts: []
  },
  {
    roaster: "Barrett's",
    logo: '/images/roasterlogos/barrettslogo.png',
    roasts: []
  },
  {
    roaster: 'Greater Goods',
    logo: '/images/roasterlogos/greatergoodslogo.png',
    roasts: []
  }
];

const Shop = () => {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = panel => (event, expanded) => {
    setExpanded(expanded ? panel : false);
  };

  return (
    <div className='shop-container'>
      <div className='inner-sub-container'>
        {_.map(roasters, (ele, key) => {
          return (
            <Panels
              item={ele}
              i={key}
              expanded={expanded}
              handleChange={handleChange}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;

// <ExpansionPanel
// expanded={expanded === 'panel1'}
// onChange={handleChange('panel1')}
// >
// <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//   <Typography className={classes.heading}>General settings</Typography>
//   <Typography className={classes.secondaryHeading}>
//     I am an expansion panel
//   </Typography>
// </ExpansionPanelSummary>
// <ExpansionPanelDetails>
//   <Typography>
//     Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//     Aliquam eget maximus est, id dignissim quam.
//   </Typography>
// </ExpansionPanelDetails>
// </ExpansionPanel>
// <ExpansionPanel
// expanded={expanded === 'panel2'}
// onChange={handleChange('panel2')}
// >
// <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//   <Typography className={classes.heading}>Users</Typography>
//   <Typography className={classes.secondaryHeading}>
//     You are currently not an owner
//   </Typography>
// </ExpansionPanelSummary>
// <ExpansionPanelDetails>
//   <Typography>
//     Donec placerat, lectus sed mattis semper, neque lectus feugiat
//     lectus, varius pulvinar diam eros in elit. Pellentesque convallis
//     laoreet laoreet.
//   </Typography>
// </ExpansionPanelDetails>
// </ExpansionPanel>
// <ExpansionPanel
// expanded={expanded === 'panel3'}
// onChange={handleChange('panel3')}
// >
// <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//   <Typography className={classes.heading}>Advanced settings</Typography>
//   <Typography className={classes.secondaryHeading}>
//     Filtering has been entirely disabled for whole web server
//   </Typography>
// </ExpansionPanelSummary>
// <ExpansionPanelDetails>
//   <Typography>
//     Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
//     sit amet egestas eros, vitae egestas augue. Duis vel est augue.
//   </Typography>
// </ExpansionPanelDetails>
// </ExpansionPanel>
// <ExpansionPanel
// expanded={expanded === 'panel4'}
// onChange={handleChange('panel4')}
// >
// <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//   <Typography className={classes.heading}>Personal data</Typography>
// </ExpansionPanelSummary>
// <ExpansionPanelDetails>
//   <Typography>
//     Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
//     sit amet egestas eros, vitae egestas augue. Duis vel est augue.
//   </Typography>
// </ExpansionPanelDetails>
// </ExpansionPanel>
