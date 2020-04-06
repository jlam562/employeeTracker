const prompt = require('inquirer').createPromptModule()
const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Suger511!',
  database: 'empTracker_db'
})

function getEmployees() {
  db.query(`
  SELECT employee.id,
  employee.first_name,
  employee.last_name,
  employee.role_id,
  employee.manager_id
  FROM employee`),
  if (err) throw err
  console.log(getEmployees)

  function getDepartments() {
    db.query(`SELECT * FROM department`)
    if (err) throw err
    console.log(getDepartments)
  }

  function getRoles() {
    db.query(`SELECT * FROM roles`)
    if (err) throw err
    console.log(roles)
  }

  function addEmployee() {
    prompt([
      {
        type: 'input',
        name: 'empFirstName',
        message: "What is the employee's first name?:"
      },
      {
        type: 'input',
        name: 'empLastName',
        message: "What is the employee's last name?:"
      },
      {
        type: 'input',
        name: 'empRole',
        message: 'What is their employee role ID#?:'
      },
      {
        type: 'input',
        name: 'empManager'
      message: "Who is their manager?:"
      }
    ])
      .then(({ empFirstName, empLastName, empRole, empManager }) => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES`)
      })
    if (err) throw err
    console.log('New Employee Added!')
  }
.catch (e => console.error(e))

  function updateEmployee() {
    db.query(`SELECT first_name FROM employee`)
  }
  if (err) throw err
  prompt([
    {
      type: 'list',
      name: 'empName',
      message: 'Which employee did you want to update?:'
    }
  ])
    .then(response => {
    .catch (e => console.error(e))
})
}

function addDepartment() {
  prompt([
    {
      type: 'input',
      name: 'newDepartment',
      message: 'What department is this?:'
    }
  ])
    .then(({ newDepartment }) => {
      db.query(`INSERT INTO department (name) VALUES`)
      if (err) throw err
      console.log('Department Created!')
    })
    .catch(e => console.error(e))
}

function addRole() {
  prompt([
    {
      type: 'input',
      name: 'newRole',
      message: 'Which role is this for?:'
    },
    {
      type: 'input',
      name: 'newSalary',
      message: 'How much is the salary for this role?:'
    }
  ])
    .then(({ newRole, newSalary }) => {
      db.query(`INSERT INTO role (name, salary) VALUES`)
      if (err) throw err
      console.log('Role Created!')
    })
    .catch(e => console.error(e))
}