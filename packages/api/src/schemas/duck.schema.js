const Joi = require('joi');

const duckSchema = Joi.object({
  id: Joi.string().alphanum(),
  _id: Joi.string().alphanum(),
  datetime: Joi.date().iso(),
  food: Joi.string().min(3).max(120),
  location: Joi.string().min(3).max(255),
  quantity: Joi.number().min(1),
  foodType: Joi.string().min(3).max(120),
  amount: Joi.number().min(1),
}).options({ abortEarly: false });

module.exports = duckSchema;
