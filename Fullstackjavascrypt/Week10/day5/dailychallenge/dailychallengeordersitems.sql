



-- CREATE TABLE orders (
--   order_id SERIAL,
--   PRIMARY KEY (order_id)
-- );

-- /*
--  one to many: An order have many items
-- */

-- CREATE TABLE item (
--   item_id SERIAL,
--   item_name VARCHAR(45) NOT NULL,
--   item_price INTEGER NOT NULL,	
--   order_id INTEGER NOT NULL,
--   PRIMARY KEY (item_id),
--   FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
-- );

-- INSERT INTO orders Values (1), (2);


-- INSERT INTO item VALUES (1, 'Hammer', 300, 1), (2, 'Fun', 50, 1), (3, 'Rocket', 200, 2); 
-- INSERT INTO item VALUES (4, 'Ladder', 300, 1), (5, 'Joystick', 450, 1), (6, 'Diamond', 1200, 2); 

SELECT * FROM item;
SELECT * FROM orders;


SELECT orders.order_id, item_name, item_price FROM item
INNER JOIN orders
ON item.order_id = orders.order_id
ORDER BY orders.order_id;