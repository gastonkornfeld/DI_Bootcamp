
--1 Get a list of all film languages.


SELECT film.title, language.name from film
INNER JOIN language
ON film.language_id = language.language_id
ORDER BY film.title;

--2 Get a list of all films joined with their languages – select the 
-- following details : film title, description, and language name.
-- Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.

SELECT film.title, film.description,  language.name from film
LEFT JOIN language
ON film.language_id = language.language_id
ORDER BY film.title;

SELECT film.title, film.description,  language.name from film
RIGHT JOIN language
ON film.language_id = language.language_id
ORDER BY film.title;

--3 Create a new table called new_film with the following columns :
-- id, name. Add some new films to the table.

-- CREATE TABLE new_film(
-- 	film_id SERIAL PRIMARY KEY,
-- 	film_name VARCHAR (50) NOT NULL
-- );

-- INSERT INTO new_film VALUES (1, 'film 1'), (2, 'film 2'), (3, 'film 3'), (4, 'film 4');


--4 Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.


-- CREATE TABLE customer_review (
--   	review_id SERIAL,
--   	review_content VARCHAR(200) NOT NULL,
--   	score INTEGER NOT NULL,
-- 	title VARCHAR(50) NOT NULL,
-- 	film_id INTEGER NOT NULL,
-- 	language_id INTEGER NOT NULL,
-- 	creation_date DATE DEFAULT CURRENT_TIMESTAMP,
--   	PRIMARY KEY (review_id),
--   	FOREIGN KEY (film_id) REFERENCES new_film(film_id) ON DELETE CASCADE,
--   	FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
-- );


--5 Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- INsert into customer_review values (4, 'This is second a movie review', 7, 'Movie review', 4, 1),
(3, 'This is second a movie review', 8, 'Movie review', 3, 1);


--6 Delete a film that has a review from the new_film table, what happens to the customer_review table?

DELETE FROM new_film WHERE film_id = 1;


-- The reviews linked to the film erased where erased also because of the cascade effect on delete.







--  dvd rental part 2

--1 Use UPDATE to change the language of some films. Make sure that you use valid languages.

UPDATE film
SET language_id = 3
WHERE film_id = 2;

UPDATE film
SET language_id = 4
WHERE film_id = 3;


--2 Which foreign keys (references) are defined for the customer table?
-- How does this affect the way in which we INSERT into the customer table?

-- store_id and address_id are foreign keys in to the customer table.
-- We need to insert the id of an object referenced and not raw data. 


-- 3 We created a new table called customer_review.
-- Drop this table. Is this an easy step, or does it need extra checking?

drop table customer_review;

-- it is an easy step because there is not data refered to this table is the oposite.


--4 Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

select count(*) from rental where return_date IS NULL;

--5 Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

select film.title, film.rental_rate, rental.return_date, rental.inventory_id, inventory.film_id from rental
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;




--6 Your friend is at the store, and decides to rent a movie.
-- He knows he wants to see 4 movies, but he can’t remember their names.
-- Can you help him find which movies he wants to rent?

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.


INNER JOIN film
ON film.film_id = film_actor.film_id
WHERE film_actor.actor_id = 120 and film.description ILIKE '%sumo%';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

select * from film WHERE rating = 'R' AND length < 60 AND description ILIKE '%documentary%';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental,
-- and he returned it between the 28th of July and the 1st of August, 2005.


select film.title, rental.rental_date, rental.return_date, rental.customer_id, customer.first_name, customer.last_name, film.rental_rate from film
INNER JOIN inventory 
ON film.film_id = inventory.film_id
inner join rental
on inventory.inventory_id = rental.inventory_id
INNER JOIN customer
ON rental.customer_id = customer.customer_id
where customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND film.rental_rate >= 4
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';


-- The 4th film : His friend Matthew Mahan watched this film, as well.
-- It had the word “boat” in the title or description,
-- and it looked like it was a very expensive DVD to replace.


select film.title, film.replacement_cost, rental.customer_id, customer.first_name, customer.last_name, film.rental_rate  from film
INNER JOIN inventory 
ON film.film_id = inventory.film_id
inner join rental
on inventory.inventory_id = rental.inventory_id
INNER JOIN customer
ON rental.customer_id = customer.customer_id
where customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND film.description ILIKE '%boat%'
order By film.replacement_cost DESC
LIMIT 1;