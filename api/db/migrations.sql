CREATE DATABASE weather;

\c weather

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(32),
	password_digest VARCHAR(60)
);

CREATE TABLE citys(
	id SERIAL PRIMARY KEY,
	cityname VARCHAR(255),
	countrycode VARCHAR(10),
	user_id INT REFERENCES users(id)
);