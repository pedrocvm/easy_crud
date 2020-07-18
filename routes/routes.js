import express from 'express';
import * as service from '../services/talentService.js';

const TalentRouter = express.Router();

const {
  getAll,
  getById,
  insertTalent,
  updateTalent,
  deleteTalent,
  removeAll
} = service;

TalentRouter.get('/', getAll);
TalentRouter.get('/:id', getById);
TalentRouter.post('/', insertTalent);
TalentRouter.patch('/:id', updateTalent);
TalentRouter.delete('/:id', deleteTalent);
TalentRouter.delete('/', removeAll);


export default TalentRouter;
