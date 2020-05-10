import React from 'react';
import _ from 'lodash';
import Panels from './Panels';
import './shop.css';

// import mozarts from './../../../images/roasterlogos/mozartslogo.png';

const roasters = [
  {
    roaster: "Mozart's",
    logo: '/images/roasterlogos/mozartslogo.png',
    roasts: [
      {
        title: 'Light Roast',
        description: '',
        img: '/images/roasts/mozarts/mozart_light.png',
      },
      {
        title: 'Medium Roast',
        description: '',
        img: '/images/roasts/mozarts/mozart_medium.png',
      },
      {
        title: 'Dark Roast',
        description: '',
        img: '/images/roasts/mozarts/mozart_dark.png',
      },
      {
        title: 'Espresso',
        description: '',
        img: '/images/roasts/mozarts/mozart_dark.png',
      },
      {
        title: 'Decaf',
        description: '',
        img: '/images/roasts/mozarts/mozart_decaf.png',
      },
    ],
  },
  {
    roaster: 'Austin Roasting Company',
    logo: '/images/roasterlogos/arclogo.png',
    roasts: [
      {
        title: 'Light Roast',
        description: '',
        img: '/images/roasts/arc/arc_light.jpg',
      },
      {
        title: 'Medium Roast',
        description: '',
        img: '/images/roasts/arc/arc_light.jpg',
      },
      {
        title: 'Dark Roast',
        description: '',
        img: '/images/roasts/arc/arc_dark.jpg',
      },
      {
        title: 'Espresso',
        description: '',
        img: '/images/roasts/arc/arc_dark.jpg',
      },
      {
        title: 'Decaf',
        description: '',
        img: '/images/roasts/arc/arc_light.jpg',
      },
    ],
  },
  {
    roaster: 'Little City',
    logo: '/images/roasterlogos/lclogo.png',
    roasts: [
      {
        title: 'Light Roast',
        description: '',
        img: '/images/roasts/littlecity/LC_generic.png',
      },
      {
        title: 'Medium Roast',
        description: '',
        img: '/images/roasts/littlecity/LC_generic.png',
      },
      {
        title: 'Dark Roast',
        description: '',
        img: '/images/roasts/littlecity/LC_generic.png',
      },
      {
        title: 'Espresso',
        description: '',
        img: '/images/roasts/littlecity/LC_generic.png',
      },
      {
        title: 'Decaf',
        description: '',
        img: '/images/roasts/littlecity/LC_generic.png',
      },
      {
        title: 'Microlots',
        description: '',
        img: '/images/roasts/littlecity/LC_generic.png',
      },
    ],
  },
  {
    roaster: 'Casa Brasil',
    logo: '/images/roasterlogos/casabrasillogo.png',
    roasts: [
      {
        title: 'Light Roast',
        description: '',
        img: '/images/roasts/casabrasil/cb_light.png',
      },
      {
        title: 'Medium Roast',
        description: '',
        img: '/images/roasts/casabrasil/cb_medium.png',
      },
      {
        title: 'Dark Roast',
        description: '',
        img: '/images/roasts/casabrasil/cb_dark.png',
      },
      {
        title: 'Espresso',
        description: '',
        img: '/images/roasts/casabrasil/cb_dark.png',
      },
      {
        title: 'Decaf',
        description: '',
        img: '/images/roasts/casabrasil/cb_decaf.png',
      },
      {
        title: 'Microlots',
        description: '',
        img: '/images/roasts/casabrasil/cb_light.png',
      },
    ],
  },
  {
    roaster: 'Trianon',
    logo: '/images/roasterlogos/trianonlogo.png',
    roasts: [
      {
        title: 'Light Roast',
        description: '',
        img: '/images/roasterlogos/trianonlogo.png',
      },
      {
        title: 'Medium Roast',
        description: '',
        img: '/images/roasterlogos/trianonlogo.png',
      },
      {
        title: 'Dark Roast',
        description: '',
        img: '/images/roasterlogos/trianonlogo.png',
      },
      {
        title: 'Espresso',
        description: '',
        img: '/images/roasterlogos/trianonlogo.png',
      },
      {
        title: 'Decaf',
        description: '',
        img: '/images/roasterlogos/trianonlogo.png',
      },
      {
        title: 'Microlots',
        description: '',
        img: '/images/roasterlogos/trianonlogo.png',
      },
    ],
  },
  {
    roaster: "Barrett's",
    logo: '/images/roasterlogos/barrettslogo.png',
    roasts: [
      {
        title: 'Light Roast',
        description: '',
        img: '/images/roasts/barretts/barretts.png',
      },
      {
        title: 'Medium Roast',
        description: '',
        img: '/images/roasts/barretts/barretts.png',
      },
      {
        title: 'Dark Roast',
        description: '',
        img: '/images/roasts/barretts/barretts.png',
      },
      {
        title: 'Espresso',
        description: '',
        img: '/images/roasts/barretts/barretts.png',
      },
      {
        title: 'Decaf',
        description: '',
        img: '/images/roasts/barretts/barretts.png',
      },
    ],
  },
  {
    roaster: 'Greater Goods',
    logo: '/images/roasterlogos/greatergoodslogo.png',
    roasts: [
      {
        title: 'Light Roast',
        description: '',
        img: '/images/roasts/greatergoods/gg_light.png',
      },
      {
        title: 'Medium Roast',
        description: '',
        img: '/images/roasts/greatergoods/gg_medium.png',
      },
      {
        title: 'Dark Roast',
        description: '',
        img: '/images/roasts/greatergoods/gg_dark.png',
      },
      {
        title: 'Espresso',
        description: '',
        img: '/images/roasts/greatergoods/gg_dark.png',
      },
      {
        title: 'Decaf',
        description: '',
        img: '/images/roasts/greatergoods/gg_decaf.png',
      },
    ],
  },
];

const Shop = () => {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, expanded) => {
    setExpanded(expanded ? panel : false);
  };

  return (
    <div className='shop-container'>
      <div className='shop-inner-container'>
        {_.map(roasters, (ele, i) => {
          return (
            <Panels
              item={ele}
              i={i}
              expanded={expanded}
              handleChange={handleChange}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
