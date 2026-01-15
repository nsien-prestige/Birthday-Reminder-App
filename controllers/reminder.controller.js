const { createReminderEntry } = require('../services/reminder.service');
const addReminder = async (req, res) => {
    try {
        const { username, DOB, email } = req.body;

        // Basic validation
        if (!username || !DOB || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newBirthday = await createReminderEntry(username, DOB, email);

        res.status(201).json({
            message: 'Birthday entry added successfully!',
            _id: newBirthday._id,
            username: newBirthday.username,
            DOB: newBirthday.DOB,
            email: newBirthday.email
        });

    } catch (err) {
        console.error('Error in addReminder:', err);

        res.status(400).json({ error: err.message || ' Internal Server Error' });
    }
    
}

module.exports = { addReminder };