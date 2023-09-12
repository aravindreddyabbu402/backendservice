-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.5-10.0.10-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             8.0.0.4396
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for db1
CREATE DATABASE IF NOT EXISTS `db1` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `db1`;


-- Dumping structure for table db1.address
CREATE TABLE IF NOT EXISTS `address` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `receiver_name` varchar(255) NOT NULL,
  `receiver_phone` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `society` varchar(255) NOT NULL,
  `city_id` int(11) NOT NULL,
  `society_id` int(11) NOT NULL,
  `house_no` varchar(255) NOT NULL,
  `landmark` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `pincode` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `select_status` int(11) NOT NULL,
  `added_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.address: ~1 rows (approximately)
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` (`address_id`, `type`, `user_id`, `receiver_name`, `receiver_phone`, `city`, `society`, `city_id`, `society_id`, `house_no`, `landmark`, `state`, `pincode`, `lat`, `lng`, `select_status`, `added_at`, `updated_at`) VALUES
	(1, 'Home', 6, 'Test User', '1234567890', 'Vapi', 'Vapi', 1, 1, '203', 'sonipat', 'Delhi', '131001', '28.993082299999994', '77.0150735', 1, '', ''),
	(2, 'Home', 22, 'Test User', '1234567891', 'Vapi', 'Vapi', 1, 1, '203', 'sonipat', 'Delhi', '131001', '28.993082299999994', '77.0150735', 1, '', '');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;


-- Dumping structure for table db1.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin_image` varchar(255) NOT NULL,
  `remember_token` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.admin: ~2 rows (approximately)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`id`, `name`, `email`, `password`, `admin_image`, `remember_token`, `role_id`, `role_name`) VALUES
	(1, 'The SuperCity', 'info@thesupercity.com', '$2y$10$VD8DroA2J31Zfsvhef3zUO7dwBeLlXMmmggstTzkzsZ6WdgtBC6UK', '/images/admin/12-01-22/appicon_180x180.png', '', 0, ''),
	(2, 'The SuperCity', 'mails@thesupercity.com', '$2y$10$rPDVbFa34EaBE3pG7sA2aehkNpZn0kZNk00DBybf4BEt/O3UA06l2', '/images/admin/12-01-22/appicon_180x180.png', '', 0, '');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;


-- Dumping structure for table db1.admin_driver_incentive
CREATE TABLE IF NOT EXISTS `admin_driver_incentive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `incentive` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.admin_driver_incentive: ~0 rows (approximately)
/*!40000 ALTER TABLE `admin_driver_incentive` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_driver_incentive` ENABLE KEYS */;


-- Dumping structure for table db1.admin_payouts
CREATE TABLE IF NOT EXISTS `admin_payouts` (
  `payout_id` int(11) NOT NULL AUTO_INCREMENT,
  `payout_date` varchar(255) NOT NULL,
  `respond_payout_id` varchar(255) NOT NULL,
  `bill` varchar(255) NOT NULL,
  `store_id` varchar(255) NOT NULL,
  `payout_amt` float NOT NULL,
  PRIMARY KEY (`payout_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.admin_payouts: ~0 rows (approximately)
/*!40000 ALTER TABLE `admin_payouts` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_payouts` ENABLE KEYS */;


-- Dumping structure for table db1.app_link
CREATE TABLE IF NOT EXISTS `app_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `android_app_link` longtext,
  `ios_app_link` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.app_link: ~0 rows (approximately)
/*!40000 ALTER TABLE `app_link` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_link` ENABLE KEYS */;


-- Dumping structure for table db1.app_notice
CREATE TABLE IF NOT EXISTS `app_notice` (
  `app_notice_id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL,
  `notice` varchar(255) NOT NULL,
  PRIMARY KEY (`app_notice_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.app_notice: ~0 rows (approximately)
/*!40000 ALTER TABLE `app_notice` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_notice` ENABLE KEYS */;


-- Dumping structure for table db1.brand
CREATE TABLE IF NOT EXISTS `brand` (
  `brand_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `parent` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `added_by` int(11) NOT NULL,
  `tax_type` int(11) NOT NULL,
  `tax_name` varchar(255) NOT NULL,
  `tx_id` int(11) NOT NULL,
  `tax_per` int(11) NOT NULL,
  `hide` int(11) NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.brand: ~5 rows (approximately)
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` (`brand_id`, `title`, `slug`, `url`, `image`, `parent`, `level`, `description`, `status`, `added_by`, `tax_type`, `tax_name`, `tx_id`, `tax_per`, `hide`) VALUES
	(2, 'Teachers', 'Teachers', '', '/images/brand/09-10-2021/johnny_walker.jpg', 0, 0, 'Teachers', 1, 0, 0, '', 0, 0, 0),
	(3, 'Signature', 'Signature', '', '/images/brand/09-10-2021/johnny_walker.jpg', 0, 0, 'Signature', 1, 0, 0, '', 0, 0, 0),
	(4, 'Johnny Walker', 'johnny_walker', '', '/images/brand/09-10-2021/johnny_walker.jpg', 0, 0, 'johnny_walker', 1, 0, 0, '', 0, 0, 0),
	(5, 'Chivas\'', 'Chivas\'', '\'', '/Chivas.jpg\'', 0, 0, 'Chivas\'', 1, 0, 0, '\'', 0, 0, 0),
	(6, 'Black label\'', 'black_label\'', '\'', '/black_label.jpg\'', 0, 0, 'Black label\'', 1, 0, 0, '\'', 0, 0, 0);
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;


-- Dumping structure for table db1.callback_req
CREATE TABLE IF NOT EXISTS `callback_req` (
  `callback_req_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `processed` int(11) NOT NULL DEFAULT '0',
  `date` date NOT NULL,
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`callback_req_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.callback_req: ~0 rows (approximately)
/*!40000 ALTER TABLE `callback_req` DISABLE KEYS */;
/*!40000 ALTER TABLE `callback_req` ENABLE KEYS */;


-- Dumping structure for table db1.cart
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `varient_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.cart: ~3 rows (approximately)
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` (`cart_id`, `product_id`, `varient_id`, `user_id`, `qty`) VALUES
	(1, 0, 0, 0, 0),
	(3, 207, 210, 6, 2),
	(4, 206, 210, 22, 3);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;


-- Dumping structure for table db1.cart_payments
CREATE TABLE IF NOT EXISTS `cart_payments` (
  `py_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_id` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `cart_id` varchar(255) NOT NULL,
  `payment_gateway` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`py_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.cart_payments: ~0 rows (approximately)
/*!40000 ALTER TABLE `cart_payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_payments` ENABLE KEYS */;


-- Dumping structure for table db1.cart_rewards
CREATE TABLE IF NOT EXISTS `cart_rewards` (
  `cart_rewards_id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` varchar(255) NOT NULL,
  `rewards` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`cart_rewards_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.cart_rewards: ~0 rows (approximately)
/*!40000 ALTER TABLE `cart_rewards` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_rewards` ENABLE KEYS */;


-- Dumping structure for table db1.cart_status
CREATE TABLE IF NOT EXISTS `cart_status` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `pending` datetime DEFAULT NULL,
  `confirm` datetime DEFAULT NULL,
  `out_for_delivery` datetime DEFAULT NULL,
  `completed` datetime DEFAULT NULL,
  `cancelled` datetime DEFAULT NULL,
  `cart_id` varchar(255) NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.cart_status: ~0 rows (approximately)
/*!40000 ALTER TABLE `cart_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_status` ENABLE KEYS */;


-- Dumping structure for table db1.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `parent` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `added_by` int(11) NOT NULL,
  `tax_type` int(11) NOT NULL,
  `tax_name` varchar(255) NOT NULL,
  `tx_id` int(11) NOT NULL,
  `tax_per` int(11) NOT NULL,
  `hide` int(11) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.categories: ~5 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`cat_id`, `title`, `slug`, `url`, `image`, `parent`, `level`, `description`, `status`, `added_by`, `tax_type`, `tax_name`, `tx_id`, `tax_per`, `hide`) VALUES
	(1, 'Wine', 'Wine', '', '/images/category/09-10-2021/wine.jpg', 0, 0, 'Wine', 1, 0, 0, '', 0, 0, 0),
	(2, 'Vodka', 'Vodka', '', '/images/category/09-10-2021/vodka.jpg', 0, 0, 'Vodka', 1, 0, 0, '', 0, 0, 0),
	(3, 'Whiskey', 'Whiskey', '', '/images/category/09-10-2021/Whiskey.jpg', 0, 0, 'Whiskey', 1, 0, 0, '', 0, 0, 0),
	(7, 'Rum\'', 'Rum\'', '\'', '/rum.jpg\'', 0, 0, 'Rum\'', 1, 0, 0, '\'', 0, 0, 0),
	(8, 'Gin\'', 'Gin\'', '\'', '/gin.jpg\'', 0, 0, 'Gin\'', 1, 0, 0, '\'', 0, 0, 0);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;


-- Dumping structure for table db1.city
CREATE TABLE IF NOT EXISTS `city` (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` varchar(100) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.city: ~0 rows (approximately)
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
/*!40000 ALTER TABLE `city` ENABLE KEYS */;


-- Dumping structure for table db1.country_code
CREATE TABLE IF NOT EXISTS `country_code` (
  `code_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_code` int(11) NOT NULL,
  PRIMARY KEY (`code_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.country_code: ~0 rows (approximately)
/*!40000 ALTER TABLE `country_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `country_code` ENABLE KEYS */;


-- Dumping structure for table db1.coupon
CREATE TABLE IF NOT EXISTS `coupon` (
  `coupon_id` int(11) NOT NULL AUTO_INCREMENT,
  `coupon_name` varchar(255) NOT NULL,
  `coupon_image` varchar(255) NOT NULL,
  `coupon_code` varchar(255) NOT NULL,
  `coupon_description` varchar(255) NOT NULL,
  `cart_value` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `uses_restriction` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NOT NULL,
  PRIMARY KEY (`coupon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.coupon: ~0 rows (approximately)
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;


-- Dumping structure for table db1.currency
CREATE TABLE IF NOT EXISTS `currency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_name` varchar(255) NOT NULL,
  `currency_sign` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.currency: ~0 rows (approximately)
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;


-- Dumping structure for table db1.deal_product
CREATE TABLE IF NOT EXISTS `deal_product` (
  `deal_id` int(11) NOT NULL AUTO_INCREMENT,
  `varient_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `deal_price` int(11) NOT NULL,
  `valid_from` varchar(255) NOT NULL,
  `valid_to` varchar(255) NOT NULL,
  PRIMARY KEY (`deal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.deal_product: ~3 rows (approximately)
/*!40000 ALTER TABLE `deal_product` DISABLE KEYS */;
INSERT INTO `deal_product` (`deal_id`, `varient_id`, `status`, `store_id`, `deal_price`, `valid_from`, `valid_to`) VALUES
	(1, 190, 1, 4, 230, '2022-01-23 14:41:00', '2022-01-25 14:41:00'),
	(2, 95, 1, 11, 120, '2022-02-16 21:29:00', '2022-02-26 21:29:00'),
	(3, 104, 1, 14, 120, '2022-02-17 14:08:00', '2022-03-10 14:08:00');
/*!40000 ALTER TABLE `deal_product` ENABLE KEYS */;


-- Dumping structure for table db1.delivery_boy
CREATE TABLE IF NOT EXISTS `delivery_boy` (
  `dboy_id` int(11) NOT NULL AUTO_INCREMENT,
  `boy_name` varchar(255) NOT NULL,
  `boy_phone` varchar(255) NOT NULL,
  `boy_city` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `device_id` varchar(255) NOT NULL,
  `boy_loc` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `store_dboy_id` int(11) NOT NULL,
  `added_by` varchar(255) NOT NULL,
  `id_no` varchar(255) NOT NULL,
  `id_photo` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_name` varchar(255) NOT NULL,
  `current_lat` varchar(255) NOT NULL,
  `current_lng` varchar(255) NOT NULL,
  PRIMARY KEY (`dboy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.delivery_boy: ~1 rows (approximately)
/*!40000 ALTER TABLE `delivery_boy` DISABLE KEYS */;
INSERT INTO `delivery_boy` (`dboy_id`, `boy_name`, `boy_phone`, `boy_city`, `password`, `device_id`, `boy_loc`, `lat`, `lng`, `status`, `store_id`, `store_dboy_id`, `added_by`, `id_no`, `id_photo`, `image`, `id_name`, `current_lat`, `current_lng`) VALUES
	(1, 'Ramesh2', '9876543210', 'Vapi', '123456', 'eJAcAalhIUwBhgboDzozur:APA91bHvgGnEPrXWLqYU1W748VF_QyS9rF7Uwbv1KO5pv36JrOi3ho9rUJPy_sdm43RFAp8k7UjWUm6SyKTky02AMmDE9iZmtKL9svznSdlK3NECvEz2kDJjCNcLMchWBb3WGxDgnA5y', 'Delhi Cantt Railway Station, Jail Road, Nangal Village, Delhi Cantonment, New Delhi, Delhi, India', '28.6119386', '77.1157479', 1, 0, 0, 'admin', '1234567', '/images/coupon/14-02-2022/16.jpg', '', 'Aadhar Card', '37.46272659301758', '-121.90013885498047');
/*!40000 ALTER TABLE `delivery_boy` ENABLE KEYS */;


-- Dumping structure for table db1.delivery_rating
CREATE TABLE IF NOT EXISTS `delivery_rating` (
  `rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `dboy_id` int(11) NOT NULL,
  `rating` float NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`rating_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.delivery_rating: ~0 rows (approximately)
/*!40000 ALTER TABLE `delivery_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_rating` ENABLE KEYS */;


-- Dumping structure for table db1.driver_bank
CREATE TABLE IF NOT EXISTS `driver_bank` (
  `ac_id` int(11) NOT NULL AUTO_INCREMENT,
  `driver_id` int(11) NOT NULL,
  `ac_no` varchar(255) NOT NULL,
  `ifsc` varchar(255) NOT NULL,
  `holder_name` varchar(255) NOT NULL,
  `bank_name` varchar(255) NOT NULL,
  `upi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ac_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.driver_bank: ~0 rows (approximately)
/*!40000 ALTER TABLE `driver_bank` DISABLE KEYS */;
/*!40000 ALTER TABLE `driver_bank` ENABLE KEYS */;


-- Dumping structure for table db1.driver_callback_req
CREATE TABLE IF NOT EXISTS `driver_callback_req` (
  `callback_req_id` int(11) NOT NULL AUTO_INCREMENT,
  `driver_name` varchar(255) NOT NULL,
  `driver_phone` varchar(255) NOT NULL,
  `processed` int(11) NOT NULL DEFAULT '0',
  `date` date NOT NULL,
  `driver_id` int(11) NOT NULL,
  PRIMARY KEY (`callback_req_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.driver_callback_req: ~0 rows (approximately)
/*!40000 ALTER TABLE `driver_callback_req` DISABLE KEYS */;
/*!40000 ALTER TABLE `driver_callback_req` ENABLE KEYS */;


-- Dumping structure for table db1.driver_incentive
CREATE TABLE IF NOT EXISTS `driver_incentive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dboy_id` int(11) NOT NULL,
  `earned_till_now` varchar(255) NOT NULL,
  `paid_till_now` varchar(255) NOT NULL,
  `remaining` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.driver_incentive: ~0 rows (approximately)
/*!40000 ALTER TABLE `driver_incentive` DISABLE KEYS */;
/*!40000 ALTER TABLE `driver_incentive` ENABLE KEYS */;


-- Dumping structure for table db1.driver_notification
CREATE TABLE IF NOT EXISTS `driver_notification` (
  `not_id` int(11) NOT NULL AUTO_INCREMENT,
  `not_title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `not_message` longtext NOT NULL,
  `dboy_id` int(11) NOT NULL,
  `read_by_driver` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`not_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.driver_notification: ~0 rows (approximately)
/*!40000 ALTER TABLE `driver_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `driver_notification` ENABLE KEYS */;


-- Dumping structure for table db1.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.failed_jobs: ~0 rows (approximately)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;


-- Dumping structure for table db1.fcm
CREATE TABLE IF NOT EXISTS `fcm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_id` varchar(255) NOT NULL,
  `server_key` longtext NOT NULL,
  `store_server_key` longtext NOT NULL,
  `driver_server_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.fcm: ~0 rows (approximately)
/*!40000 ALTER TABLE `fcm` DISABLE KEYS */;
/*!40000 ALTER TABLE `fcm` ENABLE KEYS */;


-- Dumping structure for table db1.firebase
CREATE TABLE IF NOT EXISTS `firebase` (
  `f_id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.firebase: ~0 rows (approximately)
/*!40000 ALTER TABLE `firebase` DISABLE KEYS */;
/*!40000 ALTER TABLE `firebase` ENABLE KEYS */;


-- Dumping structure for table db1.firebase_iso
CREATE TABLE IF NOT EXISTS `firebase_iso` (
  `iso_id` int(11) NOT NULL AUTO_INCREMENT,
  `iso_code` varchar(255) NOT NULL,
  PRIMARY KEY (`iso_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.firebase_iso: ~0 rows (approximately)
/*!40000 ALTER TABLE `firebase_iso` DISABLE KEYS */;
/*!40000 ALTER TABLE `firebase_iso` ENABLE KEYS */;


-- Dumping structure for table db1.freedeliverycart
CREATE TABLE IF NOT EXISTS `freedeliverycart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `min_cart_value` float NOT NULL DEFAULT '0',
  `del_charge` float NOT NULL DEFAULT '0',
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.freedeliverycart: ~0 rows (approximately)
/*!40000 ALTER TABLE `freedeliverycart` DISABLE KEYS */;
/*!40000 ALTER TABLE `freedeliverycart` ENABLE KEYS */;


-- Dumping structure for table db1.id_types
CREATE TABLE IF NOT EXISTS `id_types` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.id_types: ~0 rows (approximately)
/*!40000 ALTER TABLE `id_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `id_types` ENABLE KEYS */;


-- Dumping structure for table db1.image_space
CREATE TABLE IF NOT EXISTS `image_space` (
  `space_id` int(11) NOT NULL AUTO_INCREMENT,
  `digital_ocean` int(11) NOT NULL,
  `aws` int(11) NOT NULL,
  `same_server` int(11) NOT NULL,
  PRIMARY KEY (`space_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.image_space: ~0 rows (approximately)
/*!40000 ALTER TABLE `image_space` DISABLE KEYS */;
/*!40000 ALTER TABLE `image_space` ENABLE KEYS */;


-- Dumping structure for table db1.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`(191))
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.jobs: ~0 rows (approximately)
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;


-- Dumping structure for table db1.licensebox
CREATE TABLE IF NOT EXISTS `licensebox` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `license` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `installed_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('active','inactive') NOT NULL DEFAULT 'inactive',
  `message` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.licensebox: ~0 rows (approximately)
/*!40000 ALTER TABLE `licensebox` DISABLE KEYS */;
/*!40000 ALTER TABLE `licensebox` ENABLE KEYS */;


-- Dumping structure for table db1.list_cart
CREATE TABLE IF NOT EXISTS `list_cart` (
  `l_cid` int(11) NOT NULL AUTO_INCREMENT,
  `l_vid` int(11) NOT NULL,
  `l_qty` int(11) NOT NULL,
  `l_uid` int(11) NOT NULL,
  `ord_by_photo_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`l_cid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.list_cart: ~0 rows (approximately)
/*!40000 ALTER TABLE `list_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `list_cart` ENABLE KEYS */;


-- Dumping structure for table db1.mapbox
CREATE TABLE IF NOT EXISTS `mapbox` (
  `map_id` int(11) NOT NULL AUTO_INCREMENT,
  `mapbox_api` varchar(255) NOT NULL,
  PRIMARY KEY (`map_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.mapbox: ~0 rows (approximately)
/*!40000 ALTER TABLE `mapbox` DISABLE KEYS */;
/*!40000 ALTER TABLE `mapbox` ENABLE KEYS */;


-- Dumping structure for table db1.map_api
CREATE TABLE IF NOT EXISTS `map_api` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `map_api_key` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.map_api: ~0 rows (approximately)
/*!40000 ALTER TABLE `map_api` DISABLE KEYS */;
/*!40000 ALTER TABLE `map_api` ENABLE KEYS */;


-- Dumping structure for table db1.map_settings
CREATE TABLE IF NOT EXISTS `map_settings` (
  `map_id` int(11) NOT NULL AUTO_INCREMENT,
  `mapbox` int(11) NOT NULL,
  `google_map` int(11) NOT NULL,
  PRIMARY KEY (`map_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.map_settings: ~0 rows (approximately)
/*!40000 ALTER TABLE `map_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `map_settings` ENABLE KEYS */;


-- Dumping structure for table db1.membership_bought
CREATE TABLE IF NOT EXISTS `membership_bought` (
  `buy_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `mem_id` int(11) NOT NULL,
  `mem_start_date` date NOT NULL,
  `mem_end_date` date NOT NULL,
  `price` varchar(255) NOT NULL,
  `buy_date` date NOT NULL,
  `paid_by` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `payment_gateway` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) NOT NULL DEFAULT 'success',
  PRIMARY KEY (`buy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.membership_bought: ~0 rows (approximately)
/*!40000 ALTER TABLE `membership_bought` DISABLE KEYS */;
/*!40000 ALTER TABLE `membership_bought` ENABLE KEYS */;


-- Dumping structure for table db1.membership_plan
CREATE TABLE IF NOT EXISTS `membership_plan` (
  `plan_id` int(11) NOT NULL AUTO_INCREMENT,
  `image` longtext,
  `plan_name` varchar(255) NOT NULL,
  `free_delivery` int(11) NOT NULL DEFAULT '0',
  `reward` int(11) NOT NULL DEFAULT '0',
  `instant_delivery` int(11) NOT NULL DEFAULT '0',
  `plan_description` longtext NOT NULL,
  `days` int(11) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL,
  `hide` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`plan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.membership_plan: ~0 rows (approximately)
/*!40000 ALTER TABLE `membership_plan` DISABLE KEYS */;
/*!40000 ALTER TABLE `membership_plan` ENABLE KEYS */;


-- Dumping structure for table db1.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.migrations: ~0 rows (approximately)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;


-- Dumping structure for table db1.minimum_maximum_order_value
CREATE TABLE IF NOT EXISTS `minimum_maximum_order_value` (
  `min_max_id` int(100) NOT NULL AUTO_INCREMENT,
  `min_value` varchar(255) NOT NULL,
  `max_value` varchar(255) NOT NULL,
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`min_max_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.minimum_maximum_order_value: ~0 rows (approximately)
/*!40000 ALTER TABLE `minimum_maximum_order_value` DISABLE KEYS */;
/*!40000 ALTER TABLE `minimum_maximum_order_value` ENABLE KEYS */;


-- Dumping structure for table db1.msg91
CREATE TABLE IF NOT EXISTS `msg91` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_id` varchar(255) NOT NULL,
  `api_key` varchar(255) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.msg91: ~0 rows (approximately)
/*!40000 ALTER TABLE `msg91` DISABLE KEYS */;
/*!40000 ALTER TABLE `msg91` ENABLE KEYS */;


-- Dumping structure for table db1.notificationby
CREATE TABLE IF NOT EXISTS `notificationby` (
  `noti_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `sms` int(11) NOT NULL,
  `app` int(11) NOT NULL,
  `email` int(11) NOT NULL,
  PRIMARY KEY (`noti_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.notificationby: ~0 rows (approximately)
/*!40000 ALTER TABLE `notificationby` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificationby` ENABLE KEYS */;


-- Dumping structure for table db1.oauth_access_tokens
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `scopes` text,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.oauth_access_tokens: ~0 rows (approximately)
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;


-- Dumping structure for table db1.oauth_auth_codes
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `scopes` text,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.oauth_auth_codes: ~0 rows (approximately)
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;


-- Dumping structure for table db1.oauth_clients
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.oauth_clients: ~0 rows (approximately)
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;


-- Dumping structure for table db1.oauth_personal_access_clients
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.oauth_personal_access_clients: ~0 rows (approximately)
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;


-- Dumping structure for table db1.oauth_refresh_tokens
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.oauth_refresh_tokens: ~0 rows (approximately)
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;


-- Dumping structure for table db1.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `time_slot` varchar(255) NOT NULL,
  `dboy_id` int(11) NOT NULL DEFAULT '0',
  `order_status` varchar(255) NOT NULL DEFAULT 'Pending',
  `user_signature` varchar(255) NOT NULL,
  `cancelling_reason` varchar(255) NOT NULL,
  `coupon_id` int(11) NOT NULL DEFAULT '0',
  `payment_status` varchar(255) NOT NULL,
  `cancel_by_store` int(11) NOT NULL DEFAULT '0',
  `dboy_incentive` int(11) NOT NULL,
  `is_gift` tinyint(4) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `price_without_delivery` int(11) NOT NULL,
  `total_products_mrp` int(11) NOT NULL,
  `paid_by_wallet` int(11) NOT NULL DEFAULT '0',
  `rem_price` int(11) NOT NULL DEFAULT '0',
  `avg_tax_per` int(11) NOT NULL,
  `total_tax_price` int(11) NOT NULL,
  `order_date` datetime NOT NULL,
  `delivery_date` datetime NOT NULL,
  `delivery_charge` int(11) NOT NULL DEFAULT '0',
  `coupon_discount` varchar(255) NOT NULL DEFAULT '0',
  `updated_at` varchar(255) NOT NULL,
  `varient_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `gift_message` varchar(255) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.orders: ~4 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`order_id`, `user_id`, `store_id`, `address_id`, `payment_method`, `time_slot`, `dboy_id`, `order_status`, `user_signature`, `cancelling_reason`, `coupon_id`, `payment_status`, `cancel_by_store`, `dboy_incentive`, `is_gift`, `cart_id`, `total_price`, `price_without_delivery`, `total_products_mrp`, `paid_by_wallet`, `rem_price`, `avg_tax_per`, `total_tax_price`, `order_date`, `delivery_date`, `delivery_charge`, `coupon_discount`, `updated_at`, `varient_id`, `product_id`, `count`, `gift_message`) VALUES
	(1, 6, 1, 1, 'COD', '03:00 pm - 04:00 pm', 0, 'Pending', 'user', 'n/a', 0, 'COD', 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-10-11 00:00:00', '2022-10-11 00:00:00', 0, '0', '', 0, 0, 0, ''),
	(2, 6, 1, 1, 'COD', '03:00 pm - 04:00 pm', 0, 'Pending', 'user', 'n/a', 0, 'COD', 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-10-11 00:00:00', '2022-10-11 00:00:00', 0, '0', '', 0, 0, 0, ''),
	(5, 6, 1, 1, 'COD', '03:00 pm - 04:00 pm', 0, 'Pending', 'user', 'n/a', 0, 'COD', 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-10-11 00:00:00', '2022-10-11 00:00:00', 0, '0', '', 210, 206, 1, ''),
	(6, 6, 1, 1, 'COD', '03:00 pm - 04:00 pm', 0, 'Pending', 'user', 'n/a', 0, 'COD', 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, '2022-10-11 00:00:00', '2022-10-11 00:00:00', 0, '0', '', 210, 206, 2, '');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;


-- Dumping structure for table db1.order_by_photo
CREATE TABLE IF NOT EXISTS `order_by_photo` (
  `ord_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `list_photo` varchar(255) NOT NULL,
  `store_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `delivery_date` date NOT NULL,
  `processed` int(11) NOT NULL DEFAULT '0',
  `reason` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ord_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.order_by_photo: ~0 rows (approximately)
/*!40000 ALTER TABLE `order_by_photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_by_photo` ENABLE KEYS */;


-- Dumping structure for table db1.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`(191))
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.password_resets: ~0 rows (approximately)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;


-- Dumping structure for table db1.payout_requests
CREATE TABLE IF NOT EXISTS `payout_requests` (
  `req_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_id` varchar(255) NOT NULL,
  `payout_amt` float NOT NULL,
  `req_date` date NOT NULL,
  `complete` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`req_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.payout_requests: ~0 rows (approximately)
/*!40000 ALTER TABLE `payout_requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `payout_requests` ENABLE KEYS */;


-- Dumping structure for table db1.payout_req_valid
CREATE TABLE IF NOT EXISTS `payout_req_valid` (
  `val_id` int(11) NOT NULL AUTO_INCREMENT,
  `min_amt` int(11) NOT NULL,
  `min_days` int(11) NOT NULL,
  PRIMARY KEY (`val_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.payout_req_valid: ~0 rows (approximately)
/*!40000 ALTER TABLE `payout_req_valid` DISABLE KEYS */;
/*!40000 ALTER TABLE `payout_req_valid` ENABLE KEYS */;


-- Dumping structure for table db1.plan_buy_history
CREATE TABLE IF NOT EXISTS `plan_buy_history` (
  `wallet_id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `before_recharge` int(11) DEFAULT NULL,
  `after_recharge` int(11) DEFAULT NULL,
  `payment_gateway` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`wallet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.plan_buy_history: ~0 rows (approximately)
/*!40000 ALTER TABLE `plan_buy_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `plan_buy_history` ENABLE KEYS */;


-- Dumping structure for table db1.product
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_id` int(11) NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'Regular',
  `hide` int(11) NOT NULL DEFAULT '0',
  `added_by` int(11) NOT NULL DEFAULT '0',
  `approved` int(11) NOT NULL DEFAULT '1',
  `admin_share` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `featured` int(11) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=210 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.product: ~5 rows (approximately)
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`product_id`, `cat_id`, `product_image`, `type`, `hide`, `added_by`, `approved`, `admin_share`, `product_name`, `brand_id`, `featured`) VALUES
	(205, 1, '60011904089703.jpg', 'Regular', 0, 0, 1, '', 'Whiskey', 1, 0),
	(206, 1, 'wine.jpg', 'Regular', 0, 0, 1, '', 'Wine', 1, 0),
	(207, 1, 'vodka.jpg', 'Regular', 0, 0, 1, '', 'vodka', 1, 0),
	(208, 2, '/image.jpg\'', 'Regular', 0, 1, 1, ' \'', 'Whiskey 1\'', 2, 1),
	(209, 3, '/image.jpg\'', 'Regular', 0, 1, 1, ' \'', 'Vodka 1\'', 3, 1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;


-- Dumping structure for table db1.productvarient
CREATE TABLE IF NOT EXISTS `productvarient` (
  `varient_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'Regular',
  `productIdProductId` int(11) DEFAULT NULL,
  `catIdCatId` int(11) DEFAULT NULL,
  `brandIdBrandId` int(11) DEFAULT NULL,
  PRIMARY KEY (`varient_id`),
  KEY `FK_0297a56d725428472ca7362d1ee` (`productIdProductId`),
  KEY `FK_52836f144421c40c7686a4bab22` (`catIdCatId`),
  KEY `FK_95c2e4306202858463b7eca2181` (`brandIdBrandId`),
  CONSTRAINT `FK_0297a56d725428472ca7362d1ee` FOREIGN KEY (`productIdProductId`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_52836f144421c40c7686a4bab22` FOREIGN KEY (`catIdCatId`) REFERENCES `categories` (`cat_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_95c2e4306202858463b7eca2181` FOREIGN KEY (`brandIdBrandId`) REFERENCES `brand` (`brand_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.productvarient: ~0 rows (approximately)
/*!40000 ALTER TABLE `productvarient` DISABLE KEYS */;
/*!40000 ALTER TABLE `productvarient` ENABLE KEYS */;


-- Dumping structure for table db1.product_images
CREATE TABLE IF NOT EXISTS `product_images` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `type` int(11) NOT NULL DEFAULT '0',
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.product_images: ~0 rows (approximately)
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;


-- Dumping structure for table db1.product_rating
CREATE TABLE IF NOT EXISTS `product_rating` (
  `rate_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_id` int(11) NOT NULL,
  `varient_id` int(11) NOT NULL,
  `rating` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  `hide` varchar(255) NOT NULL,
  PRIMARY KEY (`rate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.product_rating: ~1 rows (approximately)
/*!40000 ALTER TABLE `product_rating` DISABLE KEYS */;
INSERT INTO `product_rating` (`rate_id`, `store_id`, `varient_id`, `rating`, `user_id`, `description`, `created_at`, `updated_at`, `hide`) VALUES
	(1, 6, 169, '5.0', 1, 'Very fast delivery', '2022-03-21 12:49:00', '2022-03-21 12:49:00', '');
/*!40000 ALTER TABLE `product_rating` ENABLE KEYS */;


-- Dumping structure for table db1.product_varient
CREATE TABLE IF NOT EXISTS `product_varient` (
  `varient_id` int(11) NOT NULL AUTO_INCREMENT,
  `productProductId` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `base_mrp` int(11) NOT NULL,
  `base_price` int(11) NOT NULL,
  `cost_price` int(11) NOT NULL,
  `admin_share` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `varient_image` varchar(255) NOT NULL,
  `ean` varchar(255) NOT NULL,
  `approved` int(11) NOT NULL DEFAULT '1',
  `added_by` int(11) NOT NULL DEFAULT '0',
  `total_count` int(11) NOT NULL,
  PRIMARY KEY (`varient_id`),
  KEY `FK_f4efa20adf2249888acdd0ffa1a` (`productProductId`),
  CONSTRAINT `FK_f4efa20adf2249888acdd0ffa1a` FOREIGN KEY (`productProductId`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=218 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.product_varient: ~3 rows (approximately)
/*!40000 ALTER TABLE `product_varient` DISABLE KEYS */;
INSERT INTO `product_varient` (`varient_id`, `productProductId`, `product_id`, `quantity`, `unit`, `base_mrp`, `base_price`, `cost_price`, `admin_share`, `description`, `varient_image`, `ean`, `approved`, `added_by`, `total_count`) VALUES
	(215, NULL, 207, 750, 'ml', 165, 160, 140, 1, 'Not actual image. While we get more information for you, \r\nplease contact retailer in meantime for any product related information', '', '', 1, 0, 150),
	(216, NULL, 207, 500, 'ml', 165, 160, 140, 1, 'Not actual image. While we get more information for you, \r\nplease contact retailer in meantime for any product related information', '', '', 1, 0, 150),
	(217, NULL, 207, 250, 'ml', 165, 160, 140, 1, 'Not actual image. While we get more information for you, \r\nplease contact retailer in meantime for any product related information', '', '', 1, 0, 150);
/*!40000 ALTER TABLE `product_varient` ENABLE KEYS */;


-- Dumping structure for table db1.razorpay_key
CREATE TABLE IF NOT EXISTS `razorpay_key` (
  `key_id` int(11) NOT NULL AUTO_INCREMENT,
  `api_key` varchar(255) NOT NULL,
  PRIMARY KEY (`key_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.razorpay_key: ~0 rows (approximately)
/*!40000 ALTER TABLE `razorpay_key` DISABLE KEYS */;
/*!40000 ALTER TABLE `razorpay_key` ENABLE KEYS */;


-- Dumping structure for table db1.recent_search
CREATE TABLE IF NOT EXISTS `recent_search` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyword` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.recent_search: ~0 rows (approximately)
/*!40000 ALTER TABLE `recent_search` DISABLE KEYS */;
INSERT INTO `recent_search` (`id`, `keyword`, `user_id`) VALUES
	(1, 'johnny walker', 1);
/*!40000 ALTER TABLE `recent_search` ENABLE KEYS */;


-- Dumping structure for table db1.reedem_values
CREATE TABLE IF NOT EXISTS `reedem_values` (
  `reedem_id` int(11) NOT NULL AUTO_INCREMENT,
  `reward_point` int(100) NOT NULL,
  `value` varchar(255) NOT NULL,
  PRIMARY KEY (`reedem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.reedem_values: ~0 rows (approximately)
/*!40000 ALTER TABLE `reedem_values` DISABLE KEYS */;
/*!40000 ALTER TABLE `reedem_values` ENABLE KEYS */;


-- Dumping structure for table db1.referral_points
CREATE TABLE IF NOT EXISTS `referral_points` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `points` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.referral_points: ~0 rows (approximately)
/*!40000 ALTER TABLE `referral_points` DISABLE KEYS */;
/*!40000 ALTER TABLE `referral_points` ENABLE KEYS */;


-- Dumping structure for table db1.reward_points
CREATE TABLE IF NOT EXISTS `reward_points` (
  `reward_id` int(11) NOT NULL AUTO_INCREMENT,
  `min_cart_value` int(100) NOT NULL,
  `reward_point` int(100) NOT NULL,
  PRIMARY KEY (`reward_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.reward_points: ~0 rows (approximately)
/*!40000 ALTER TABLE `reward_points` DISABLE KEYS */;
/*!40000 ALTER TABLE `reward_points` ENABLE KEYS */;


-- Dumping structure for table db1.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  `dashboard` int(11) NOT NULL,
  `tax` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `membership` int(11) NOT NULL,
  `reports` int(11) NOT NULL,
  `notification` int(11) NOT NULL,
  `users` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `product` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `store` int(11) NOT NULL,
  `orders` int(11) NOT NULL,
  `payout` int(11) NOT NULL,
  `rewards` int(11) NOT NULL,
  `delivery_boy` int(11) NOT NULL,
  `pages` int(11) NOT NULL,
  `feedback` int(11) NOT NULL,
  `callback` int(11) NOT NULL,
  `settings` int(11) NOT NULL,
  `reason` int(11) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.roles: ~1 rows (approximately)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`role_id`, `role_name`, `dashboard`, `tax`, `user_id`, `membership`, `reports`, `notification`, `users`, `category`, `product`, `area`, `store`, `orders`, `payout`, `rewards`, `delivery_boy`, `pages`, `feedback`, `callback`, `settings`, `reason`) VALUES
	(1, 'sub admin', 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;


-- Dumping structure for table db1.sec_banner
CREATE TABLE IF NOT EXISTS `sec_banner` (
  `banner_id` int(11) NOT NULL AUTO_INCREMENT,
  `banner_name` varchar(255) NOT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `varient_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `store_id` int(11) NOT NULL,
  `qty_unit` varchar(255) NOT NULL,
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.sec_banner: ~0 rows (approximately)
/*!40000 ALTER TABLE `sec_banner` DISABLE KEYS */;
/*!40000 ALTER TABLE `sec_banner` ENABLE KEYS */;


-- Dumping structure for table db1.service_area
CREATE TABLE IF NOT EXISTS `service_area` (
  `ser_id` int(11) NOT NULL AUTO_INCREMENT,
  `society_name` varchar(255) NOT NULL,
  `society_id` int(11) NOT NULL,
  `delivery_charge` float NOT NULL DEFAULT '0',
  `store_id` int(11) NOT NULL,
  `added_by` int(11) NOT NULL DEFAULT '0',
  `enabled` int(11) NOT NULL DEFAULT '1',
  `city_id` int(11) NOT NULL,
  PRIMARY KEY (`ser_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.service_area: ~0 rows (approximately)
/*!40000 ALTER TABLE `service_area` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_area` ENABLE KEYS */;


-- Dumping structure for table db1.settings
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `value` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.settings: ~0 rows (approximately)
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;


-- Dumping structure for table db1.set_delivery_min
CREATE TABLE IF NOT EXISTS `set_delivery_min` (
  `id` int(11) NOT NULL,
  `minutes` int(110) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.set_delivery_min: ~0 rows (approximately)
/*!40000 ALTER TABLE `set_delivery_min` DISABLE KEYS */;
/*!40000 ALTER TABLE `set_delivery_min` ENABLE KEYS */;


-- Dumping structure for table db1.smsby
CREATE TABLE IF NOT EXISTS `smsby` (
  `by_id` int(11) NOT NULL AUTO_INCREMENT,
  `msg91` int(11) NOT NULL DEFAULT '1',
  `twilio` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`by_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.smsby: ~0 rows (approximately)
/*!40000 ALTER TABLE `smsby` DISABLE KEYS */;
/*!40000 ALTER TABLE `smsby` ENABLE KEYS */;


-- Dumping structure for table db1.society
CREATE TABLE IF NOT EXISTS `society` (
  `society_id` int(11) NOT NULL AUTO_INCREMENT,
  `society_name` varchar(255) NOT NULL,
  `city_id` int(100) NOT NULL,
  PRIMARY KEY (`society_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.society: ~0 rows (approximately)
/*!40000 ALTER TABLE `society` DISABLE KEYS */;
/*!40000 ALTER TABLE `society` ENABLE KEYS */;


-- Dumping structure for table db1.spotlight
CREATE TABLE IF NOT EXISTS `spotlight` (
  `sp_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`sp_id`),
  KEY `store_id` (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.spotlight: ~0 rows (approximately)
/*!40000 ALTER TABLE `spotlight` DISABLE KEYS */;
/*!40000 ALTER TABLE `spotlight` ENABLE KEYS */;


-- Dumping structure for table db1.store
CREATE TABLE IF NOT EXISTS `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `store_name` varchar(255) NOT NULL,
  `employee_name` varchar(255) NOT NULL,
  `store_photo` varchar(255) NOT NULL DEFAULT 'N/A',
  `city` varchar(255) NOT NULL,
  `city_id` int(11) NOT NULL,
  `device_id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `admin_approval` int(11) NOT NULL DEFAULT '1',
  `orders` int(11) NOT NULL DEFAULT '1',
  `store_status` int(11) NOT NULL DEFAULT '1',
  `store_opening_time` varchar(255) NOT NULL,
  `store_closing_time` varchar(255) NOT NULL,
  `time_interval` int(11) NOT NULL,
  `id_type` varchar(255) NOT NULL,
  `id_number` varchar(255) NOT NULL,
  `id_photo` varchar(255) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `admin_share` int(11) NOT NULL,
  `del_range` int(11) NOT NULL,
  `inactive_reason` varchar(255) NOT NULL,
  `compensation` int(11) NOT NULL,
  `compensation_unit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store: ~1 rows (approximately)
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` (`id`, `store_name`, `employee_name`, `store_photo`, `city`, `city_id`, `device_id`, `email`, `password`, `lat`, `lng`, `address`, `admin_approval`, `orders`, `store_status`, `store_opening_time`, `store_closing_time`, `time_interval`, `id_type`, `id_number`, `id_photo`, `phone_number`, `admin_share`, `del_range`, `inactive_reason`, `compensation`, `compensation_unit`) VALUES
	(1, 'dee', 'Siddharth', '/images/store/07-01-2022/wp1828929.jpg', 'Vapi', 1, 'n/a', 'test@gmail.com', '$2y$10$hwYtS88zeQTqGnjhP3W3r.22PMrGt2ldLEjTluFn5vAdRbzitj.aG', '28.7040592', '77.1024902', 'Arizona US', 1, 9, 1, '10:00', '22:00', 60, 'Aadhar Card', '1242135325235', '/images/store/07-01-2022/wp1828929.jpg', 0, 0, 0, '', 0, '%');
/*!40000 ALTER TABLE `store` ENABLE KEYS */;


-- Dumping structure for table db1.store_assign_homecat
CREATE TABLE IF NOT EXISTS `store_assign_homecat` (
  `assign_id` int(11) NOT NULL AUTO_INCREMENT,
  `homecat_id` varchar(500) NOT NULL,
  `cat_id` varchar(500) NOT NULL,
  PRIMARY KEY (`assign_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_assign_homecat: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_assign_homecat` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_assign_homecat` ENABLE KEYS */;


-- Dumping structure for table db1.store_bank
CREATE TABLE IF NOT EXISTS `store_bank` (
  `ac_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_id` int(11) NOT NULL,
  `ac_no` varchar(255) NOT NULL,
  `ifsc` varchar(255) NOT NULL,
  `holder_name` varchar(255) NOT NULL,
  `bank_name` varchar(255) NOT NULL,
  `upi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ac_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_bank: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_bank` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_bank` ENABLE KEYS */;


-- Dumping structure for table db1.store_banner
CREATE TABLE IF NOT EXISTS `store_banner` (
  `banner_id` int(100) NOT NULL AUTO_INCREMENT,
  `banner_name` varchar(255) NOT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `store_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'H',
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_banner: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_banner` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_banner` ENABLE KEYS */;


-- Dumping structure for table db1.store_callback_req
CREATE TABLE IF NOT EXISTS `store_callback_req` (
  `callback_req_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_name` varchar(255) NOT NULL,
  `store_phone` varchar(255) NOT NULL,
  `processed` int(11) NOT NULL DEFAULT '0',
  `date` date NOT NULL,
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`callback_req_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_callback_req: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_callback_req` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_callback_req` ENABLE KEYS */;


-- Dumping structure for table db1.store_delivery_boy
CREATE TABLE IF NOT EXISTS `store_delivery_boy` (
  `dboy_id` int(11) NOT NULL AUTO_INCREMENT,
  `boy_name` varchar(255) NOT NULL,
  `boy_phone` varchar(255) NOT NULL,
  `boy_city` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `device_id` varchar(255) DEFAULT NULL,
  `boy_loc` varchar(255) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `store_id` int(11) NOT NULL,
  `added_by` varchar(255) NOT NULL DEFAULT 'store',
  `ad_dboy_id` int(11) NOT NULL DEFAULT '0',
  `rem_by_admin` int(11) NOT NULL DEFAULT '0',
  `id_no` varchar(255) DEFAULT NULL,
  `id_photo` varchar(255) DEFAULT NULL,
  `id_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`dboy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_delivery_boy: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_delivery_boy` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_delivery_boy` ENABLE KEYS */;


-- Dumping structure for table db1.store_doc
CREATE TABLE IF NOT EXISTS `store_doc` (
  `doc_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `document` varchar(255) NOT NULL,
  PRIMARY KEY (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_doc: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_doc` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_doc` ENABLE KEYS */;


-- Dumping structure for table db1.store_driver_incentive
CREATE TABLE IF NOT EXISTS `store_driver_incentive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `incentive` varchar(255) NOT NULL,
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_driver_incentive: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_driver_incentive` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_driver_incentive` ENABLE KEYS */;


-- Dumping structure for table db1.store_earning
CREATE TABLE IF NOT EXISTS `store_earning` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `store_id` int(11) NOT NULL,
  `paid` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_earning: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_earning` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_earning` ENABLE KEYS */;


-- Dumping structure for table db1.store_homecat
CREATE TABLE IF NOT EXISTS `store_homecat` (
  `homecat_id` int(200) NOT NULL,
  `homecat_name` varchar(500) NOT NULL,
  `orderr` varchar(200) NOT NULL,
  `homecat_status` varchar(200) NOT NULL,
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`homecat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_homecat: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_homecat` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_homecat` ENABLE KEYS */;


-- Dumping structure for table db1.store_notification
CREATE TABLE IF NOT EXISTS `store_notification` (
  `not_id` int(11) NOT NULL AUTO_INCREMENT,
  `not_title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `not_message` longtext NOT NULL,
  `store_id` int(11) NOT NULL,
  `read_by_store` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`not_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_notification: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_notification` ENABLE KEYS */;


-- Dumping structure for table db1.store_orders
CREATE TABLE IF NOT EXISTS `store_orders` (
  `store_order_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `varient_image` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `varient_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `order_cart_id` varchar(255) NOT NULL,
  `store_approval` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `tx_per` int(11) NOT NULL,
  `tx_name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `store_order_status` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `total_mrp` int(11) NOT NULL,
  `order_date` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price_without_tax` int(11) NOT NULL,
  `tx_price` int(11) NOT NULL,
  `store_confirmed_at` varchar(255) NOT NULL,
  PRIMARY KEY (`store_order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_orders: ~1 rows (approximately)
/*!40000 ALTER TABLE `store_orders` DISABLE KEYS */;
INSERT INTO `store_orders` (`store_order_id`, `product_name`, `varient_image`, `unit`, `varient_id`, `qty`, `order_cart_id`, `store_approval`, `store_id`, `tx_per`, `tx_name`, `type`, `store_order_status`, `quantity`, `price`, `total_mrp`, `order_date`, `description`, `price_without_tax`, `tx_price`, `store_confirmed_at`) VALUES
	(4, 'Wine', '/images/product/07-01-2022/wp1828929.jpg', 'ml', 211, 2, '1', 1, 1, 0, 'CGST', 'Regular', 'Pending', 0, 0, 0, '', '', 0, 0, '');
/*!40000 ALTER TABLE `store_orders` ENABLE KEYS */;


-- Dumping structure for table db1.store_products
CREATE TABLE IF NOT EXISTS `store_products` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `varient_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `mrp` float NOT NULL,
  `price` float NOT NULL,
  `cost_price` float NOT NULL,
  `admin_share` float DEFAULT NULL,
  `min_ord_qty` int(11) NOT NULL DEFAULT '1',
  `max_ord_qty` int(11) NOT NULL DEFAULT '100',
  PRIMARY KEY (`p_id`),
  KEY `varient_id` (`varient_id`),
  KEY `store_id` (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_products: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_products` ENABLE KEYS */;


-- Dumping structure for table db1.store_society
CREATE TABLE IF NOT EXISTS `store_society` (
  `store_society_id` int(11) NOT NULL AUTO_INCREMENT,
  `society_id` int(100) NOT NULL,
  `store_id` int(100) NOT NULL,
  PRIMARY KEY (`store_society_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.store_society: ~0 rows (approximately)
/*!40000 ALTER TABLE `store_society` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_society` ENABLE KEYS */;


-- Dumping structure for table db1.tags
CREATE TABLE IF NOT EXISTS `tags` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `tag` varchar(255) NOT NULL,
  PRIMARY KEY (`tag_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.tags: ~0 rows (approximately)
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;


-- Dumping structure for table db1.tax_types
CREATE TABLE IF NOT EXISTS `tax_types` (
  `tax_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`tax_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.tax_types: ~0 rows (approximately)
/*!40000 ALTER TABLE `tax_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `tax_types` ENABLE KEYS */;


-- Dumping structure for table db1.tbl_referral
CREATE TABLE IF NOT EXISTS `tbl_referral` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `referral_by` int(11) NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.tbl_referral: ~0 rows (approximately)
/*!40000 ALTER TABLE `tbl_referral` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_referral` ENABLE KEYS */;


-- Dumping structure for table db1.tbl_top_cat
CREATE TABLE IF NOT EXISTS `tbl_top_cat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_id` int(11) NOT NULL,
  `cat_rank` int(11) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.tbl_top_cat: ~0 rows (approximately)
/*!40000 ALTER TABLE `tbl_top_cat` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_top_cat` ENABLE KEYS */;


-- Dumping structure for table db1.tbl_web_setting
CREATE TABLE IF NOT EXISTS `tbl_web_setting` (
  `set_id` int(11) NOT NULL AUTO_INCREMENT,
  `icon` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `favicon` varchar(255) NOT NULL,
  `number_limit` int(11) NOT NULL,
  `last_loc` int(11) NOT NULL DEFAULT '0',
  `footer_text` longtext,
  `live_chat` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`set_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.tbl_web_setting: ~0 rows (approximately)
/*!40000 ALTER TABLE `tbl_web_setting` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_web_setting` ENABLE KEYS */;


-- Dumping structure for table db1.time_slot
CREATE TABLE IF NOT EXISTS `time_slot` (
  `time_slot_id` int(11) NOT NULL AUTO_INCREMENT,
  `open_hour` varchar(255) NOT NULL,
  `close_hour` varchar(255) NOT NULL,
  `time_slot` int(11) NOT NULL,
  PRIMARY KEY (`time_slot_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.time_slot: ~0 rows (approximately)
/*!40000 ALTER TABLE `time_slot` DISABLE KEYS */;
/*!40000 ALTER TABLE `time_slot` ENABLE KEYS */;


-- Dumping structure for table db1.trending_search
CREATE TABLE IF NOT EXISTS `trending_search` (
  `trend_id` int(11) NOT NULL AUTO_INCREMENT,
  `varient_id` int(11) NOT NULL,
  PRIMARY KEY (`trend_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.trending_search: ~0 rows (approximately)
/*!40000 ALTER TABLE `trending_search` DISABLE KEYS */;
/*!40000 ALTER TABLE `trending_search` ENABLE KEYS */;


-- Dumping structure for table db1.twilio
CREATE TABLE IF NOT EXISTS `twilio` (
  `twilio_id` int(11) NOT NULL AUTO_INCREMENT,
  `twilio_sid` varchar(255) NOT NULL,
  `twilio_token` varchar(255) NOT NULL,
  `twilio_phone` varchar(255) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`twilio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.twilio: ~0 rows (approximately)
/*!40000 ALTER TABLE `twilio` DISABLE KEYS */;
/*!40000 ALTER TABLE `twilio` ENABLE KEYS */;


-- Dumping structure for table db1.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `device_id` varchar(255) NOT NULL,
  `user_image` varchar(255) NOT NULL,
  `user_city` int(11) NOT NULL,
  `user_area` int(11) NOT NULL,
  `otp_value` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `rewards` int(11) NOT NULL,
  `is_verified` int(11) NOT NULL,
  `block` int(11) NOT NULL,
  `app_update` int(11) NOT NULL,
  `facebook_id` varchar(255) NOT NULL,
  `referral_code` varchar(255) NOT NULL,
  `membership` int(11) NOT NULL,
  `email_verified_at` varchar(255) NOT NULL,
  `remember_token` varchar(255) NOT NULL,
  `wallet` int(11) NOT NULL,
  `reg_date` varchar(255) NOT NULL,
  `mem_plan_start` varchar(255) NOT NULL,
  `mem_plan_expiry` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- Dumping data for table db1.users: ~1 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `user_phone`, `device_id`, `user_image`, `user_city`, `user_area`, `otp_value`, `status`, `rewards`, `is_verified`, `block`, `app_update`, `facebook_id`, `referral_code`, `membership`, `email_verified_at`, `remember_token`, `wallet`, `reg_date`, `mem_plan_start`, `mem_plan_expiry`, `created_at`, `updated_at`) VALUES
	(6, 'Krishna Chaitanya', 'netichaitu12345@gmail.com', '$2b$10$eYHZytBNM8QWGar4f0C5je7KH0kRPMR9n3L2LFxitj8fm3ajRzSeO', '+918655025343', 'string', 'N/A', 1, 1, '', 1, 0, 1, 2, 1, '', 'CHEV3NEA', 0, '2022-12-02 12:00:00', 'loggedIn', 0, '2022-02-01', '2022-02-01', '2022-02-01', '2022-02-01 11:59:29', '2022-02-01 11:59:29'),
	(22, 'chetan singh rajput', 'www.chetanrajput4722@gmail.com', '$2b$10$psOkprnV2DNy9XQeen6a/OG0CtB4bfFMn9TIgXYtzkGXm09yg3wwu', '9898014722', 'ABC', '/userImg', 1, 1, '', 1, 0, 1, 2, 1, 'sdfsfsf', 'CHEV3NEA', 0, '2022-12-02 12:00:00', '', 0, '2022-02-01', '2022-02-01', '2022-02-01', '2022-02-01 11:59:29', '2022-02-01 11:59:29'),
	(23, 'Khaleel', 'khaleelmd.cloud@gmail.com', '$2b$10$9cw1Amhp6vw0eutsp0CUdOGqXrJ9CzXqtinVugsrxKVBWnOWr/kTm', '+918142220916', 'string', 'N/A', 1, 1, '', 1, 0, 1, 2, 1, '', 'CHEV3NEA', 0, '2022-12-02 12:00:00', '', 0, '2022-02-01', '2022-02-01', '2022-02-01', '2022-02-01 11:59:29', '2022-02-01 11:59:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;


-- Dumping structure for table db1.user_notification
CREATE TABLE IF NOT EXISTS `user_notification` (
  `noti_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `noti_title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `noti_message` longtext NOT NULL,
  `read_by_user` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`noti_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.user_notification: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_notification` ENABLE KEYS */;


-- Dumping structure for table db1.user_support
CREATE TABLE IF NOT EXISTS `user_support` (
  `supp_id` int(11) NOT NULL AUTO_INCREMENT,
  `query` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  PRIMARY KEY (`supp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.user_support: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_support` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_support` ENABLE KEYS */;


-- Dumping structure for table db1.wallet_recharge_history
CREATE TABLE IF NOT EXISTS `wallet_recharge_history` (
  `wallet_recharge_history` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `recharge_status` varchar(255) NOT NULL,
  `amount` float NOT NULL,
  `payment_gateway` varchar(255) NOT NULL,
  `date_of_recharge` date NOT NULL,
  PRIMARY KEY (`wallet_recharge_history`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.wallet_recharge_history: ~0 rows (approximately)
/*!40000 ALTER TABLE `wallet_recharge_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `wallet_recharge_history` ENABLE KEYS */;


-- Dumping structure for table db1.wishlist
CREATE TABLE IF NOT EXISTS `wishlist` (
  `wish_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `varient_id` int(11) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `mrp` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `varient_image` varchar(255) NOT NULL,
  `store_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`wish_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table db1.wishlist: ~0 rows (approximately)
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
