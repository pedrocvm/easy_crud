import SkillsModel from '../models/SkillsModel.js';

const getAllSkills = async (req, res) => {
  try{   
    const allSkills = await SkillsModel.find({});
      
    if(allSkills.length <= 0){
      throw new Error(`No register found.`);
    }

    else{
      res.send(allSkills);
    }
  }

  catch(err){
    res.status(400).send(`An error occurred: ${err.message}`);
  };
};

const getSkillById = async (req, res) => {
  const _id = req.params.id;

  try{   
    const skill = await SkillsModel.find({_id}, {_id: 0});
      
    if(skill.length <= 0){
      throw new Error(`No register found.`);
    }

    else{
      res.send(skill);
    };
  }

  catch(err){
    res.status(400).send(`An error occurred: ${err.message}`);
  };
};

const insertSkill = async (req, res) => {
  try{
    const skill = new SkillsModel(req.body);
    await skill.save();
    res.send(`Successfully registered Skill.`);
  }
  catch(err){
    res.status(400).send(`An error occurred: ${err.message}`);
  };
};

const updateSkill = async (req, res) => {
  const _id = req.params.id;

  try{
    await SkillsModel.findByIdAndUpdate(
      {_id},
      req.body,
      {
        useFindAndModify: false, 
        new: true
      }
    );
    res.send(
      `Successfully updated register.
      `);
  }

  catch(err){
    res.status(400).send(`An error occurred: ${err.message}`);
  };
};

const deleteSkill = async (req, res) => {
  const _id = req.params.id;

  try{
    await SkillsModel.findByIdAndDelete({_id});
    res.send(`Successfully deleted register`);
  }
  catch(err){
    res.status(400).send(`An error occurred: ${err.message}`);
  };
};


export {
  getAllSkills, 
  getSkillById, 
  insertSkill, 
  updateSkill, 
  deleteSkill, 
};
