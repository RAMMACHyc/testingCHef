const Joi = require('joi');

const succursaleSchema = Joi.object({
    name: Joi.string().required(),
    // picture: Joi.,
    address: Joi.string().required(),
    phone: Joi.number().required(),
    succursale_start: Joi.date().required(),
    succursale_end: Joi.date().required()
})

const validator = (schema, data) =>{
    const {error} = schema.validate(data,{
        abortEarly: false
    })
    console.log(error);
    if(error){
        const errs = error.details.map((detail)=>detail.message)
        return errs;
    }
}


const chefIdSchema = Joi.object({
    id: Joi.number().integer().positive().required()
  });
  const chefSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    first_name: Joi.string().alphanum().min(3).max(30).required(),
    last_name: Joi.string().alphanum().min(3).max(30).required(),
    picture: Joi.string().required(),
    grade: Joi.string().required(),
    status: Joi.boolean().required(),
    role: Joi.string().required(),
    nom: Joi.string().alphanum().min(3).max(30).required(),
    decription: Joi.string().required()


  });
  const validateChefData = (data) => {
    return chefSchema.validate(data);
  };


  const serviceSchema = Joi.object({
    nom: Joi.string().alphanum().min(3).max(30).required(),
    description: Joi.string().required()


  });
  const validateServiceData = (data) => {
    return serviceSchema.validate(data);
  };

  const serviceSchemaId = Joi.object({
    id: Joi.number().integer().positive().required()
  });
  const validateServiceId = (data) => {
    return serviceSchemaId.validate(data);
  };

module.exports = {succursaleSchema, validator,chefIdSchema,chefSchema,validateChefData,serviceSchema,validateServiceData,serviceSchemaId,validateServiceId}

