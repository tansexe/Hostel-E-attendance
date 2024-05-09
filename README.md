# Hostel-E-attendance

### Description:
Designed a basic project, a simple website integrated into the ML model for tracking the attendance of the hostellers. 

### Running the project locally: 
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


#### After Cloning, the Explorer will have these folders:
1. Backend-E-Attendance 
2. Face-Detection
3. Frontend-Vite

### Frontend Documentation:
The Frontend-Vite folder contains the folder for the frontend. 

At the heart of the Frontend-Vite folder is the src folder. Within this folder, several subfolders have important roles:

1. Assets: This folder houses all the images utilized in the project.
2. Components: This folder includes reusable elements such as buttons, navigation bars, and headers.
3. Pages: This folder encompasses all the web pages of the website.

Additionally, App.jsx enlists the components to be rendered from different routes. For the routing of pages in React, React-Router-Dom, a third-party library, is integrated.

### Backend Documentation: 
The Backend-E-attendance folder contains the folder for the backend.

### Routing Guide

This project has the following endpoints:

### User

| Methods | Route                 | Description              | Request                                        | Response                                                           |
| ------- | --------------------- | ------------------------ | ---------------------------------------------- | ------------------------------------------------------------------ |
| GET    | `/users/getAllUsers` | To get the info of all users.            | name, email, message                           | 'Send' if the mail was send successfully    |                                                                   
| GET     | `/api/user/add`       | Add User                 | name, email, image, roll, branch, year, number | message: "User Added", user {name, email, pic, roll, year, branch} |
| GET     | `/api/user/`          | Get the Events (of User) | email                                          | { users, userevents: events }                                      |
