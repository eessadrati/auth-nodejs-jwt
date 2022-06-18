# auth-nodejs-jwt
This project is a sample implementation of an authentication system that uses JSON Web Token (JWT).
It is a REST API backend using nodejs, express and mongoDB as a database. The access token stored in the cookie.


## Features
* Basic Authentication (Register/Login with hashed password).
* JWT Tokens.
* get user,delete user and update user information.
*  Included CORS.

## Project structure
```bash
/
│
├──── config/
│       └── database.js
├──── middleware/
│       └── Auth.js
├──── models/
│       └── User.js
├─── node_modules/
│   
├── routes/
│       ├── auth.js      
│       └── users.js 
├── .env                          * .env  file
├── .gitignore                    * git ignore file
├── index.js                      * Entry point of our Node's app
├── package.json                  * Defines our JavaScript dependencies
├── package-lock.json             * Defines our exact JavaScript dependencies tree
└── README.md 
```
## APIs
 ### Auth Route
  #### Register
  
  `POST /api/auth/register`
  ```
  {
    username,
    email,
    password
  }
  ```
*Description*: creates a new user.th Password is stored in hashed format

#### Login
`POST /api/auth/login`

{
    email,
    password
}
*Description*: logs in to the server. jwt token will be stored in the cookie  
so that user still have access to the token in a secure way even after refreshing the page
 #### Logout
`GET /api/auth/logout`

*Description*: delete jwt token from the cookie
 
* you can find out the rest of the APIs while using the project 
 
 
## Project setup
Make sure you have the latest stable version of Node.js installed
### How to use this code?
* Clone this repository 
```bash
 git clone https://github.com/keynavas/auth-nodejs-jwt.git
```
or download repository  as a ZIP file and uncompress it to your desired directory   <br/>  
* Navigate into the folder
```bash
cd auth-nodejs-jwt
```
* Install NPM dependencies
```bash
npm install
```
### .env file 
create .env file that contains:
```bash
  MONGO_URI=mongoDB_URI
  JWT_SECRET=jwt secret key
  PORT=5000
```
## Run the server
```bash
node index.js
```
Or use nodemon for live-reload
```bash
 npm start
```
