
-- Q1. What will be the OUTPUT of the following statement?

SELECT COUNT(*)
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
-- 	first will select all the id from second tab that are null.
-- second will check if  firsttab.id is not in NULL
-- then will count this results so i guess will be 3
-- returned 0 so i am nos shure why. 



-- Q2. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

select * from FirstTab WHERE FirstTab.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

-- same thinking first will check for id number 5 in secontab
-- second will check the elements of firsttab that are not id 5. and the count how many.
-- so again i think there is 3
-- Result is 2 i guess is the id is null is not a result of the count.




-- Q3. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );

-- here the output will be 2 again
-- but i am gettin 0 as an output.






-- Q4. What will be the OUTPUT of the following statement?

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );

-- output will be 2
-- output is 2

