CREATE DATABASE Adwhere;

-- Login table
CREATE TABLE Login (
    id INT (11) AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user VARCHAR(255) NOT NULL
);

-- Registration table
CREATE TABLE Registration (
    id INT (11) AUTO_INCREMENT PRIMARY KEY,
    business_name VARCHAR(255) NOT NULL,
    client_name VARCHAR(100) NOT NULL,
    client_surname VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    gender ENUM('M', 'F', 'O') NOT NULL,
    city VARCHAR(100) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    province VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user VARCHAR(255) NOT NULL
);