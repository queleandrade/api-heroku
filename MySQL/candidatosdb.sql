-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15-Ago-2021 às 01:41
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `candidatosdb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `candidatos`
--

CREATE TABLE `candidatos` (
  `id` int(11) NOT NULL,
  `nome` varchar(500) NOT NULL,
  `cargo` varchar(500) NOT NULL,
  `bairro` varchar(500) NOT NULL,
  `estadoCivil` varchar(500) NOT NULL,
  `sexo` varchar(500) NOT NULL,
  `endereco` varchar(500) NOT NULL,
  `diaNascimento` varchar(50) NOT NULL,
  `mesNascimento` varchar(50) NOT NULL,
  `anoNascimento` varchar(50) NOT NULL,
  `cidade` varchar(500) NOT NULL,
  `cep` varchar(100) NOT NULL,
  `telefone1` varchar(50) NOT NULL,
  `telefone2` varchar(50) NOT NULL,
  `celular` varchar(100) NOT NULL,
  `contato` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `identidade` varchar(200) NOT NULL,
  `cpf` varchar(100) NOT NULL,
  `habilitacao` varchar(100) NOT NULL,
  `veiculo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `candidatos`
--

INSERT INTO `candidatos` (`id`, `nome`, `cargo`, `bairro`, `estadoCivil`, `sexo`, `endereco`, `diaNascimento`, `mesNascimento`, `anoNascimento`, `cidade`, `cep`, `telefone1`, `telefone2`, `celular`, `contato`, `email`, `identidade`, `cpf`, `habilitacao`, `veiculo`) VALUES
(1, 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Eita', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', 'Teste');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `candidatos`
--
ALTER TABLE `candidatos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `candidatos`
--
ALTER TABLE `candidatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
