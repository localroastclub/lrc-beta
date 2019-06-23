import React from 'react';
import './content.css'
import SubHeader from './SubHeader';
import Header from './Header';
import Paragraph1 from './Paragraph1';
import HowItWorks from './HowItWorks';
import CopyP2 from './CopyP2';


const Content = () => {
  return (
    <div className="content">
      <Header />
      <SubHeader />
    </div>
  )
}

export default Content;

{/* <Grid item={true} xs={12}>  
<SubHeader />
</Grid>
<Grid item={true} xs={12}>
<Paragraph1 />
</Grid>
<Grid item={true} xs={12}>
<HowItWorks />
</Grid>
<Grid item={true} xs={12}>
<CopyP2 />
</Grid> */}

// moving this stuff  over for now