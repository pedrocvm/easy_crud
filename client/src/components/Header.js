/* eslint-disable */
import React from 'react';
import logo from '../images/logo.png';
import css from '../css.modules/app.module.css';
import SearchBar from './SearchBar';

export default function Header({
  isModalOpen,
  isModalAddOpen,
  selectedTalent,
  onChanging,
  findName,
  nameToSearch,
  onAdd,
  onRemoveAll,
  getAllTalents,
  message
}) {

  const handleAddTalent = () => {
    onAdd();
  };

  const handleRemoveAll = () => {
    onRemoveAll();
  };


  return (
    <div>
      <div className="header">
        <nav className="nav-wrapper">
          <div className={`left ${css.logo}`}>
            <a href="/" className="brand-logo">
              <img src={logo} alt="logo.png" border="0" />
            </a>
          </div>

          <a
            href="#"
            data-target="mobile-navbar"
            className="right sidenav-trigger"
          >
            {!isModalOpen && !isModalAddOpen &&
              <i className={`material-icons ${css.menuIcon}`}>menu</i>
              }
          </a>

          <ul
            id="nav-mobile"
            className={`right hide-on-med-and-down ${css.ulMenu}`}
          >
            <li className="nav-item">
              <a className={`nav-link ${css.navLink}`} onClick={handleAddTalent}>
                Cadastrar Talento
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${css.navLink}`} onClick={handleRemoveAll}>
                Resetar Talentos
              </a>
            </li>
          </ul>
        </nav>

        <ul id="mobile-navbar" className={`sidenav ${css.mobileSidebar}`}>
          <div className={css.mobileBar}></div>
          <li>
            <a className={`nav-link ${css.navLink}`} onClick={handleAddTalent}>
              Cadastrar Talento
            </a>
          </li>
          <li>
            <a className={`nav-link ${css.navLink}`} onClick={handleRemoveAll}>
              Resetar Talento
            </a>
          </li>
        </ul>

        <section>
          <div className="title center" style={{marginBottom: '15px'}}>
            <h4>BANCO DE TALENTOS</h4>
            <em>Come be great with us!</em>
          </div>

          <div className={`${css.searchBarContainer} seachBarContainer`}>
            {!isModalOpen && !isModalAddOpen && (
                <SearchBar
                  selectedTalent={selectedTalent}
                  onChanging={onChanging}
                  findName={findName}
                  nameToSearch={nameToSearch}
                  getAllTalents={getAllTalents}
                  message={message}
                />
              )}
          </div>
        </section>
      </div>
    </div>
  );
};
