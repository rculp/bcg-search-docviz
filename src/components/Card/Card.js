import React, { Fragment } from 'react';
import uuid from 'uuid/v1';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Card.scss';

Card.PracticeArea = ({ practiceAreas }) => (
  <span className="practiceAreas">
    {
      practiceAreas.map((pa, index) => (
        <Fragment key={uuid()}>{ index > 0 && <span className="bullet">&nbsp;&bull;&nbsp;</span> }{pa}</Fragment>
      ))
    }
  </span>
);

Card.MatchPercentage = ({ relevancyScore }) => (
  <span className="matchPercentage">{ relevancyScore * 100 }% MATCH</span>
);

Card.PracticeArea.propTypes = {
  practiceAreas: PropTypes.arrayOf(PropTypes.string)
};

Card.PracticeArea.defaultProps = {
  practiceAreas: []
};

Card.MatchPercentage.propTypes = {
  relevancyScore: PropTypes.number
};

Card.MatchPercentage.defaultProps = {
  relevancyScore: 0
};

export default Card;
