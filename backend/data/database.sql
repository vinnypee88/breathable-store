CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    price INTEGER NOT NULL,
    stock_count INTEGER NOT NULL, 
    image_url VARCHAR(200) NOT NULL
);

CREATE TABLE orders (
    id VARCHAR(100) NOT NULL PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_first_name VARCHAR(50) NOT NULL,
    customer_last_name VARCHAR(50) NOT NULL,
    shipping_line_1 VARCHAR(100) NOT NULL,
    shipping_line_2 VARCHAR(100),
    postcode VARCHAR(12),
    order_total FLOAT NOT NULL,
    discount FLOAT(20)
);

CREATE TABLE order_items (
    order_id VARCHAR(100) NOT NULL,
    product_id VARCHAR(10) NOT NULL,
    quantity INTEGER NOT NULL,
    price FLOAT NOT NULL
);
CREATE TABLE users (
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address_line_1 VARCHAR(100) NOT NULL,
    address_line_2 VARCHAR(100),
    postcode VARCHAR(12)
);