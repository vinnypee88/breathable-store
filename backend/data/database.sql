CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    price INTEGER NOT NULL,
    stock_count INTEGER NOT NULL, 
    image_url VARCHAR(200) NOT NULL
);

