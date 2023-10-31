-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.28 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para ctrlf
CREATE DATABASE IF NOT EXISTS `ctrlf` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ctrlf`;

-- Copiando estrutura para tabela ctrlf.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `idCat` int NOT NULL AUTO_INCREMENT,
  `nomeCat` varchar(255) NOT NULL,
  `descCat` varchar(255) DEFAULT NULL,
  `ativoCat` char(1) NOT NULL DEFAULT 'A',
  `fkUserCat` int DEFAULT NULL,
  `tipoCat` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idCat`),
  KEY `FKUserCat` (`fkUserCat`),
  CONSTRAINT `FKUserCat` FOREIGN KEY (`fkUserCat`) REFERENCES `usuarios` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela ctrlf.categorias: ~21 rows (aproximadamente)
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` (`idCat`, `nomeCat`, `descCat`, `ativoCat`, `fkUserCat`, `tipoCat`) VALUES
	(1, 'tedtre', '456456', 'A', 1, 'receita'),
	(2, 'teste2', 'teste2', 'A', 1, 'receita'),
	(3, 'teste3', 'teste2', 'A', 2, NULL),
	(4, 'Teste', 'Atualizado pelo navegador', 'A', 2, 'despesa'),
	(5, 'teste5', 'sdafgsdafg', 'A', 2, 'despesa'),
	(6, 'categoria', 'descricao', 'A', 2, 'receita'),
	(7, 'teste 1', 'Criado pelo navegador', 'A', 1, 'receita'),
	(8, 'teste 1', 'Criado pelo navegador', 'A', 2, 'receita'),
	(9, 'teste 1', 'Criado pelo navegador', 'A', 2, 'despesa'),
	(10, 'teste 1w', 'Criado pelo navegador', 'A', 1, 'despesa'),
	(11, 'teste 1ww', 'Criado pelo navegador', 'A', 6, 'despesa'),
	(12, 'teste 1www', 'Criado pelo navegador', 'A', 1, 'despesa'),
	(13, 'teste 1wwws', 'Criado pelo navegador', 'A', 1, 'receita'),
	(14, 'teste asd', 'Criado pelo navegador', 'A', 1, 'despesa'),
	(15, 'teste asdd', 'Criado pelo navegador', 'A', 1, 'receita'),
	(16, 'teste asddds', 'Criado pelo navegador', 'A', 1, 'despesa'),
	(17, 'teste asdddsd', 'Criado pelo navegador', 'A', 1, 'receita'),
	(18, 'asdfasdf', 'sadfsadfasdf', 'A', 1, 'receita'),
	(19, 'd', 'd', 'A', 1, 'receita'),
	(20, 'Teste 32', 'Criado pelo navegador', 'A', 1, 'despesa'),
	(21, '4444', '444', 'A', 1, 'receita');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;

-- Copiando estrutura para tabela ctrlf.contas
CREATE TABLE IF NOT EXISTS `contas` (
  `idConta` int NOT NULL AUTO_INCREMENT,
  `descConta` varchar(255) DEFAULT NULL,
  `tipoConta` varchar(255) DEFAULT NULL,
  `valorConta` float DEFAULT NULL,
  `valorAtualConta` float DEFAULT NULL,
  `fkContaUser` int DEFAULT '0',
  PRIMARY KEY (`idConta`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela ctrlf.contas: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `contas` DISABLE KEYS */;
INSERT INTO `contas` (`idConta`, `descConta`, `tipoConta`, `valorConta`, `valorAtualConta`, `fkContaUser`) VALUES
	(1, 'Cartão', 'credito', 500, 5000, 1),
	(2, 'teste2', 'debito', 155, 1, 1),
	(3, 'carteira', 'carteira', 100, 0, 1),
	(10, 'Investimentos', 'Investimentos', 11, 11111, 1),
	(11, 'Outros', 'Outros', 1000, 1000, 1);
/*!40000 ALTER TABLE `contas` ENABLE KEYS */;

-- Copiando estrutura para tabela ctrlf.lancamentos
CREATE TABLE IF NOT EXISTS `lancamentos` (
  `idLanc` int NOT NULL AUTO_INCREMENT,
  `nomeLanc` varchar(255) DEFAULT 'Lancamento',
  `descLanc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `valorLanc` float NOT NULL,
  `dataLanc` date DEFAULT NULL,
  `fkUserLanc` int DEFAULT NULL,
  `fkCatLanc` int DEFAULT NULL,
  `fkConLanc` int DEFAULT NULL,
  `tipoLanc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idLanc`),
  KEY `FKCatLanc` (`fkCatLanc`),
  KEY `FKUserLanc` (`fkUserLanc`),
  KEY `fkConLanc` (`fkConLanc`),
  CONSTRAINT `FKCatLanc` FOREIGN KEY (`fkCatLanc`) REFERENCES `categorias` (`idCat`),
  CONSTRAINT `FKConLanc` FOREIGN KEY (`fkConLanc`) REFERENCES `contas` (`idConta`),
  CONSTRAINT `FKUserLanc` FOREIGN KEY (`fkUserLanc`) REFERENCES `usuarios` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela ctrlf.lancamentos: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `lancamentos` DISABLE KEYS */;
INSERT INTO `lancamentos` (`idLanc`, `nomeLanc`, `descLanc`, `valorLanc`, `dataLanc`, `fkUserLanc`, `fkCatLanc`, `fkConLanc`, `tipoLanc`) VALUES
	(1, '6666666666', '66666666', 66666, '2023-10-20', 2, 14, 1, 'receita'),
	(2, 'Salario', 'Mensal', 1234, '2023-10-19', 1, 2, 3, 'receita'),
	(3, 'asdfasf', 'asdfasdf', 1234, '2023-10-20', 1, 17, 2, 'receita'),
	(4, 'Lancamento', '444444', 444, '2023-10-20', 1, 18, 1, 'despesa'),
	(9, 'werwerw', 'werwere', 32423, '2023-10-22', 12, 2, 2, NULL);
/*!40000 ALTER TABLE `lancamentos` ENABLE KEYS */;

-- Copiando estrutura para tabela ctrlf.objetivos
CREATE TABLE IF NOT EXISTS `objetivos` (
  `idObj` int NOT NULL AUTO_INCREMENT,
  `nomeObj` varchar(50) DEFAULT NULL,
  `descObj` varchar(255) DEFAULT NULL,
  `valorObj` float NOT NULL,
  `metaObj` float NOT NULL,
  `dataObj` date DEFAULT NULL,
  `fkUserObj` int NOT NULL,
  `fkCatObj` int DEFAULT NULL,
  PRIMARY KEY (`idObj`),
  KEY `FKUserObj` (`fkUserObj`),
  KEY `fkCatObj` (`fkCatObj`),
  CONSTRAINT `FKCatObj` FOREIGN KEY (`fkCatObj`) REFERENCES `categorias` (`idCat`),
  CONSTRAINT `FKUserObj` FOREIGN KEY (`fkUserObj`) REFERENCES `usuarios` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela ctrlf.objetivos: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `objetivos` DISABLE KEYS */;
INSERT INTO `objetivos` (`idObj`, `nomeObj`, `descObj`, `valorObj`, `metaObj`, `dataObj`, `fkUserObj`, `fkCatObj`) VALUES
	(1, 'Mestre Gabriel', 'meuemail@email.com', 1234, 1235, '2023-06-01', 1, 2),
	(2, 'Mestre Gabriel', 'meuemail@email.com', 1234, 1235, '2023-06-01', 1, 1);
/*!40000 ALTER TABLE `objetivos` ENABLE KEYS */;

-- Copiando estrutura para tabela ctrlf.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `nomeUser` varchar(255) NOT NULL DEFAULT '0',
  `emailUser` varchar(255) NOT NULL DEFAULT '0',
  `senhaUser` varchar(255) NOT NULL DEFAULT '0',
  `telefoneUser` varchar(255) NOT NULL DEFAULT '0',
  `cepUser` varchar(50) DEFAULT NULL,
  `estadoUser` varchar(50) DEFAULT NULL,
  `generoUser` varchar(50) DEFAULT NULL,
  `cidadeUser` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela ctrlf.usuarios: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`idUser`, `nomeUser`, `emailUser`, `senhaUser`, `telefoneUser`, `cepUser`, `estadoUser`, `generoUser`, `cidadeUser`) VALUES
	(1, 'Gabriel Lopes', 'gabriel@email.com.br', 'shusahuash', '16994041558', '14407-020', 'SP', 'Homem', 'Franca'),
	(2, 'Sr Gabriel', 'meuemail@email.com', '1234', '11111111111', '14407-020', 'SP', 'Homem', 'Franca'),
	(4, 'Gabriel Lopes', 'gabrielaz.2206@gmail.com', 'asdfasfd', '16994041558', NULL, NULL, NULL, NULL),
	(5, 'APENAS O MAIOR', 'VTNC@REACT.COM', 'ASDFASDFAS', '11696969666', NULL, NULL, NULL, NULL),
	(6, 'Eu te odeio react', 'merespeita@porfavor.com', '', '1561561561', NULL, NULL, NULL, NULL),
	(12, 'teste', 'teste@teste.com', '', '13214651', NULL, NULL, NULL, NULL),
	(13, 'asdfasdfasdf', 'afsd@gmail.com', '', '1561651651', NULL, NULL, NULL, NULL),
	(14, 'teste11', 'gabrielaz.2206@gmail.com', '', '16994041558', NULL, NULL, NULL, NULL),
	(15, 'Jorge', 'jorge@gmail.com', 'testeste', '169999999', NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
