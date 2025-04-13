import React from 'react';
import '../../App.css';
import CreateRanking from '../CreateRanking';

/* Page du classement des meilleures parties */
function Ranking() {
  return (
    <div className="ranking-page">
      <h1>Classement</h1>
      <CreateRanking />
    </div>
  );
}

export default Ranking;