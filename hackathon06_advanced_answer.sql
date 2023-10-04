-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hackathon06_advanced
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `is_answer` bit(1) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_Answer_Question` (`question_id`),
  CONSTRAINT `FK_Answer_Question` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,1,_binary '\0','Là gì','2023-10-04'),(2,1,_binary '','Cái bàn','2023-10-04'),(3,1,_binary '','Thành phố','2023-10-04'),(4,1,_binary '','Sách vở','2023-10-04'),(5,2,_binary '\0','One','2023-10-04'),(6,2,_binary '','First','2023-10-04'),(7,2,_binary '','Second','2023-10-04'),(8,2,_binary '','Three','2023-10-04'),(9,3,_binary '','Mountain','2023-10-04'),(10,3,_binary '\0','City','2023-10-04'),(11,3,_binary '','Street','2023-10-04'),(12,3,_binary '','Country','2023-10-04'),(13,4,_binary '','20','2023-10-04'),(14,4,_binary '','3','2023-10-04'),(15,4,_binary '\0','2','2023-10-04'),(16,4,_binary '','50','2023-10-04'),(17,5,_binary '','30','2023-10-04'),(18,5,_binary '\0','10','2023-10-04'),(19,5,_binary '','20','2023-10-04'),(20,5,_binary '','15','2023-10-04'),(21,6,_binary '\0','100','2023-10-04'),(22,6,_binary '','1000','2023-10-04'),(23,6,_binary '','10000','2023-10-04'),(24,6,_binary '','100000','2023-10-04'),(25,7,_binary '\0','ABC là ký tự đầu tiên của tiếng Anh','2023-10-04'),(26,7,_binary '','Tiếng Việt','2023-10-04'),(27,7,_binary '','Không biết','2023-10-04'),(28,7,_binary '','Châm ngôn','2023-10-04');
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-04 17:37:56
