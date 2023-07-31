import React from 'react';
import './PokemonStatus.css';

const PokemonStatus = ({ status }: any) => {
  const { base_stat, stat } = status;

  return (
    <div className={`container ${stat.name}`}>
      <label className="name" htmlFor={stat.name}>
        {stat.name}
      </label>
      <div className="progress-bar">
        <div
          className="progress-value"
          style={{ width: `${(base_stat / 252) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PokemonStatus;
