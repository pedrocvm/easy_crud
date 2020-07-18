import React from 'react';
import css from '../css.modules/app.module.css';


export default function SearchBar({onChanging, findName, nameToSearch, getAllTalents, message}) {
  

  const handleFindName = () => {
    document.querySelector('#search').value = '';
    findName()
  }

  

  const handleRefresh = () => {
    getAllTalents()
  }



  return (
    <div className={`input-field ${css.searchContainer}`}>
      {nameToSearch && <button className={`waves-effect waves-light btn ${css.searchButton}`} onClick={handleRefresh}>
        <i className="material-icons" id='close'>refresh</i>
      </button>}

      <input id="search" type="text" placeholder='Buscar Talento' onChange={onChanging} />

      <button className={`waves-effect waves-light btn ${css.searchButton}`} onClick={handleFindName}>
        <i className="material-icons">search</i>
      </button>
    </div>
  );
}

