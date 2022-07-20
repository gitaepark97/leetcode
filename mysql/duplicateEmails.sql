SELECT
  P.email AS Email
FROM Person AS P
HAVING COUNT(email) > 1;