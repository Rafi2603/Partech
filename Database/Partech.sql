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

--
CREATE TABLE parklock(
    parkID SERIAL UNIQUE,
    userID SERIAL UNIQUE,
    starttime timestamp SET DEFAULT timezone('Asia/Jakarta'::text, CURRENT_TIMESTAMP),
    endtime TIMESTAMP,
    CONSTRAINT fk_userid FOREIGN KEY (userID) REFERENCES userAccount (userID),
    CONSTRAINT fk_parkID FOREIGN KEY (parkID) REFERENCES parkingslot (parkID)
);

CREATE TABLE parkingslot(
    'parkid' SERIAL NOT NULL UNIQUE PRIMARY KEY,
    'islocked' BOOLEAN NOT NULL,
    'isbroken' BOOLEAN NOT NULL,
    'qr_code' VARCHAR(100) NOT NULL UNIQUE,
);


--
CREATE TABLE Payment{
    'userID' SERIAL UNIQUE,
    'parkinglot.id' INTEGER NOT NULL UNIQUE,
    'price' BIGINT NOT NULL,
    CONSTRAINT fk_userid FOREIGN KEY (userID) REFERENCES userAccount (userID),
};


CREATE TABLE History(
    userid SERIAL UNIQUE,
    parkID SERIAL UNIQUE,
    starttime timestamp,
    endtime timestamp,
    CONSTRAINT fk_starttime FOREIGN KEY (starttime) REFERENCES parklock (starttime),
    CONSTRAINT fk_endtime FOREIGN KEY (endtime) REFERENCES userAccount (userID),
    CONSTRAINT fk_userid FOREIGN KEY (userID) REFERENCES userAccount (userID),
    CONSTRAINT fk_parkID FOREIGN KEY (parkID) REFERENCES parkingslot (parkID)
);