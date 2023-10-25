-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2023 a las 20:10:21
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tnodesacv`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `employee_id` int(4) NOT NULL,
  `employee_name` varchar(30) NOT NULL,
  `employee_lastname` varchar(60) NOT NULL,
  `employee_number` varchar(20) NOT NULL,
  `employee_mail` varchar(60) NOT NULL,
  `employee_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`employee_id`, `employee_name`, `employee_lastname`, `employee_number`, `employee_mail`, `employee_address`) VALUES
(1, 'Omar', 'Garcia Martinez', '1234567890', 'xd@xd.com', 'Av Agustin Gonzalez Medina #4801, int. 65, Fracc. Loarca, 76118, Santiago de Queretaro, Qro. '),
(2, 'Gerardo', 'Flores Arauz', '12345', '123456789123456789@gmail.com', 'Jdn. de La Salvación 306, 76117 Santa María Magdalena, Qro.'),
(3, 'Jennifer', 'Garcia Martinez', '1234567890', 'xd@xd.com', 'Av Agustin Gonzalez Medina #4801, int. 65, Fracc. Loarca, 76118, Santiago de Queretaro, Qro.'),
(6, 'lglohwehbf', 'lksvcfj,wbjsfac', 'lmjwvsc', 'lkjvskucg.wgscgb', 'l.scgiguisguciguwsg'),
(7, 'p', 'p', 'p', 'p', 'p'),
(8, 'q', 'q', 'q', 'q', 'q'),
(9, 'w', 'w', 'w', 'w', 'w'),
(10, 'v', 'v', 'v', 'v', 'v'),
(11, 'z', 'z', 'z', 'z', 'z'),
(14, 'f', 'f', 'f', 'f', 'f');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hrusers`
--

CREATE TABLE `hrusers` (
  `hruser_id` int(4) NOT NULL,
  `hruser_name` varchar(90) NOT NULL,
  `hruser_mail` varchar(60) NOT NULL,
  `hruser_password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hrusers`
--

INSERT INTO `hrusers` (`hruser_id`, `hruser_name`, `hruser_mail`, `hruser_password`) VALUES
(1, 'Omar Garcia Martinez', 'xd@xd.com', 'xdxdtadan'),
(2, 'prueba', 'prueba@prueba.com', 'prueba'),
(3, 'xdxd', 'xd2@xd2.com', 'xdxd'),
(4, 'y', 'y', 'y');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indices de la tabla `hrusers`
--
ALTER TABLE `hrusers`
  ADD PRIMARY KEY (`hruser_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `hrusers`
--
ALTER TABLE `hrusers`
  MODIFY `hruser_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
