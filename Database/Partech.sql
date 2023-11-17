--
CREATE TYPE gender AS ENUM (
    'Male',
    'Female'
);

-- 
CREATE TABLE userAccount(
    'userID' SERIAL NOT NULL UNIQUE PRIMARY KEY,
    'username' VARCHAR(50) NOT NULL UNIQUE,
    'password' TEXT NOT NULL UNIQUE,
    'email' VARCHAR(50) NOT NULL UNIQUE,
    'gender' gender NOT NULL,
    'phone' VARCHAR(12) NOT NULL UNIQUE,
    'balance' INTEGER NOT NULL
);

-- 
CREATE TABLE adminAccount(
    'username' VARCHAR(50) NOT NULL UNIQUE,
    'password' VARCHAR(50) NOT NULL UNIQUE,
);

CREATE TABLE ParkingLot(
    'parkID' SERIAL NOT NULL UNIQUE,
    'userID' SERIAL NOT NULL UNIQUE FOREIGN KEY,
    'qr_code' VARCHAR(100) NOT NULL UNIQUE,
    'islocked' BOOLEAN NOT NULL UNIQUE
);


CREATE TABLE Payment{
    'user.id' INTEGER NOT NULL UNIQUE,
    'parkinglot.id' INTEGER NOT NULL UNIQUE,
    'price' BIGINT NOT NULL 
};