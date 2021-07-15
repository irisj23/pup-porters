/*
 *    mysql -u root -p < schema.sql
*/
DROP DATABASE IF EXISTS pup_porters;

CREATE DATABASE pup_porters;

USE pup_porters;

CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(50) NOT NULL,
  is_caregiver BOOLEAN NOT NULL DEFAULT true,
  dog_type ENUM('small', 'medium', 'large', 'xlarge') NOT NULL,
  dog_name VARCHAR(50) NOT NULL,
  card_num VARCHAR(16) NOT NULL,
  exp_month CHAR(2) NOT NULL,
  exp_year CHAR(2) NOT NULL,
  cvv CHAR(3) NOT NULL,
  zip_code CHAR(5) NOT NULL
);

CREATE TABLE flags (
  id INT PRIMARY KEY AUTO_INCREMENT,
  caregiver_id VARCHAR(255) NOT NULL,
  remover_id VARCHAR(255),
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
  -- coords POINT
);

INSERT INTO dropoffs (place, lat, lng) VALUES ('Sunset Rec Center', 37.75718, -122.48653);
INSERT INTO dropoffs (place, lat, lng) VALUES ('Upper Douglass Dog Play Area', 37.74663, -122.43846);

-- INSERT INTO users VALUES ('1', 'chrispak90@gmail.com', true, 'medium', 'Fiddo', '1234567890123456', '05', '25', '123', '00000');