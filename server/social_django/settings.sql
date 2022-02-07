-- settings.sql
CREATE DATABASE social;
CREATE USER socialuser WITH PASSWORD 'social';
GRANT ALL PRIVILEGES ON DATABASE social TO socialuser;