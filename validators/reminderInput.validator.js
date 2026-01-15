const JOI = require("joi");

const birthdayInputSchema = JOI.object({
    username: JOI.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.alphanum': 'Username must only contain alphanumeric characters',
            'string.min': 'Username must be at least 3 characters long',
            'string.max': 'Username must be at most 30 characters long'
        }),
    DOB: JOI.date()
        .iso()
        .required()
        .messages({
            'date.base': 'Invalid date format'
        }),
    email: JOI.string()
        .email()
        .required()
        .messages({
            'string.email': 'Invalid email format',
            'any.required': 'Email is required'
        })
})

module.exports = { birthdayInputSchema };