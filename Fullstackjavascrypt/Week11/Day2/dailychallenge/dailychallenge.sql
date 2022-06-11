
-- 1 - Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false
-- (a Boolean), customer_id (a reference to the Customer table)



-- CREATE TABLE customer (
--  	customer_id SERIAL,
--  	first_name VARCHAR(45) NOT NULL,
-- 	last_name VARCHAR(45) NOT NULL,
--   	PRIMARY KEY (customer_id)
-- );



-- CREATE TABLE customer_profile (
-- 	customer_id INTEGER NOT NULL,
-- 	is_logged_in BOOLEAN DEFAULT true,
-- 	PRIMARY KEY (customer_id),
-- 	CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
-- );


-- 2 -  Insert these customers
-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

-- Insert INTO customer (first_name, last_name) Values ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

-- 3.Insert those customer profiles, use subqueries

-- a - John is loggedIn
-- Insert Into customer_profile Values ((select customer_id from customer where first_name = 'John'));

-- b - Jerome is not logged in

-- Insert Into customer_profile Values ((select customer_id from customer where first_name = 'Jerome'), false);



--4 Use the relevant types of Joins to display:
-- a - The first_name of the LoggedIn customers
SELECT customer.first_name from customer_profile
INNER JOIN customer
ON customer.customer_id = customer_profile.customer_id
WHERE customer_profile.is_logged_in = true;

-- b - All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT customer.first_name, customer_profile.is_logged_in FROM customer
LEFT JOIN customer_profile
ON customer_profile.customer_id = customer.customer_id;

-- c - The number of customers that are not LoggedIn

SELECT count(*) FROM customer
LEFT JOIN customer_profile
ON customer_profile.customer_id = customer.customer_id
WHERE customer_profile.is_logged_in = false OR customer_profile.is_logged_in IS NULL;


-- PArt II
-- 1 Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

-- CREATE TABLE book (
--  	book_id SERIAL,
--  	title VARCHAR(45) NOT NULL,
-- 	author VARCHAR(45) NOT NULL,
--   	PRIMARY KEY (book_id)
-- );



-- 2 Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee


-- INSERT INTO book (title, author) VALUES ('Alice in wonderland', 'Lewis Carrol'), 
-- 	('Harry Potter', 'J.K.Rowling'), ('To Kill a mockingbird', 'Harper Lee');



-- 3 Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age.
-- Make sure that the age is never bigger than 15 (Find an SQL method);



--  CREATE TABLE student (
-- 	student_id SERIAL,
-- 	student_name VARCHAR(45) NOT NULL UNIQUE,
-- 	age INTEGER NOT NULL CHECK(age BETWEEN 0 AND 15), 
-- 	PRIMARY KEY (student_id)
-- );



--4 Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14


-- INSERT INTO student (student_name, age) VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14);




--5 Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables 
-- : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table


-- create table library (
-- 	book_fk_id int not null references book(book_id) on delete cascade on update cascade,
-- 	student_id int not null references student(student_id) on delete cascade on update cascade,
-- 	borrowed_date date not null
-- );


--6 Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

-- INSERT INTO library VALUES(
-- 	(select book_id from book where title = 'Alice in wonderland'),
-- 	(select student_id from student where student_name = 'John'),
-- 	('2022-02-15')
-- );

-- INSERT INTO library VALUES(
-- 	(select book_id from book where title = 'To Kill a mockingbird'),
-- 	(select student_id from student where student_name = 'Bob'),
-- 	('2021-03-03')
-- );

-- INSERT INTO library VALUES(
--  	(select book_id from book where title = 'Alice in wonderland'),
--  	(select student_id from student where student_name = 'Lera'),
--  	('2021-05-23')
-- );


-- INSERT INTO library VALUES(
--  	(select book_id from book where title = 'Harry Potter'),
--  	(select student_id from student where student_name = 'Bob'),
--  	('2021-12-08')
-- );



-- Display the data
-- a Select all the columns from the junction table

Select * from library;

--b  Select the name of the student and the title of the borrowed books
select student.student_name, book.title from student
INNER JOIN library
ON library.student_id = student.student_id
INNER JOIN book
ON library.book_fk_id = book.book_id;

--c  Select the average age of the children, that borrowed the book Alice in Wonderland

select AVG(student.age) from student
INNER JOIN library
ON library.student_id = student.student_id
INNER JOIN book
ON library.book_fk_id = book.book_id
WHERE book.title = 'Alice in wonderland';


--d  Delete a student from the Student table, what happened in the junction table ?

delete from student where student_id = 1;

-- All of the entryes in the junction table where the student)id was 1 where deleted.
