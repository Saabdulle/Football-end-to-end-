DROP TABLE IF EXISTS football;

CREATE TABLE football(
    id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    league_position INT NOT NULL,
    stadium VARCHAR(255) NOT NULL,
    map_image_url VARCHAR(255) NOT NULL
);
