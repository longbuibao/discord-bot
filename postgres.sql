-- Database: postgres

-- DROP DATABASE IF EXISTS postgres;

CREATE DATABASE postgres
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE postgres
    IS 'default administrative connection database';

CREATE TABLE cities (
	name VARCHAR(50),
	country VARCHAR(50),
	population INTEGER,
	area INTEGER
);

INSERT INTO cities (name, country, population, area)
VALUES ('Delhi', 'India', 28125000, 2240), ('Shanghai', 'China', 22125000, 4015), ('Sao Paulo', 'Brazil', 20935000, 3043);

SELECT * FROM cities;

SELECT name, population/area AS population_density FROM cities;

SELECT CONCAT(name, ', ', UPPER(country)) AS city_country FROM cities;

SELECT name, area FROM cities WHERE area > 4000;

SELECT * FROM cities WHERE area != 8223;

SELECT name, area FROM cities WHERE name IN (SELECT name FROM cities);

UPDATE cities SET population=39505000 WHERE name='Tokyo';

DELETE FROM cities WHERE name='Tokyo';
INSERT INTO cities (name, country, population, area)
	VALUES ('Tokyo', 'Japan', 38505000, 8223)






















