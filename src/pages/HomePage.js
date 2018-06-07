import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class HomeContainer extends Component {

  render = () => {
    return (
      <div className="page">
        <Link to="/results">Results</Link>
        <main>
          From Home
        </main>
      </div>
    );
  };

}

export default HomeContainer;