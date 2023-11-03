--
CREATE TYPE gender AS ENUM (
    'Male',
    'Female'
);

-- 
CREATE TABLE userAccount(
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
    'email' VARCHAR(50) NOT NULL UNIQUE,
    'phone' VARCHAR(12) NOT NULL UNIQUE
);

CREATE TABLE ParkingLot(
    'user.id' INTEGER NOT NULL UNIQUE,
    'isused' BOOLEAN NOT NULL UNIQUE,
    'qr_code' VARCHAR(100) NOT NULL UNIQUE,
    'islocked' BOOLEAN NOT NULL UNIQUE
);


CREATE TABLE Payment{
    'user.id' INTEGER NOT NULL UNIQUE,
    'parkinglot.id' INTEGER NOT NULL UNIQUE,
    'price' BIGINT NOT NULL 
};