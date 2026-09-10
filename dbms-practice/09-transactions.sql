-- Start transaction and rollback
START TRANSACTION;

INSERT INTO courses
VALUES (2, 'Java', 4);

ROLLBACK;

SELECT *
FROM courses;


-- Start transaction and commit
START TRANSACTION;

INSERT INTO courses
VALUES (3, 'SQL', 3);

COMMIT;

SELECT *
FROM courses;