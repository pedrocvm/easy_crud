/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { mask, formatNumber } from '../helpers/helper.js';
import capitalize from 'capitalize-pt-br';
import InputMask from 'react-input-mask';


Modal.setAppElement('#root');

export default function TalentModal({
  selectedTalent,
  allSkills,
  onClose,
  onEdit,
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [talent, setTalent] = useState(selectedTalent[0]);
  const [message, setMessage] = useState('');
  
  
  
  //prettier-ignore
  const {_id, name, phone, email, skype, linkedin, city, state, portfolio, avaliability, timeToWork, hourlySalary,
  ionic, react, reactNative, android, flutter, swift, ios, html, css, bootstrap, jquery, angularJs,
  angular, java, python, flask, aspNetMvc, aspNetWebForm, c, cSharp, nodeJs, expressJs, cake, django,
  majento, php, vueJs, wordpress, ruby, sqlServer, mySql, salesforce, photoshop, ilustrator, seo, laravel,
  anotherLanguage, crudLink} = selectedTalent[0];
  
  let index = 1;

  //prettier-ignore
  const allScores = [
  ionic, react, reactNative, android, flutter, swift, ios, html, css, bootstrap, jquery, angularJs, angular,
  java, python, flask, aspNetMvc, aspNetWebForm, c, cSharp, nodeJs, expressJs, cake, django, majento, php,
  vueJs, wordpress, ruby, sqlServer, mySql, salesforce, photoshop, ilustrator, seo, laravel,
  ];

  let tempArray = [];

  let skillName = allSkills.map((skill) => { 
    return {
      name: skill.skill,
      skill: skill.name
    }
  });

  let scoreSkill = allScores.map((score) => score);

  let skillNameArray = skillName.map(name => name.name)

  let skillCodeArray = skillName.map(skill => skill.skill)
  tempArray.push({
    name: skillNameArray.map((name) => name),
    skill: skillCodeArray.map((code) => code),
    score: scoreSkill.map((score) => score),
  });


  let skillArray = [];
  for (let i = 0; i < allScores.length; i++) {
    skillArray.push({
      name: tempArray[0].name[i],
      skill: tempArray[0].skill[i],
      score: tempArray[0].score[i]
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleModalClose = () => {
    onClose();
    setIsEditing(false);
    setMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleTalentChange = (event) => {
    const { name, value, type, checked, id } = event.target;
    if(type === 'radio'){
      if(checked){
        setTalent({...talent, [id]: Number(value)});
      }

    }
    if(name === 'hourlySalary'){
      const format = Number(
        value.replace(',', '.').replace(/[a-zA-Z, $]+/g, '')
      ).toFixed(2);
      
      setTalent({ ...talent, [name]: +format });
    }
    else{
      setTalent({ ...talent, [name]: value });
    }    
  };

  const handleSave = () => {
    setMessage('Talento atualizado com sucesso.');
    setTimeout(() => {
      onEdit(_id, talent);
    }, 500);
  };

  const handleDelete = () => {
    if (confirm(`Deseja remover o Candidato ${name}?`)) {
      onDelete(talent);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <Modal isOpen={true}>
        <form onSubmit={handleFormSubmit}>
          <div style={styles.closeContainer} className='row'>
            <div className="btnContainer col xl12 l12 m12 s12" style={styles.btnContainer}>
              {isEditing && (
                <button
                  className="waves-effect waves-light btn blue darken-4"
                  style={styles.editBtn}
                  onClick={handleSave}
                >
                  <i
                    className="material-icons"
                    style={{
                      lineHeight: 0,
                      position: 'relative',
                      top: '-5px',
                      color: 'white',
                    }}
                  >
                    save
                  </i>
                </button>
              )}

              <button
                style={styles.editBtn}
                className="waves-effect waves-light btn darken-4"
                onClick={handleEdit}
              >
                <i
                  className="material-icons"
                  style={{
                    lineHeight: 0,
                    position: 'relative',
                    top: '-5px',
                    color: 'white',
                  }}
                >
                  edit
                </i>
              </button>

              <button
                className="waves-effect waves-light btn yellow darken-2"
                style={styles.editBtn}
                onClick={handleDelete}
              >
                <i
                  className="material-icons"
                  style={{
                    lineHeight: 0,
                    position: 'relative',
                    top: '-5px',
                    left: '-0.5px',
                    color: 'black',
                  }}
                >
                  delete
                </i>
              </button>

              <button
                style={styles.closeBtn}
                className="waves-effect waves-light btn red darken-4"
                onClick={handleModalClose}
              >
                <i
                  className="material-icons"
                  style={{
                    lineHeight: 0,
                    position: 'relative',
                    top: '-5px',
                    left: '-0.5px',
                    color: 'white',
                  }}
                >
                  close
                </i>
              </button>
            </div><br/>

            <div className='col xl12 l12 m12 s12'>
              <h5>
                <strong>Detalhes do Candidato</strong>
              </h5>
            </div>

            <div>
              {message.length > 1 && <h6 style={styles.message}>{message}</h6>}
            </div>

          </div>

          <div
            className="row"
            style={{ marginTop: '50px', marginBottom: '50px' }}
          >
            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="name"
                name="name"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={capitalize(name)}
                onChange={handleTalentChange}
                required={!isEditing}
              />
              <label className="active" htmlFor="name">
                Nome/Name
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <InputMask
                id="phone"
                mask="(99) 99999-9999"
                name="phone"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={mask(phone)}
                onChange={handleTalentChange}
                required={!isEditing}
              />
              <label
                className="active"
                htmlFor="phone"
              >{`Telefone/Phone (Whatsapp):`}</label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="email"
                name="email"
                type="email"
                className="validate"
                disabled={!isEditing}
                defaultValue={email}
                onChange={handleTalentChange}
                required={!isEditing}
              />
              <label className="active" htmlFor="email">
                E-mail
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="skype"
                name="skype"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={skype}
                onChange={handleTalentChange}
              />
              <label className="active" htmlFor="skype">
                Skype
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={linkedin}
                onChange={handleTalentChange}
              />
              <label className="active" htmlFor="linkedin">
                Linkedin
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="city"
                name="city"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={capitalize(city)}
                onChange={handleTalentChange}
                required={!isEditing}
              />
              <label className="active" htmlFor="linkedin">
                Cidade
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="state"
                name="state"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={state.toUpperCase()}
                onChange={handleTalentChange}
                required={!isEditing}
              />
              <label className="active" htmlFor="state">
                UF
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="portfolio"
                name="portfolio"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={portfolio}
                onChange={handleTalentChange}
              />
              <label className="active" htmlFor="portfolio">
                Portfólio
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="avaliability"
                name="avaliability"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={avaliability}
                onChange={handleTalentChange}
                required={!isEditing}
              />
              <label className="active" htmlFor="avaliability">
                Quando poderá começar
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="timeToWork"
                name="timeToWork"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={timeToWork}
                onChange={handleTalentChange}
                required={!isEditing}
              />
              <label className="active" htmlFor="timeToWork">
                Melhor horário para trabalhar
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="hourlySalary"
                name="hourlySalary"
                type="text"
                className="validate"
                disabled={!isEditing}
                defaultValue={formatNumber(hourlySalary)}
                onChange={handleTalentChange}
                required={!isEditing}
              />
              <label className="active" htmlFor="hourlySalary">
                Pretensão salarial por hora
              </label>
            </div>

            <div className="col xl12 l12 m12 s12">
              <h5 style={{ lineHeight: 3, marginBottom: '-10px' }}>
                <strong>Skills do Candidato</strong>
              </h5>
            </div>

            <div>
              {skillArray.map((oneSkill) => {
                const { skill, score, name } = oneSkill;
                return (
                  <div
                    key={index++}
                    className="col xl4 l4 m4 s12"
                    style={styles.radioLabelContainer}
                  >
                    <label
                      className="active"
                      style={styles.radioLabel}
                      htmlFor={skill}
                    >
                      {name}
                    </label>

                    <br />

                    <label style={styles.radioButton}>
                      <input
                        name={name}
                        type="radio"
                        id={skill}
                        disabled={!isEditing}
                        value={0}
                        defaultChecked={score === 0}
                        onChange={handleTalentChange}
                        required={!isEditing}
                      />
                      <span>0</span>
                      <label style={styles.noob2}>Não conhece</label>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={name}
                        type="radio"
                        id={skill}
                        disabled={!isEditing}
                        value={1}
                        defaultChecked={score === 1}
                        onChange={handleTalentChange}
                      />
                      <span>1</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={name}
                        type="radio"
                        id={skill}
                        disabled={!isEditing}
                        value={2}
                        defaultChecked={score === 2}
                        onChange={handleTalentChange}
                      />
                      <span>2</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={name}
                        type="radio"
                        id={skill}
                        disabled={!isEditing}
                        value={3}
                        defaultChecked={score === 3}
                        onChange={handleTalentChange}
                      />
                      <span>3</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={name}
                        type="radio"
                        id={skill}
                        disabled={!isEditing}
                        value={4}
                        defaultChecked={score === 4}
                        onChange={handleTalentChange}
                      />
                      <span>4</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={name}
                        type="radio"
                        id={skill}
                        disabled={!isEditing}
                        value={5}
                        defaultChecked={score === 5}
                        onChange={handleTalentChange}
                      />
                      <span>5</span>
                      <label style={styles.senior}>Senior</label>
                    </label>
                  </div>
                );
              })}
            </div>

            <div
              className="input-field col xl6 l6 m6 s12"
              style={{ marginTop: '50px' }}
            >
              <input
                id="anotherLanguage"
                type="text"
                className="validate"
                disabled={!isEditing}
                value={anotherLanguage}
                onChange={handleTalentChange}
                style={{ marginTop: '20px' }}
              />
              <label className="active" htmlFor="anotherLanguage">
                Alguma outra linguagem ou framework? Avalie-se.
              </label>
            </div>

            <div
              className="input-field col xl6 l6 m6 s12"
              style={{ marginTop: '70px' }}
            >
              <input
                id="crudLink"
                type="text"
                className="validate"
                disabled={!isEditing}
                value={crudLink}
                onChange={handleTalentChange}
              />
              <label className="active" htmlFor="crudLink">
                Link CRUD
              </label>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const styles = {
  closeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  closeBtn: {
    marginLeft: '20px',
    borderRadius: '50%',
    padding: '10px',
  },

  editBtn: {
    marginLeft: '20px',
    borderRadius: '50%',
    padding: '10px',
  },

  radioContainer: {
    marginLeft: '15px',
  },

  radioLabelContainer: {
    margin: '30px 0', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  radioLabel: {
    lineHeight: 1,
    marginBottom: '-15px'
  },

  radioButton: {
    padding: '0 10px',
  },

  firstButton: {
    marginRight: '10px',
  },

  noob: {
    marginRight: '15px',
    color: 'red',
  },

  noob2: {
    marginLeft: '15px',
    color: 'red',
  },

  senior: {
    marginLeft: '20px',
    color: 'blue',
  },

  userPic: {
    borderRadius: '50%',
    width: '150px',
  },

  message: {
    backgroundColor: '#26a69a',
    color: 'white',
    border: '1px solid lightgrey',
    padding: '5px 10px',
    borderRadius: '10px',
  },
};
