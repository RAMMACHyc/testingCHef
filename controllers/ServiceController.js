const bcrypt = require('bcrypt');
const {serviceSchema,validateServiceData,serviceSchemaId,validateServiceId} = require('../validator/joi')
const Service = require('../models/Service')

const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();

    res.json({ services });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const createService = async (req, res) => {
  try {
    const { error, value } = validateServiceData(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const {nom,  description} = value;

  
    const service = await Service.create({
    nom,
    description
     
     });
 

    res.json({ service });
  } catch (error) {
    console.error('Error during service creation:', error);
    res.status(500).json({ error: 'An error occurred while creating the service.' });
  }
};


const updateService = async (req, res) => {
  const serviceId = req.params.id;
  const { error, value } = serviceSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const service = await Service.findByPk(serviceId);

    if (!service) {
      return res.status(404).json({ error: 'service not found' });
    }
    const {nom,  description} = value;
    const updatedService = await Service.update({
      nom,
      description
    });


    res.json({ updatedService });
  } catch (error) {
    console.error('Error updating service', error);
    res.status(500).json({ error: 'An error occurred while updating the service.' });
  }
};





  
  const deleteService = async (req, res) => {
    const { error, value } = validateServiceId(req.params);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    const ServiceId = value.id;
  
    try {
      const service = await Service.findByPk(ServiceId);
  
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      await Service.destroy({ where: { id: ServiceId } });
  
      res.json({ message: 'Service deleted successfully' });
    } catch (error) {
      console.error('Error deleting service:', error);
      res.status(500).json({ error: 'An error occurred while deleting the service.' });
    }
  };
  
  module.exports = {
    createService,
    getAllServices,
    updateService,
    deleteService
  };
