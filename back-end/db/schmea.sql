DROP DATABASE IF EXISTS song_dev 

CREATE DATABASE song_dev
\c song_dev
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    songname  VARCHAR(30) NOT NULL,
    album TEXT NOT NULL, 
    time TEXT,
    is_favorite BOOLEAN
    
)