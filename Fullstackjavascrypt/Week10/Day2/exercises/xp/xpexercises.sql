CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	article_name VARCHAR (50) NOT NULL,
	price INTEGER NOT NULL
);
CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL
)

INSERT INTO public.items VALUES (1, 'small desk', 100), (2, 'Large Desk', 300), (3, 'Fan', 80);


INSERT INTO public.costumers VALUES(1, 'Greg', 'Jones'), (2, 'Sandra', 'Jones'), (3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'), (5, 'Melanie', 'Jphnson');

SELECT * FROM items;

SELECT * FROM items WHERE price > 80;
SELECT * FROM items WHERE price <= 300;

SELECT * FROM costumers WHERE last_name = 'Smith';
SELECT * FROM costumers WHERE last_name = 'Jones';
SELECT * FROM costumers WHERE NOT first_name = 'Scott';




