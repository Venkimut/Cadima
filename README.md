# Cadima


# Database

## 1.Table Creation and data dump 
```
CREATE TABLE `task_table` (  `row_id` int(11) NOT NULL,
  `guid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
);

INSERT INTO `task_table` (`row_id`, `guid`, `name`) VALUES
(1, '56454-4849-556', 'LOREM IPSUM'),
(2, '24234-1233-123', 'LOREM IPSUM'),
(3, '56454-4849-556', 'LOREM IPSUM'),
(4, '24234-1233-123', 'LOREM IPSUM'),
(5, '56454-4849-556', 'LOREM IPSUM'),
(6, '54354-5455-454', 'LOREM IPSUM');
```

## 2.	Write a query to delete rows if guid is repeating more than 2 times.
```
> DELETE from task_table where guid in (select guid from task_table group by guid HAVING count(guid) > 2);
```

# Programming
## 1. Please refer the [programming.js]()