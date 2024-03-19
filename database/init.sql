-- Initialize the DB with Contact Table Schema 
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL,
    address TEXT
);
