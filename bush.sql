SET NAMES UTF8;
DROP DATABASE IF EXISTS dingdang;
CREATE DATABASE dingdang CHARSET=UTF8;
USE dingdang;
#用户表，存储注册用户的信息，登录时校验
CREATE TABLE dd_user(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32) NOT NULL UNIQUE,
	upwd VARCHAR(32) NOT NULL,
	email VARCHAR(64),
	phone VARCHAR(16) NOT NULL UNIQUE,
	h_p_path VARCHAR(128) ,
	user_name VARCHAR(32),
	gender BOOL
	
);

#收货地址表
CREATE TABLE dd_recive_address(
	address_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT NOT NULL,#连接到用户表的user_id
	receiver_name VARCHAR(16) NOT NULL,
	province VARCHAR(16),#省
	city VARCHAR(16),#市
	country VARCHAR(16),#县
	address VARCHAR(128),#详细地址
	cellphone VARCHAR(16),
	fixedphone VARCHAR(16),
	postcode CHAR(6),
	tag VARCHAR(16),
	is_default BOOL
);

#购物车表
CREATE TABLE dd_shopping_cart(
	cart_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT NOT NULL,#连接到用户表的user_id
	product_id INT,#连接到商品表的product_id
	count INT
);

#订单表
CREATE TABLE dd_order(
	order_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,#连接到用户表的user_id
	address_id INT,#连接到地址表的address_id
	status SMALLINT,#存储订单状态
	order_time BIGINT,
	pay_time BIGINT,
	deliver_time BIGINT,
	received_time BIGINT
);

#订单详情表
CREATE TABLE dd_order_detail(
	order_detail_id INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT,#连接到订单表
	product_id INT,#连接到商品表
	count INT
);

#书籍分类表
CREATE TABLE dd_book_family(
	family_id INT PRIMARY KEY AUTO_INCREMENT,
	family_name VARCHAR(32)
);
#书籍细分类表(例如：文学类下又分为文集、纪实文学、文学理论)
CREATE TABLE dd_book_family_detail(
	family_detail_id INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,#关联到书籍分类表
	detail_name VARCHAR(30) #细分类的名称
);

#书籍表
CREATE TABLE dd_book(
	book_id INT PRIMARY KEY AUTO_INCREMENT,
	shelf_time BIGINT,#书籍上架时间
	family_detail_id INT,#连接到细分类表，确定具体是哪个类型
#	family_id INT,#连接到书籍分类表
#	detail_family VARCHAR(30),#书籍分类下详细的分类
	title VARCHAR(100),#标题
	brief_intro VARCHAR(200),#简介,在列表页显示
	author VARCHAR(30),#作者
	press VARCHAR(50),#出版社
	time INT, #出版时间
	price DECIMAL(6,2),
	discount DECIMAL(3,2),#折扣百分比
	size VARCHAR(20),#书本大小
	paper VARCHAR(15),#纸张
	pack VARCHAR(15),#包装
	suit BOOL,#是否套装
	isbn VARCHAR(50),#国际标准书号
	sold_count INT,#已经出售的数量
	is_onsale SMALLINT #是否促销
);

#书籍图片表
CREATE TABLE dd_book_pic(
	b_p_id INT PRIMARY KEY AUTO_INCREMENT,
	book_id INT,#连接到书本列表，对应相应的书本
	sm VARCHAR(128),#小图片路径
	md VARCHAR(128),#中等图片路径
	lg VARCHAR(128)#大图片路径
);

#轮播图
CREATE TABLE dd_index_cast(
	cast_id INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),#轮播图的路径
	title VARCHAR(80),#对图片的描述
	href VARCHAR(50)#图片链接
);

#评论表
CREATE TABLE comment(
	com_id INT PRIMARY KEY AUTO_INCREMENT,
	book_id INT,#对应图书的评论
	com_detail VARCHAR(200),#评论详情
	comment SMALLINT,#1-好评，2-中评，3-差评
	comment_img VARCHAR(128)#评论区图片路径
);

#首页商品表
CREATE TABLE dd_index_prduct(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(66),#商品标题
	detail VARCHAR(300),#商品详情
	pic VARCHAR(128)#存储图片路径
);





























