# REST API with ExpressJS
REST API made with ExpressJS

## Table of Contents
* [General Info](#general-information)
* [Setup](#setup)
* [Usage](#usage)
* [Contact](#contact)


## General Information

With this REST API you can get, post, update and delete data. To make this actions, you need to register and login to get a valid token. You need to send that token in your request header to get/post data.

I made this REST API to simulate an Ice Cream Shop. It is possible add/edit/delete ice cream flavours and every flavour can have photos associated. This API is made to be consumed by a backoffice frontend.

## Setup
To run this Rest API, you need to download and unzip the code. If you don´t have NodeJS, you need to [install it first](https://nodejs.org/en/).

Open a terminal command in API folder and run the follow command (to install all dependencies):
```
npm i
```

After you run this command to install all dependencies, you should run the follow command:
```
npm start
```
Now you have a local server running which allow you test the API.

## Usage

After you start the API, i recommend you to test it first.

To test this API, i recommend that you install [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/download). I use Insomnia but feel free to use whatever you want.

### API Resources:
------
- Home;
- Users;
- Token;
- Flavours;
- Files

### API Endpoints:
------
### Home
```
{your_url}/
```
**HTTP Methods available:**
- Get - display a welcome message to confirm you are connected with it;

### Users Resource
```
{your_url}/users
```
**HTTP Methods available:**
- Get - get all users registered;
- Post - create an account. You need the follow json body in your request:
```
{
	"name": "your name",
	"password": "12345678",
	"email": "your_email@teste.com"
}
```
- Put - edit a user (already logged in) account. You need to send json body in your request. You can send just name, password or email. You can send all of that in json body.
- Delete - delete a user logged in;


### Token Resource
```
{your_url}/token
```
**HTTP Methods available:**
- Post



## Contact
If you have any question, feel free to [contact me](https://www.linkedin.com/in/lu%C3%ADs-costa-793a2414b/)

