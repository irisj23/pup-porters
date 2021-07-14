/*
 *    mysql -u root -p < schema.sql
*/
DROP DATABASE IF EXISTS pup_porters;

CREATE DATABASE pup_porters;

USE pup_porters;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  pw VARCHAR(100) NOT NULL,
  is_caregiver BOOLEAN NOT NULL DEFAULT true,
  dog_type ENUM('small', 'medium', 'large', 'xlarge') NOT NULL,
  dog_name VARCHAR(50) NOT NULL
);

CREATE TABLE payment (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  card_num VARCHAR(16) NOT NULL,
  exp_month CHAR(2) NOT NULL,
  exp_year CHAR(2) NOT NULL,
  cvv CHAR(3) NOT NULL,
  zip_code CHAR(5) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE flags (
  id INT PRIMARY KEY AUTO_INCREMENT,
  caregiver_id INT NOT NULL,
  remover_id INT,
  lat DECIMAL(8,2) NOT NULL,
  lng DECIMAL(8,2) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  pile_status ENUM('available', 'claimed', 'dropped') NOT NULL DEFAULT 'available',
  FOREIGN KEY (caregiver_id) REFERENCES users(id),
  FOREIGN KEY (remover_id) REFERENCES users(id)
);

CREATE TABLE dropoffs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  place VARCHAR(50) NOT NULL,
  lat DECIMAL(8,2) NOT NULL,
  lng DECIMAL(8,2) NOT NULL
);
