const userService = require('../services/userService')

const createUser = async (req,res)=>{
    try{
        const user = await userService.createUser(req.body)
        res.status(201).json(user)
    }catch(err){
        console.error(err)
        res.status(500).json({error:"internal server error."})
    }
}

const getAllUsers = async (req,res)=>{
    try{
        const users = await userService.getAllUsers()
        re.status(200).json(users)
    }catch(err){
        console.error(err)
        res.status(500).json({error:"Internal server error."})
    }
}

const getUserById = async (req,res)=>{
    try{
        const user = await userService.getUserById(req.params.id)
        if(!user){
            return res.status(404).json({error:"usuario nao encontrado."})
        }
        res.status(200).json(user)
    }catch (err){
        console.error(err)
        res.status(500).json({error:"Usuaio nao encontrado."})
    }
}

const updateUser = async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteUser = async (req, res) => {
    try {
      const user = await userService.deleteUser(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
      res.status(200).json({ message: 'Usuário deletado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
  };