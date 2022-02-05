const Joi = require('joi');

const custumerSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required()
})

module.exports = {
    custumerSchema,
}