USE empTracker_db;

INSERT INTO department (department_name) VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal')

INSERT INTO `role` (title, salary, deparment_id) VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Doe', 2, NULL),
('Jim', 'Halpert', 3, NULL),
('Dwight', 'Schrute', 4, NULL),
('Michael', 'Scott', 5, 1)