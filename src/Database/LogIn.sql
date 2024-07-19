CREATE DATABASE IF NOT EXISTS login_system;
USE login_system;

-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- OTP table
CREATE TABLE otp (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    otp_code VARCHAR(6) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create index on email for faster lookups
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_otp_user ON otp(user_id);