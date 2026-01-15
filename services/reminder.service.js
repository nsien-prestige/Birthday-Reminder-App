const { birthdayInputSchema } = require('../validators/reminderInput.validator')
const DataModel = require('../models/schema');

const createReminderEntry = async (username, DOB, email) => {

    // Validate input using JOI schema
    const { error } = birthdayInputSchema.validate({ username, DOB, email });

    if (error) {
        throw new Error(`Validation error: ${error.details[0].message}`);
    }

    if (new Date(DOB) > new Date()) {
        throw new Error('Date of Birth cannot be in the future');
    }
    
    const emailExists = await DataModel.findOne({ email });

    if (emailExists) {
        throw new Error('A reminder with this email already exists.');
    }

    const newEntry = new DataModel({ username, DOB, email });
    await newEntry.save();

    return newEntry;
}

module.exports = { createReminderEntry };