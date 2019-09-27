SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 1;
START TRANSACTION;
SET time_zone = "+00:00";
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
flush privileges;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
drop table users;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(32) NOT NULL
);
drop table contracts;
CREATE TABLE `contracts` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `laufzeitBis` date NOT NULL,
  `kosten` decimal(10,0) NOT NULL,
  `name` varchar(30) NOT NULL,
  `beschreibung` varchar(200) NOT NULL,
  `catId1` int,
  `catId2` int,
  `catId3` int
);
drop table bills;
CREATE TABLE `bills`(
  `id` int(11) NOT NULL,
  `userId` text NOT NULL,
  `kosten` decimal(10,0) NOT NULL,
  `name` varchar(30) NOT NULL,
  `beschreibung` varchar(200) NOT NULL,
  `catId1` int,
  `catId2` int,
  `catId3` int
);

drop table categories;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `userId`int NOT NULL,
  `name` varchar(30) NOT NULL
);

CREATE TABLE `pictures` (
	`id` int(11) NOT NULL,
    `billId` int(11) NOT NULL,
    `imageData` LONGBLOB NOT NULL,
    `imageName` varchar(30) NOT NULL
);
drop table contactData;
CREATE TABLE `contactData` (
	`id` int NOT NULL,
    `username` varchar(30) NOT NULL,
    `email` varchar(80) NOT NULL,
    `message` varchar(200) NOT NULL
);


ALTER TABLE `contactData` 
	ADD PRIMARY KEY (`id`);
ALTER TABLE `contracts`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `contracts`
	ADD FOREIGN KEY (`userid`)
    REFERENCES users(`id`);

--
-- Indexes for table `users`
--


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `bills`
	ADD PRIMARY KEY (`id`);
ALTER TABLE `categories`
	ADD PRIMARY KEY (`id`);
ALTER TABLE `bills`
	ADD FOREIGN KEY (`userid`)
    REFERENCES users(`id`);
--
-- AUTO_INCREMENT for dumped tables
--

-- AUTO_INCREMENT für exportierte Tabellen
--

-- AUTO_INCREMENT für Tabelle `bill`
--
ALTER TABLE `bills`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `categorie`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `contract`
--
ALTER TABLE `contactData`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
INSERT INTO categories VALUES (1,1, "/");
INSERT INTO categories VALUES ( 2,1,"Versicherungen");
INSERT INTO categories VALUES ( 3,1,"Entertainment");
INSERT INTO categories VALUES ( 4,1,"Lebensmittel");
INSERT INTO categories VALUES ( 5,1,"Verkehr");
INSERT INTO categories VALUES ( 6,1, "Bildung");
--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;
INSERT INTO bills VALUES(1, 1, 100, "name", "JOJOJO",2,3,1);
INSERT INTO bills VALUES(2, 2, 200, "name2", "JOJOJO",2,1,1);
INSERT INTO contracts VALUES(1, 1, "2019-09-17", 123, "JOJOJO","beschreibung",2,1,1);
DELETE FROM contracts WHERE id < 100;
drop table contracts;
SELECT b.id,c.name FROM bills b RIGHT OUTER JOIN categories c ON b.catId1 = c.id WHERE b.USERID = 1;
SELECT * FROM users;
SELECT * FROM bills;
SELECT * FROM categories;
SELECT * FROM contactData ;