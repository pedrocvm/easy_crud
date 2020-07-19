/* eslint-disable */
import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import * as api from './API/apiService.js';
import Spinner from './components/Spinner';
import css from './css.modules/app.module.css';
import TalentsControl from './components/TalentsControl.js';
import Header from './components/Header.js';
import TalentModal from './components/TalentModal.js';
import AddTalentModal from './components/AddTalentModal.js';
import ScrollUp from './components/ScrollUp.js';

export default function App() {
  const [allTalents, setAllTalents] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [selectedTalent, setSelectedTalent] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [message, setMessage] = useState('');

  const handleMessage = (newMessage) => {
    setMessage(newMessage);

    return message;
  };

  const onChangeSearchName = (event) => {
    const searchName = event.target.value;
    setSearchName(searchName);
  };

  const findByName = async () => {
    const searchedTalent = await api.getByName(searchName);
    if(searchedTalent.length > 0){
      setAllTalents(searchedTalent)
    } 
    else{
      setTimeout(() => {
        setAllTalents([]);
        handleMessage('Nenhum registro encontrado.');
      }, 1000);
    };
  };

  const handleRefreshSearch = async () => {
    const refreshedSearch = await api.getTalents();
    setAllTalents(refreshedSearch);
  };

  useEffect(() => {
    const getAllTalents = async () => {
      const talents = await api.getTalents();

      if(talents){
        setAllTalents(talents);
      }
      else{
        setTimeout(() => {
          handleMessage('Nenhum registro encontrado.');
        }, 1000);
      };
      
    };

    const getAllSkills = async () => {
      const skills = await api.getSkills();
      setAllSkills(skills);
    };

    getAllTalents();
    getAllSkills();
  }, []);

  
  const handleSave = async (talentData) => {
    await api.insertTalent(talentData);

    const newTalents = Object.assign([], allTalents);

    newTalents.push(talentData);
    setAllTalents(newTalents);
  };

  const handleSelectTalent = async (talent) => {
    const selected = await api.getOneTalent(talent);
    setSelectedTalent(selected);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsModalAddOpen(false);
  };

  const handleEdit = async (id, talentToPersist) => {
    await api.updateTalent(id, talentToPersist);

    const newTalent = Object.assign([], allTalents);
    const editIndex = newTalent.findIndex((talent) => {
      return talent._id === talentToPersist._id;
    });

    newTalent.splice(editIndex, 1, talentToPersist);

    setAllTalents(newTalent);
    setIsModalOpen(false);
  };

  const handleDelete = async (talentToDelete) => {
    if(allTalents.length > 1){
      const isDeleted = await api.deleteTalent(talentToDelete);

      if (isDeleted) {
        const indexToDelete = allTalents.findIndex(
          (talent) => talent._id === talentToDelete._id  
        );
  
        const newTalents = Object.assign([], allTalents);
        newTalents.splice(indexToDelete, 1);
        setAllTalents(newTalents);
        setIsModalOpen(false);
      }

    }
    else{
      await api.deleteAllTalents();
      const newTalents = [];
      setAllTalents(newTalents);
      setIsModalOpen(false);
      setTimeout(() => {
        handleMessage('Nenhum registro encontrado.');
      }, 1000);
    };
  };

  const handleDeleteAll = async () => {
    if(confirm('Deseja excluir todos os Candidatos?')){
      await api.deleteAllTalents();
      const newTalents = [];
      setAllTalents(newTalents);
      alert('Todos os Candidatos foram excluídos.');
      setTimeout(() => {
        handleMessage('Nenhum registro encontrado.');
      }, 1000);
    };
  };

  const handleActiveAdd = () => {
    setIsModalAddOpen(true);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <div>
        <Header
          isModalOpen={isModalOpen}
          isModalAddOpen={isModalAddOpen}
          selectedTalent={selectedTalent}
          onChanging={onChangeSearchName}
          findName={findByName}
          nameToSearch={searchName}
          onAdd={handleActiveAdd}
          onRemoveAll={handleDeleteAll}
          getAllTalents={handleRefreshSearch}
          message={message}
        />

        <section>
          <div className={css.contentContainer}>
          

            {allTalents.length === 0 && 
            <div className='center'>
              <span style={{fontSize: '16pt'}}>{message}</span>
              <Spinner message={message}/>
            </div>


            }

            {allTalents && (
              <TalentsControl
                allTalents={allTalents}
                selected={handleSelectTalent}
                message={message}
              />
            )}
          </div>
        </section>

        <section>
          {isModalOpen && (
            <TalentModal
              selectedTalent={selectedTalent}
              allSkills={allSkills}
              onClose={handleClose}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </section>

        <section>
          {isModalAddOpen && (
            <AddTalentModal
              allSkills={allSkills}
              onClose={handleClose}
              onSave={handleSave}
            />
          )}
        </section>

        <ScrollUp/>
      </div>
    </div>
  );
};
