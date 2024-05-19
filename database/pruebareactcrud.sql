-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2024 a las 22:21:57
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebareactcrud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employes`
--

CREATE TABLE `employes` (
  `id` int(11) NOT NULL,
  `name` varchar(180) NOT NULL,
  `age` int(11) NOT NULL,
  `country` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `years` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `employes`
--

INSERT INTO `employes` (`id`, `name`, `age`, `country`, `position`, `years`) VALUES
(5, 'spiderman2', 3, 'asd', 'assd', 3),
(6, 'sdadas', 1, 'sda', 'as', 2),
(7, 'pepe', 4, 'pepeland', 'intern', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(180) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `image`, `description`, `price`) VALUES
(1, 'https://http2.mlstatic.com/D_NQ_NP_796966-MLU73415031305_122023-O.webp', 'Smart TV Challenger LED 32LO69 BT ANDROID', 9560000),
(2, 'https://http2.mlstatic.com/D_NQ_NP_720094-MLU75209653506_032024-O.webp', 'Televisor Samsung 65 Crystal Uhd 4k Cu8200', 2332900),
(3, 'https://http2.mlstatic.com/D_NQ_NP_874537-MLU73091757628_112023-O.webp', 'Televisor 43 Pulgadas Smart Android Ref. 43lo69', 564000),
(4, 'https://http2.mlstatic.com/D_NQ_NP_730918-MLA74780591163_022024-O.webp', 'Guitarra clásica Yamaha C40 para diestros natural palo de rosa brillante', 589000),
(5, 'https://http2.mlstatic.com/D_NQ_NP_774656-MLA74779492693_022024-O.webp', 'Guitarra Electroacústica Yamaha APX600 para diestros black palo de rosa brillante', 2390000),
(6, 'https://http2.mlstatic.com/D_NQ_NP_781212-MCO54589525149_032023-O.webp', 'Guitarra Electroacustica Con Microfono Activo De 4 Bandas', 389000),
(7, 'https://http2.mlstatic.com/D_NQ_NP_929803-MLU72645659769_112023-O.webp', 'Equipo De Audio Sony Para Fiesta Con Bluetooth - Mhc-v02 Color Negro Potencia RMS 80 W', 689000),
(8, 'https://http2.mlstatic.com/D_NQ_NP_935568-MCO72985273314_112023-O.webp', 'Pyle -pro Sistema De Altavoz Pa Activo Bluetooth, Usb, Mp3', 1389000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping`
--

CREATE TABLE `shopping` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `shopping`
--

INSERT INTO `shopping` (`id`, `id_user`, `id_product`) VALUES
(1, 1, 1),
(2, 1, 6),
(3, 1, 7),
(6, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(180) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'dasd', 'sada'),
(2, 'brandon', '1234'),
(7, 'patatita', '321'),
(8, 'flor', '123'),
(9, 'sadsad', '123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employes`
--
ALTER TABLE `employes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shopping`
--
ALTER TABLE `shopping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shopping_products` (`id_product`),
  ADD KEY `shopping_users` (`id_user`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employes`
--
ALTER TABLE `employes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `shopping`
--
ALTER TABLE `shopping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `shopping`
--
ALTER TABLE `shopping`
  ADD CONSTRAINT `shopping_products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `shopping_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
