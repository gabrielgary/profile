
create database profile_db;

create table users(
    code_user serial primary key,
    name_user varchar(100) not null,
    email_user varchar(150) not null unique,
    title_user varchar(200),
    description_user text,
    password_user text,
    profile_user text,
    social_user jsonb
);
create table projects(
    code_project serial primary key,
    title_project varchar(200) not null, 
    description_project text not null, 
    tools_projects jsonb  not null,
    likes int
);
create table message(
    code_message serial primary key,
    title_message varchar(500) not null,
    email_message varchar(100) not null,
    content_message text not null,

);
create table skills(
    code_skill serial primary key,
    title_skill varchar(100),
    percentual_experience decimal(5,2)
)