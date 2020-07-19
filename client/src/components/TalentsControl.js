import React from 'react';
import css from '../css.modules/talent.module.css';
import capitalize from 'capitalize-pt-br';

export default function TalentsControl({ allTalents, selected }) {
  const handleSelect = (event) => {
    selected(event.target.value);
  };

  return (
    <div className="center-align">
      <ul className={css.talentContainer}>
        {allTalents.map((talent) => {
          const { _id, name, email, city, state } = talent;
          return (
            <li
              key={`${_id}+${name}`}
              className={`card-panel hoverable ${css.talent}`}
            >
              <span className={css.cardTitle}>{capitalize(name)}</span>
              <span>{email}</span>
              <span hidden={!city & !state}>{`${capitalize(
                city
              )}/${state.toUpperCase()}`}</span>
              <button
                className={'btn transparent'}
                onClick={handleSelect}
                value={_id}
              >
                Leia mais...
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
