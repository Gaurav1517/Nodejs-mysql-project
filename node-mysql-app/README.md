##

Firstly create directories and file from this script. 
@echo off

REM Create the main directory
mkdir my-nodejs-app

REM Create backend directories and files
mkdir my-nodejs-app\backend
mkdir my-nodejs-app\backend\routes
mkdir my-nodejs-app\backend\controllers
mkdir my-nodejs-app\backend\models

type nul > my-nodejs-app\backend\app.js
type nul > my-nodejs-app\backend\routes\userRoutes.js
type nul > my-nodejs-app\backend\controllers\userController.js
type nul > my-nodejs-app\backend\models\db.js
type nul > my-nodejs-app\backend\package.json

REM Create frontend directories and files
mkdir my-nodejs-app\frontend
mkdir my-nodejs-app\frontend\public
mkdir my-nodejs-app\frontend\public\css
mkdir my-nodejs-app\frontend\public\js
mkdir my-nodejs-app\frontend\views

type nul > my-nodejs-app\frontend\public\css\styles.css
type nul > my-nodejs-app\frontend\public\js\app.js
type nul > my-nodejs-app\frontend\views\index.html
type nul > my-nodejs-app\frontend\views\add-user.html
type nul > my-nodejs-app\frontend\views\edit-user.html

REM Create the README.md file
type nul > my-nodejs-app\README.md

echo Directory structure and files created successfully.
###########################################
nstall Dependencies

Run the following commands in the backend folder:

npm init -y
npm install express body-parser mysql2 cors


############################################
Insall mysql databse

Database Schema

Run the following SQL queries to set up your database:

CREATE DATABASE userdb;
USE userdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);


Do CHANGES IN db.js 
host: 'localhost', // Your database server
    user: 'sysops', // Your database username
    password: 'sysops', // Your databse password.
    database: 'userdb' //The database you created
##############################################

Start the Backend:

cd backend
node app.js