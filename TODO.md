# BirthDay Reminder App - TODO

## Setup
- Initialze project structure
- Install dependencies needed
- Set up Express Server
- Connect MongoDB database

## Models
- Schema containing fields like name, DOB, emails
- Export properly

## Controllers
- Get input fields from the body
- Return necessary values
- Handle errors properly

## Services
- Validate User input
- Ensure that users DOB is not greater than the present date
- Save users data to the DB 

## UI 
- Create form inputs for users
- Handle from submission properly
- Snitize user inputs
- Display success / error messages in a stylish format

## Email
- Research email service options
- Configure email transport
- Design birthday email template
- Ensure emails are unique

## Cron Job
- Download dependencies (node-cron for example)
- Schedule daily job at 7am UTC
- Query database for today’s birthdays
- Trigger email sending logic

## Testing & Cleanup
- Test cron job locally
- Test email delivery
- Handle edge cases
