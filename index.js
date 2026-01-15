const app = require('./app');
const { connectDB } = require('./db');
const { CheckReminders } = require('./services/reminderCron.service');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
CheckReminders();