-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "notes" VARCHAR (5000) DEFAULT ''
);
CREATE TABLE native_plants (
    "id" SERIAL PRIMARY KEY,
    "image_url" VARCHAR (1000),
    "scientific_name" VARCHAR (255),
    "genus" VARCHAR (255),
    "specific_epithet" VARCHAR (255),
    "year" INTEGER,
    "habitat" VARCHAR (255),
    "county" VARCHAR (255)
);
-- please update path to reflect plant-data.csv path on your computer
--  you can find plant-data.csv in the repo 
COPY native_plants (
    image_url,
    scientific_name,
    genus,
    specific_epithet,
    year,
    habitat,
    county
)
FROM '/Users/lily/prime/tier3/solo/MNRoots/plant-data.csv' DELIMITER ',' CSV HEADER;
CREATE TABLE "users_favs" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user" NOT NULL,
    "plant_id" INTEGER REFERENCES "native_plants" NOT NULL
);
update "user"
set notes = 'fungi forever'
where id = 1;