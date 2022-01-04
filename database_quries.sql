use db_zsrealty;
desc tbl_app_info;
desc tbl_customer;
alter table tbl_customer 
modify customer_phn varchar(13) not null; 
desc tbl_emp;
alter table tbl_emp 
modify emp_phn varchar(13) not null;
desc tbl_group_info;
rename table tbl_group_info to tbl_grp_info;
desc tbl_grp_project;
desc tbl_room_details;
desc tbl_room_info;
select * from tbl_grp_project where project_finish_date='finished';
alter table tbl_customer
add customer_pass varchar(20) not null after customer_name;
update	tbl_customer
set customer_pass='13579' where customer_id=2;
/*
insert quries
*/
insert into tbl_grp_project(project_name,project_finish_date,grp_id,project_loc,project_status) values('Siddha Eden Lakeville','2023',2,'Baranagar','ONGOING');
