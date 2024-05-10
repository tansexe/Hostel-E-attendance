# Hostel-E-attendance

## Description:
Designed a basic project, a simple website integrated into the ML model for tracking the attendance of the hostellers. 

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

### Screenshots 
<img width="957" alt="image" src="(https://ik.imagekit.io/Eattendancehostel23/E-attendance-Hostel/Screenshot%202024-05-10%20113112.png?updatedAt=1715321112421)">


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


## Troubleshooting
If you encounter any issues while using the Hostel-E-attendance, consider the following troubleshooting steps:
1. Check Dependencies: Ensure you have installed all required dependencies.
2. Review Error Messages: If you encounter any errors, carefully review the error messages to identify the source of the issue.

## References 
1. JavaScript API for Face Recognition in the Browser with tensorflow.js. [Link](https://itnext.io/face-api-js-javascript-api-for-face-recognition-in-the-browser-with-tensorflow-js-bcc2a6c4cf07)
2. Github Repository of faceAPI.js. [Link](https://github.com/justadudewhohacks/face-api.js)
3. Github Repository of face Detection. [Link](https://github.com/WebDevSimplified/Face-Detection-JavaScript)
