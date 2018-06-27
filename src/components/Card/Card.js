import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Card.scss';

Card.PracticeArea = ({ children }) => (
  <span className="practiceAreas">{ children }</span>
);

Card.MatchPercentage = ({ children }) => (
  <span className="matchPercentage">{ children }</span>
);

Card.PracticeArea.propTypes = {
  children: PropTypes.node.isRequired
};

Card.MatchPercentage.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
