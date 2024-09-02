# NodeKickStart ✨
A comprehensive backend boilerplate for Express.js that simplifies the setup of secure applications. Includes features such as user authentication, JWT-based login, password reset and management, and user account deletion. Ideal for quickly starting new projects with a solid foundation, reducing repetitive setup tasks, and focusing on application-specific logic.

## Project Description 🖋️
Nodekickstart is a streamlined backend starter kit designed to accelerate the development of secure and scalable applications. This boilerplate provides essential authentication features out-of-the-box, including user registration, JWT-based login, password reset, and user account management.

## Key Features 📝
- **User Authentication**: Secure user registration and login using JWT tokens for session management.
* **Password Management**: Implement password reset functionality via email, allowing users to recover and change their passwords easily.
+ **User Management**: Enable user account deletion and handle user-related operations with ease.

**Technologies Used:** 💻
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* **MongoDB**: A NoSQL database for storing user data and handling authentication tokens.
+ **JWT (JSON Web Tokens)**: For secure and scalable session management.
* **Nodemailer**: To handle email functionality for password resets.

**Challenges Faced:** 💪
- Implementing secure password handling and authentication flows.
* Integrating email functionality for password reset without exposing sensitive information.
+ Ensuring the boilerplate is easy to extend and modify according to specific project needs.

**Future Enhancements:** 🔮

- Adding email verification for new user registrations.
* Implementing rate limiting and additional security measures to prevent abuse.
+ Enhancing user management with roles and permissions.

This boilerplate is crafted to serve as a solid foundation for new projects, allowing developers to focus on building unique application features rather than reinventing basic authentication functionality.

## How To Install & Run the Project 🚀
Follow these steps to set up and run the Express Auth Boilerplate on your local machine:
1. **Clone the Repository:**  `git clone https://github.com/Ruchi0903/NodeKickStart.git`
2. **Navigate to the Project Directory:**  `cd NodeKickStart`
3. **Install Dependencies:**  `npm install`
4. **Set Up Environment Variables:**  Create a .env file in the root directory of the project. Use the .env.example file as a reference to add your environment-specific variables.
5. **Start the Development Server:** `npm start` This will start the server on port 5000. You can change the port by modifying the PORT variable in your .env file.
6. **Testing the API Endpoints:**  Use tools like Insomnia or Postman to test the API endpoints. Refer to the API routes in routes folder.

**Note:**  Make sure to replace placeholders in the .env file with your actual configuration values.

## How to Use the Project 👩🏽‍💻
Follow these instructions to use and interact with the project:
**API Endpoints**
1. **User Registration:**
- Endpoint: POST /api/v1/auth/register
* request body:
`{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "securePassword123"
}`  
+ Description: Registers a new user with the provided credentials.
2. **User Login:**
- Endpoint: POST /api/v1/auth/login
* request body:
`{
  "email": "user@example.com",
  "password": "securePassword123"
}`
+ Description: Logs in the user and returns a JWT token for authentication.
3. **Request Password Reset:**
- Endpoint: POST /api/v1/reset/request-password-reset
* request body:
`{
  "email": "user@example.com"
}`
+ Description: Sends a password reset token to the user's email.
4. **Reset Password:**
- Endpoint: POST /api/v1/reset/reset-password
* request body:
`{
  "token": "resetTokenFromEmail",
  "newPassword": "newSecurePassword123"
}`
+ Description: Resets the user's password using the provided reset token.
5. **Logout:**
- Endpoint: POST /api/v1/auth/logout
* Description: Logs out the user by clearing the authentication token.
6. **Delete User:**
- Endpoint: DELETE /api/v1/auth/delete
* Authorization: Bearer token required
+ Description: Deletes the currently authenticated user.














