# Hostel-E-attendance

## Description:
Designed a simple website integrated into the ML model for tracking the attendance of the hostellers. 

## Tech Stack Used: 
1. MERN Stack 
2. Face API 

## Flow Chart of the Project: 
![Web Dev Project-Students Flow](https://github.com/tansexe/Hostel-E-attendance/assets/112875959/9c471938-f2c1-4667-b843-341ab36506ac)

## Running the project locally: 
- Clone the repository:

```
git clone https://github.com/tansexe/Hostel-E-attendance.git
```

- Install dependencies:

```
cd Hostel-E-attendance
npm install
```

- Start the server:

```
npm start
```

The server will listen on port 3000 by default.


### After Cloning, the Explorer will have these folders:
1. Backend-E-Attendance 
2. Face-Detection
3. Frontend-Vite

## Frontend Documentation:
The Frontend-Vite folder contains the folder for the frontend. 

At the heart of the Frontend-Vite folder is the src folder. Within this folder, several subfolders have important roles:

1. Assets: This folder houses all the images utilized in the project.
2. Components: This folder includes reusable elements such as buttons, navigation bars, and headers.
3. Pages: This folder encompasses all the web pages of the website.

Additionally, App.jsx enlists the components to be rendered from different routes. For the routing of pages in React, React-Router-Dom, a third-party library, is integrated.

## Backend Documentation: 
The Backend-E-attendance folder contains the folder for the backend.

### Routing Guide

This project has the following endpoints:

### User

| Methods | Route                 | Description              | Request                                        | Response                                                           |
| ------- | --------------------- | ------------------------ | ---------------------------------------------- | ------------------------------------------------------------------ |
| GET    | `/users/getAllUsers` | To get the info of all users.            | _id, Username, RollNo, Hostel, Email, Password, Phone                          | All the User details are sent.  |                                                                   
| POST     | `/users/Signup`       | Registering all the users            | Username, RollNo, Hostel, Email, Password, Phone  | success: True/False |
| POST   | `/users/Login`     |  Logging all the users |    email, password, Username | message: User found or not| 

## Screenshots 

### Home Page 
<img width="957" alt="image" src="https://github.com/tansexe/Hostel-E-attendance/assets/112875959/afc83d99-867a-48dc-b37f-2e27488055c2">

### Register Page
<img width="960" alt="image" src="https://github.com/tansexe/Hostel-E-attendance/assets/112875959/059552a3-0353-4461-b512-26695738d19a">

### Login Page
![image](https://github.com/tansexe/Hostel-E-attendance/assets/112875959/569a5c35-fb9f-439a-a38f-4cba9094b1b5)

### Face  Detection Model 
<img width="960" alt="image" src="https://github.com/tansexe/Hostel-E-attendance/assets/112875959/f80e2ab5-8bd6-492c-9d07-a44afbd615e6">


## Troubleshooting
If you encounter any issues while using the Hostel-E-attendance, consider the following troubleshooting steps:
1. Check Dependencies: Ensure you have installed all required dependencies.
2. Review Error Messages: If you encounter any errors, carefully review the error messages to identify the source of the issue.

## References 
1. JavaScript API for Face Recognition in the Browser with tensorflow.js. [Link](https://itnext.io/face-api-js-javascript-api-for-face-recognition-in-the-browser-with-tensorflow-js-bcc2a6c4cf07)
2. Github Repository of faceAPI.js. [Link](https://github.com/justadudewhohacks/face-api.js)
3. Github Repository of face Detection. [Link](https://github.com/WebDevSimplified/Face-Detection-JavaScript)
