import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const StyledCard = withStyles({
  root: {
    background: '#FFF',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '37vh',
    width: '30vw',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
})(Card);

const CardText = withStyles({
  root: {
    height: '20vh',
    maxWidth: '30vw',
    textAlign: 'center'
  }
})(CardContent)


const ReviewCards = () => {
  return(
    <div className="review-cards">
      <StyledCard className="card-copy r-card">
        <CardText>
          <p>
            I used to buy the cheap big-box coffees and for some time was getting major heartburn every morning. I pivoted to nicer coffees, like those at LRC, and never looked back.
          </p>
          <strong>- John Doe</strong>
        </CardText>
      </StyledCard>

      <StyledCard className="card-copy r-card">
        <CardText>
          <p>
          I love trying new coffees and learning about roasts and bean origins that I like, but rarely have time to drive across town to different coffee shops. Cue Local Roast, now I don’t have to drive around or put in multiple orders from different roasters every month, they take care of it all for me and I can explore coffees with ease! 
          </p>
          <strong>- Jane Doe</strong>        
        </CardText>
      </StyledCard>
    </div>
  )
}

export default ReviewCards;