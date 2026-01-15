const cron = require('node-cron');
const DataModel = require('../models/schema');
const { sendReminderEmail } = require('./email.service');

const CheckReminders = () => {
    cron.schedule('0 7 * * *', async () => {
        console.log('Cron is live');
        
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth(); 

        console.log(`Checking for birthdays on ${day}-${month + 1}`);
        
        const remindersToSend = await DataModel.find()

        console.log(`📦 Records found: ${remindersToSend.length}`);

        if (!Array.isArray(remindersToSend) || remindersToSend.length === 0) {
            console.log('No birthdays today 🎂');
            return;
        }

        for (const person of remindersToSend) {
            const dob = new Date(person.DOB);
            

            if (dob.getDate() === day && dob.getMonth() === month) {

                await sendReminderEmail(person.email, person.username);
                console.log(`Reminder email successfully  sent to ${person.username} at ${person.email}`);
            }
        }
    });
}

module.exports = { CheckReminders };