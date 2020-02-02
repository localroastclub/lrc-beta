import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ReviewCard = withStyles({
  root: {
    background: '#d7b56e',
    borderRadius: 3,
    border: 0,
    color: 'black',
    minHeight: '40vh',
    maxHeight: '80vh',
    width: '72vw',
    padding: '0 30px'
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
})(Card);

const CardText = withStyles({
  root: {
    height: '20vh',
    maxWidth: '68vw',
    textAlign: 'center',
    marginTop: '3%',
    marginBottom: '3%'
  }
})(CardContent);

const ReviewLg = () => {
  return (
    <div className="review-lg">
      <ReviewCard className="r-lg-card">
        <CardText>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            “Lorem ipsum dolor sit amet, viris populo habemus no his, eum utinam
            dignissim cu, sed alienum euripidis ut. Te nam nulla oporteat
            comprehensam. Eam cu modo viris virtute, ei impetus scaevola
            contentiones eos, eos ea ridens nominati. Mucius nostrud invenire ex
            pro, numquam reprimique eum no, quo solum errem sententiae id. An
            mea lorem novum, pro an labore alienum definiebas.”
          </p>
          <strong>-Stevie T.</strong>
        </CardText>
      </ReviewCard>
    </div>
  );
};

export default ReviewLg;
