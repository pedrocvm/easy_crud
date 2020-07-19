import TalentsModel from '../models/TalentsModel.js';

const getAll = async (req, res) => {
  const name = req.query.name;
   
  const condition = name
  ? { name: { $regex: new RegExp(name), $options: 'i' } }
  : {};

  const allTalentsFiltered = await TalentsModel.find(condition);
  const allTalents = await TalentsModel.find({});
  
  try{   
    if(allTalents.length > 0){
      if(!name) {
        res.send(allTalents)
      }
      else{
        if(allTalentsFiltered.length > 0){
          res.send(allTalentsFiltered)
        }
        else{
          res.send([]);
        }
      }
    }
    else{
      res.send('No registers found.');
    }
         
    }
  

  catch(err){
    res.status(400).send(`An error occurred: ${err.message}`);
  };
};

const getById = async (req, res) => {
  const _id = req.params.id;

  try{   
    const talent = await TalentsModel.find({_id});
      
    if(talent.length <= 0){
      throw new Error(`No register found.`);
    }

    else{
      res.send(talent);
    };
  }

  catch(err){
    res.status(500).send(`An error occurred: ${err.message}`);
  };
};

const insertTalent = async (req, res) => {
  try{
    const talent = new TalentsModel(req.body);
    await talent.save(talent);
    res.send(`Successfully registered Talent.`);
  }
  catch(err){
    res.status(500).send(`An error occurred: ${err.message}`);
  };
};

const updateTalent = async (req, res) => {
  const _id = req.params.id;

  if (!req.body) {
    return res.status(400).send({
      message: 'No data to be updated.',
    });
  };

  try{
    await TalentsModel.findOneAndUpdate(
      {_id},
      req.body,
      {useFindAndModify: false, new: true}
    );
    res.send(
      `Successfully updated register.
      `);
  }

  catch(err){
    res.status(500).send(`An error occurred: ${err.message}`);
  };
};

const deleteTalent = async (req, res) => {
  const _id = req.params.id;

  try{
    await TalentsModel.findByIdAndDelete({_id});
    res.send(true);
  }
  catch(err){
    res.status(500).send(`An error occurred: ${err.message}`);
  };
};

const removeAll = async (req, res) => {
  try {
    await TalentsModel.remove({})
    res.send(true);
  } 
  catch (error) {
    res.status(500).send({ message: `An error occurred: ${err.message}` });
  }
};




export {
  getAll, 
  getById, 
  insertTalent, 
  updateTalent, 
  deleteTalent,
  removeAll 
};
