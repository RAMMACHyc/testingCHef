const bcrypt = require('bcrypt');
const {chefIdSchema,chefSchema,validateChefData} = require('../validator/joi')
const {Chef,User} = require('../models')
const getAllChefs = async (req, res) => {
  try {
    const chefs = await Chef.findAll({
      include: [
        {
          model: User
        }
      ]
    });

    res.json({ chefs });
  } catch (error) {
    console.error('Error fetching chefs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOneById = async (req, res) => {
  const { error } = chefIdSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ error: 'Invalid chef ' });
  }

  const chefId = req.params.id;

  try {
    const chef = await Chef.findOne({
      where: { id: chefId },
      include: [
        {
          model: User
        }
      ]
    });

    if (!chef) {
      return res.status(404).json({ error: 'Chef not found' });
    }

    res.json({ chef });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the chef.' });
  }
};

const createChef = async (req, res) => {
  try {
    const { error, value } = validateChefData(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, password, first_name, last_name, picture, role } = value;
    const { grade, status } = req.body;  
    
    if (!password) {
      return res.status(400).json({ error: 'Password is required.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = await User.create({
      email,
      password: hashedPassword,
      first_name,
      last_name,
      picture,  
      role
     });
    const newChef = await Chef.create({
      grade, 
      status,
      userId: user.id 
    });

    res.json({ chef: newChef, user });
  } catch (error) {
    console.error('Error during chef creation:', error);
    res.status(500).json({ error: 'An error occurred while creating the chef.' });
  }
};


const updateChef = async (req, res) => {
  const chefId = req.params.id;
  const { error, value } = chefSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const chef = await Chef.findByPk(chefId);

    if (!chef) {
      return res.status(404).json({ error: 'Chef not found' });
    }

    const updatedChef = await chef.update({
      grade: value.grade,
      status: value.status
    });

    const user = await User.findByPk(chef.userId);

    if (!user) {
      console.error('Associated user not found for chef ID:', chefId);
    } else {
      const { email, password, first_name, last_name, picture, role } = value;
      if (!password) {
        return res.status(400).json({ error: 'Password is required.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await user.update({
        email,
        password: hashedPassword,
        first_name,
        last_name,
        picture,
        role
      });
    }

    res.json({ chef: updatedChef, user });
  } catch (error) {
    console.error('Error updating chef and associated user:', error);
    res.status(500).json({ error: 'An error occurred while updating the chef and user.' });
  }
};




  const validateChefId = (data) => {
    return chefIdSchema.validate(data);
  };
  
  const deleteChef = async (req, res) => {
    const { error, value } = validateChefId(req.params);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    const chefId = value.id;
  
    try {
      const chef = await Chef.findByPk(chefId);
  
      if (!chef) {
        return res.status(404).json({ error: 'Chef not found' });
      }
      await Chef.destroy({ where: { id: chefId } });
  
      res.json({ message: 'Chef deleted successfully' });
    } catch (error) {
      console.error('Error deleting chef:', error);
      res.status(500).json({ error: 'An error occurred while deleting the chef.' });
    }
  };
  
  module.exports = {
    createChef,
    getAllChefs,
    getOneById,
    updateChef,
    deleteChef
  };
