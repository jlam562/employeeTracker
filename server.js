const prompt = require('inquirer').createPromptModule()
const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Suger511!',
  database: 'empTracker_db'
})