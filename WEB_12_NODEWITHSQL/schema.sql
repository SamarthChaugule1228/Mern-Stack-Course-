create table user (
    id varchar(50) primary key unique ,
    username  varchar(100) unique ,
    email varchar(100)  not null unique ,
    password varchar(100) not null
);