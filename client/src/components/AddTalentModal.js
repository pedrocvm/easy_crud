/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function AddTalentModal({allSkills, onClose, onSave}) {
  const [newTalent, setNewTalent] = useState({});
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleModalClose = () => {
    onClose();
    setMessage('');
  };

  const handleKeyDown = (event) => {
    event.key === 'Escape' && onClose();  
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleTalentChange = (event) => {
    let {name, value, type} = event.target;
    if(type === 'radio'){
      if(event.target.checked){
        setNewTalent({...newTalent, [name.toLowerCase()]: +value});
      }
    }
    else{
      setNewTalent({...newTalent, [name]: value});
    } 
  }

  const handleSave = () => {
    const inputArray = Array.from(document.querySelectorAll('input'));

    const requiredInput = inputArray.filter(input => input.required === true);

    let isRequired
    requiredInput.forEach(input => {
      if(input.value = ''){
        isRequired = true
      };
    });

    if(isRequired){
      alert(`Há campos obrigatórios não preenchidos.`);
      return;
    };

    onSave(newTalent)
    onClose();
  }


  return (
    <div>
      <Modal isOpen={true}>
        <form onSubmit={handleFormSubmit}>
          <div style={styles.closeContainer}>
            <h5>
              <strong>Registrar Candidato</strong>
            </h5>
            <div>
              {message.length > 1 && <h6 style={styles.message}>{message}</h6>}
            </div>

              <button
                style={styles.closeBtn}
                className="waves-effect waves-light btn red darken-4"
                onClick={handleModalClose}
              >
                <i className='material-icons' style={{lineHeight: 0, position: 'relative', top: '-4px', color: 'white'}}>close</i>
              </button>            
          </div>


          <div className="row" style={{marginTop: '50px', marginBottom: '50px'}}>
           
            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="name"
                name="name"
                type="text"
                className="validate"
                onChange={handleTalentChange}
                required={true}
              />
              <label className="active" htmlFor="name">
                Nome / Name <span style={styles.required}>*</span>
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="email"
                name="email"
                type="email"
                className="validate"
                onChange={handleTalentChange}
                required={true}
              />
              <label className="active" htmlFor="email">
                E-mail <span style={styles.required}>*</span>
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="phone"
                name="phone"
                type="text"
                maxLength={11}
                className="validate"
                onChange={handleTalentChange}
                required={true}
              />
              <label
                className="active"
                htmlFor="phone"
              >{`Telefone/Phone (Whatsapp)`} <span style={styles.required}>*</span></label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="skype"
                name="skype"
                type="text"
                className="validate"
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
                onChange={handleTalentChange}
                required={true}
              />
              <label className="active" htmlFor="city">
                Cidade /City <span style={styles.required}>*</span>
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="state"
                name="state"
                type="text"
                maxLength={2}
                className="validate"
                onChange={handleTalentChange}
                required={true}
              />
              <label className="active" htmlFor="state">
                Estado / State <span style={styles.required}>*</span>
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="portfolio"
                name="portfolio"
                type="text"
                className="validate"
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
                onChange={handleTalentChange}
                required={true}
              />
              <label className="active" htmlFor="avaliability">
                Quando poderá começar <span style={styles.required}>*</span>
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="timeToWork"
                name="timeToWork"
                type="text"
                className="validate"
                onChange={handleTalentChange}
                required={true}
              />
              <label className="active" htmlFor="timeToWork">
                Melhor horário para trabalhar <span style={styles.required}>*</span>
              </label>
            </div>

            <div className="input-field col xl6 l6 m6 s12">
              <input
                id="hourlySalary"
                name="hourlySalary"
                type="number"
                className="validate"
                data-thousands= "" 
                data-decimal= ","
                onChange={handleTalentChange}
                required={true}
              />
                <label className="active" htmlFor="hourlySalary">
                Pretensão salarial por hora <span style={styles.required}>*</span>
              </label>
            </div>

            <div className="col xl12 l12 m12 s12">
              <h5 style={{ lineHeight: 3, marginBottom: '-10px' }}>
                <strong>Skills do Candidato</strong>
              </h5>
            </div>

            <div>
              {allSkills.map((oneSkill) => {
                const { _id, skill } = oneSkill;
                
                return (
                  <div
                    key={`${_id}+${skill}`}
                    className="col xl6 l6 m12 s12"
                    style={{ marginBottom: '20px' }}
                  >
                    <label
                      className="active"
                      style={styles.radioLabel}
                      htmlFor={skill}
                    >
                      {skill} <span style={styles.required}>*</span>
                    </label>

                    <br />

                    <label style={styles.firstButton}>
                      <label style={styles.noob}>Não conhece</label>
                      <input
                        name={skill}
                        type="radio"
                        id={`${skill}0`}
                        value={0}
                        required={true}
                        onChange={handleTalentChange}
                      />
                      <span>0</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={skill}
                        type="radio"
                        id={`${skill}1`}
                        value={1}
                        onChange={handleTalentChange}
                      />
                      <span>1</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={skill}
                        type="radio"
                        id={`${skill}2`}
                        value={2}
                        onChange={handleTalentChange}
                      />
                      <span>2</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={skill}
                        type="radio"
                        id={`${skill}3`}
                        value={3}
                        onChange={handleTalentChange}
                      />
                      <span>3</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={skill}
                        type="radio"
                        id={`${skill}4`}
                        value={4}
                        onChange={handleTalentChange}
                      />
                      <span>4</span>
                    </label>

                    <label style={styles.radioButton}>
                      <input
                        name={skill}
                        type="radio"
                        id={`${skill}5`}
                        value={5}
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
                name="anotherLanguage"
                type="text"
                className="validate"
                style={{ marginTop: '20px' }}
              />
              <label className="active" htmlFor="anotherLanguage">
                Conhece mais alguma linguagem ou framework que não foi listado
                aqui em cima? Conte para nos e se auto avalie ainda de 0 a 5.
              </label>
            </div>

            <div
              className="input-field col xl6 l6 m6 s12"
              style={{ marginTop: '70px' }}
            >
              <input
                id="crudLink"
                name="crudLink"
                type="text"
                className="validate"
                required={true}
              />
              <label className="active" htmlFor="crudLink">
                Link CRUD <span style={styles.required}>*</span>
              </label>
            </div>
          </div>

          <div className='center'>
            <button className='waves-effect waves-light btn red darken-4' onClick={handleSave}>SALVAR</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const styles = {
  closeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  radioLabel: {
    lineHeight: 1,
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
    borderRadius: '10px'
  },
  required: {
    color: 'red'
  },
};
