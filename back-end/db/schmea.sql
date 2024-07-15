DROP DATABASE IF EXISTS song_dev 

CREATE DATABASE song_dev
\c song_dev
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    songname  VARCHAR(30),
    album TEXT, 
    time TEXT,
    is_favorite BOOLEAN
    
)