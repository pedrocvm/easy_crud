import mongoose from 'mongoose';

let skillsSchema = mongoose.Schema({   
  skill: String
  
}, {versionKey: false});

const SkillsModel = mongoose.model('skills', skillsSchema, 'skills');

export default SkillsModel;
