/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movies WHERE duration < 90;';

const ejercicio03 = 'SELECT * FROM movies WHERE year > 1929 AND year < 1941;';

const ejercicio04 = 'SELECT * FROM movies WHERE title LIKE '%til%';';

const ejercicio05 = 'SELECT * FROM movies WHERE cardinality(actors)=1;';

const ejercicio06 = 'SELECT title, AVG(rating) FROM movies, unnest(ratings) rating GROUP BY title;';

const ejercicio07 = 'SELECT actors FROM movies WHERE title LIKE "%Fast and%" AND year=2016;';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
