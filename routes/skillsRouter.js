import express from 'express';
import * as service from '../services/skillsService.js';

const SkillsRouter = express.Router();

const {
  getAllSkills, 
  getSkillById, 
  insertSkill, 
  updateSkill, 
  deleteSkill, 
} = service;


SkillsRouter.get('/', getAllSkills);
SkillsRouter.get('/:id', getSkillById);
SkillsRouter.post('/', insertSkill);
SkillsRouter.put('/:id', updateSkill);
SkillsRouter.delete('/:id', deleteSkill);



export default SkillsRouter;
