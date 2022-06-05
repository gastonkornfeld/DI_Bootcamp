-- 1- Write a query to display the names 
-- (first_name, last_name) using an alias name “First Name”, “Last Name” from the employee table.

SELECT first_name as "First Name", last_name as "Last Name" from public.employees

-- 2- Write a query to get unique departments 
-- ID from the employee table (ie. without duplicates).


SELECt DISTINCT department_id FROM public.employees;

--3- Write a query to get the details of all employees from the employee table
-- , do so in descending order by first name.


SELECT * FROM employees ORDER BY first_name DESC;


--4-  Write a query to get the names (first_name, last_name), 
-- salary and 15% of salary as PF (ie. alias) for all the employees.


SELECT first_name, last_name, salary,  salary * 0.15 as PF FROM employees;


--5- Write a query to get the employee IDs, names (first_name, last_name) 
-- and salary in ascending order 
-- according to their salary.

Select first_name, last_name, employee_id, salary FROM employees ORDER BY salary;


--6- Write a query to get the total sum of all salaries paid to the employees.

SELECT sum(salary) as "Total Salaries" from employees;

--7 Write a query to get the maximum and minimum salaries paid to the employees.

SELECT max(salary) as "Max Salary", min(salary) as "Min Salary" from employees;


--8 Write a query to get the average salary paid to the employees.

SELECT AVG(salary) as "Average Salary" from employees;

--9 Write a query to get the number of employees working in the company.

Select count(*) FROM employees;



--10 Write a query to get all the first names from the employees table in upper case.

SELECT UPPER(first_name) 
   FROM employees;
   
   
--   11Write a query to get the first three characters of each first name of all
--    the employees in the employees table.\

SELECT SUBSTRING(first_name,1,3)
     FROM employees;
	 
	 
	 
-- 12 Write a query to get the full names of all the employees in the employees
-- table. You have to include
-- the first name and last name.

SELECT first_name || ' ' || last_name as "Full Name" from employees;



-- 13 Write a query to get the first name, last name and the length of the full name of all 
-- the employees from the employees table.

SELECT first_name, last_name, LENGTH(first_name)+LENGTH(last_name) as "Length of  Name"
FROM employees;



-- 14 Write a query to check whether the first_name column of the employees
-- table contains any numbers.


SELECT first_name FROM employees WHERE first_name ILIKE '%[0-9]%';


-- 15 Write a query to select the first ten records from a table.


SELECT * FROM employees LIMIT 10;


--16 Write a query to display the first_name, last_name 
-- and salary of all employees whose salary 
-- is between $10,000 and $15,000.

SELECT first_name, last_name, salary FROM employees WHERE salary BETWEEN 10000 AND 15000;


--17 Write a query to display the first_name, last_name and hire date of all
-- employees who were hired in 1987.


SELECT first_name, last_name, hire_date
from employees
WHERE hire_date BETWEEN '1987-01-01' AND '1987-12-31';



--18 Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.


SELECT * FROM employees WHERE first_name ILIKE '%c%' OR first_name ILIKE '%e%';



--19 Write a query to display the last_name, job, and salary of all the employees who don’t
-- work as Programmers or Shipping Clerks, and who don’t receive a salary equal 
-- to $4,500, $10,000, or $15,000.


SELECT employees.last_name, employees.salary, jobs.job_title FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id
WHERE jobs.job_title NOT IN ('Programmer', 'Shipping Clerk')
AND employees.salary NOT IN (4500, 10000, 15000); 


--20 Write a query to display the last names of all employees whose
-- last name contains exactly six characters.

SELECT last_name FROM employees WHERE last_name LIKE '______';

--21 Write a query to display the last name of all employees who have the 
-- letter ‘e’ as the third character in the name.

SELECT last_name FROM employees WHERE last_name LIKE '__e%';


--22 Write a query to display the jobs title appearing in the employees table.

SELECT jobs.job_title FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id;

--23 Write a query to select all information of employees whose last name is either 
-- ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.

SELECT * FROM employees
WHERE last_name IN ('Jones', 'Blake', 'Scott', 'King', 'Ford');