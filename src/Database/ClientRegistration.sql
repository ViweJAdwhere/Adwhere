CREATE DATABASE IF NOT EXISTS client_registration;
USE client_registration;

-- Clients table
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    business_name VARCHAR(255) NOT NULL,
    client_name VARCHAR(100) NOT NULL,
    client_surname VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    gender ENUM('M', 'F', 'O') NOT NULL,
    city VARCHAR(100) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    province VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index on business_name for faster searches
CREATE INDEX idx_business_name ON clients(business_name);