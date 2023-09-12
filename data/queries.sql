SELECT * FROM information_schema.tables WHERE table_name='product_varient'

show columns from recent_search rs 
alter table db1.brand 
modify column brand_id int(11) auto_increment

update db1.brand
set image = '/images/brand/09-10-2021/johnny_walker.jpg'

delete from users
	 
select * from db1.product pv  
select * from user

alter table db1.orders
add column gift_message varchar(255) default ''
add column varient_id int(11) NOT NULL
alter table db1.orders
add column product_id int(11) NOT NULL
alter table db1.orders
add column quantity int(11) NOT null
update db1.orders
set dboy_incentive = 1,updated_at ='2022-10-11 12:12:12.000', is_gift = false
where product_id = 205

update db1.product 
set featured = 1
where product_id > 207

delete from product_varient 
where varient_id < 215

alter table db1.brand 
add column hide int(1) default 0
drop table user
where cat_id in (4,5,6)

alter table product 
add column featured int(1)

alter table product_varient 
drop column productProductId

select * from roles

alter table store 
add column compensation int(10)
alter table store 
add column compensation_unit varchar(10)

update users
set user_phone = '+918655025343'
where id = 6

insert into cart values(0, 206, 210, 22, 3)

alter table roles 
change id user_id int(11)

alter table product_rating 
add column hide int(1) default 0
select * from product_rating pr 



