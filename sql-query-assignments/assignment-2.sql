USE sakila;

-- Q1. Find the number of Documentary movies having Deleted Scenes
SELECT COUNT(*) AS movie_count
FROM film f
JOIN film_category fc
    ON f.film_id = fc.film_id
JOIN category c
    ON fc.category_id = c.category_id
WHERE c.name = 'Documentary'
AND f.special_features LIKE '%Deleted Scenes%';


-- Q2. Find the number of Sci-Fi movies rented by the store managed by Jon Stephens
SELECT COUNT(DISTINCT f.film_id) AS movie_count
FROM staff s
JOIN store st
    ON s.store_id = st.store_id
JOIN inventory i
    ON st.store_id = i.store_id
JOIN film f
    ON i.film_id = f.film_id
JOIN film_category fc
    ON f.film_id = fc.film_id
JOIN category c
    ON fc.category_id = c.category_id
JOIN rental r
    ON i.inventory_id = r.inventory_id
WHERE s.first_name = 'Jon'
AND s.last_name = 'Stephens'
AND c.name = 'Sci-Fi';


-- Q3. Find the total sales from Animation movies
SELECT SUM(p.amount) AS total_sales
FROM payment p
JOIN rental r
    ON p.rental_id = r.rental_id
JOIN inventory i
    ON r.inventory_id = i.inventory_id
JOIN film f
    ON i.film_id = f.film_id
JOIN film_category fc
    ON f.film_id = fc.film_id
JOIN category c
    ON fc.category_id = c.category_id
WHERE c.name = 'Animation';


-- Q4. Find the top 3 most rented categories by Patricia Johnson
SELECT
    cat.name AS category,
    COUNT(r.rental_id) AS rental_count
FROM customer c
JOIN rental r
    ON c.customer_id = r.customer_id
JOIN inventory i
    ON r.inventory_id = i.inventory_id
JOIN film f
    ON i.film_id = f.film_id
JOIN film_category fc
    ON f.film_id = fc.film_id
JOIN category cat
    ON fc.category_id = cat.category_id
WHERE c.first_name = 'PATRICIA'
AND c.last_name = 'JOHNSON'
GROUP BY cat.category_id, cat.name
ORDER BY rental_count DESC
LIMIT 3;


-- Q5. Find the number of R-rated movies rented by Susan Wilson
SELECT COUNT(DISTINCT f.film_id) AS movie_count
FROM customer c
JOIN rental r
    ON c.customer_id = r.customer_id
JOIN inventory i
    ON r.inventory_id = i.inventory_id
JOIN film f
    ON i.film_id = f.film_id
WHERE c.first_name = 'SUSAN'
AND c.last_name = 'WILSON'
AND f.rating = 'R';