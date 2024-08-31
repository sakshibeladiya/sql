const Joi = require("joi");

const userValidateSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.required(),
});

module.exports = userValidateSchema;
