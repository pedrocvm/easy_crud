import mongoose from 'mongoose';

let skillsSchema = mongoose.Schema({   
  skill: String
  
}, {versionKey: false});

const SkillsModel = mongoose.model('SKILLS', skillsSchema);

export default SkillsModel;
