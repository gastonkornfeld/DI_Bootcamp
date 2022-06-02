-- exercise 1

SELECT * FROM items ORDER BY price;
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
SELECT first_name, last_name FROM costumers ORDER BY first_name LIMIT 3;
SELECT last_name FROM costumer ORDER BY last_name DESC;

-- exercise 2 dvd rental database.

-- 1 query

SELECT * FROM customer;

-- 2 QUERY

SELECT first_name || ' ' || last_name AS full_name FROM customer;

--  3 query

SELECT DISTINCT create_date from customer;

--  4 query

SELECT * FROM customer ORDER BY first_name DESC;

-- 5 query

SELECT film_id, title, description, release_year, rental_rate FROM film
ORDER BY rental_rate;

-- 6 query

SELECT address, phone from public.address WHERE district = 'Texas';

-- 7 query

SELECT * FROM film WHERE film_id = 15 OR film_id = 150;

-- 8 query

SELECT film_id, title, description, length, rental_rate FROM film
WHERE title = 'El secreto de sus ojos';

-- 9 query


SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'El%';


-- 10 query Write a query which will find the 10 cheapest movies.

SELECT * FROM film ORDER BY rental_rate LIMIT 10;

-- 11 Not satisfied with the results. Write a query which will find the next 10 cheapest movies.

SELECT * FROM film ORDER BY rental_rate OFFSET 10 LIMIT 10;

-- 12 Write a query which will join the data in the customer table and the
-- payment table. You want to get the amount and the date of 
-- every payment made by a customer, ordered by their id (from 1 to…).

SELECT customer.customer_id, payment.amount, payment.payment_date FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;


--  13 You need to check your inventory. 
-- Write a query to get all the movies which are not in inventory.


SELECT film.film_id, title FROM film
LEFT JOIN inventory
ON inventory.film_id = film.film_id
WHERE inventory.film_id IS NULL
ORDER BY title;


-- 14 Write a query to find which city is in which country.
SELECT city.city, country.country FROM city JOIN country ON city.country_id = country.country_id;


-- 15 Bonus You want to be able to see how your sellers have been doing? 
-- Write a query to get the customer’s id, names (first and last), 
-- the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
SELECT staff_id, customer.customer_id, customer.first_name || ' ' || customer.last_name AS full_name, amount, payment_date
FROM customer INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY staff_id;

