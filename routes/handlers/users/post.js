const {User} = require("../../../models");

//Create a user data
module.exports = async (req, res) => {
    const body = req.body;
  
    if(!body.name || !body.email) 
    return res.status(400).json({message: "name and email must be provided" });
  
    const user =  await User.create(body);
  
  return res.json(user);
  
  };