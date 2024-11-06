## TaskListFull
**(TBD) The functional documentation will be added to the WIKI, and the project documentation will be added to the Readme.**

### Directory Architecture

| **Structure** | **Description** |
| ----------------------- | --------- |
| `/ taskListFull`           | `root of the project` |
| `/ - / backend`                | `root of the backend` |
| `/ - / - /node_modules`         | `configuration folder//ignored by git` |
| `/ - / - /src`                  | `stores the main source code of the application` |
| `/ - / - / - /controllers`         | `stores the logic that processes requests and interacts with data` |
| `/ - / - / - /middlewares`         | `stores middleware functions that process requests` |
| `/ - / - / - /models`              | `contains data definitions, business logic, and interactions with the database` |
| `/ - / - / - /app.js`              | `entry point of the application, where essential components are initialized` |
| `/ - / - / - /router.js`           | `defines and manages the application routes` |
| `/ - / - / - /server.js`           | `responsible for configuring and starting the web server` |
| `/ - / - /.env`                | `environment variables//ignored by git` |
| `/ - / - /.env.example`        | `example of environment variables` |
| `/ - / - /eslint.config.json`  | `ensures that all JavaScript code follows style standards and best practices` |
| `/ - / - /package.json`        | `manages dependencies, scripts, and metadata` |
| `/ - / - /package-lock.json`   | `records the exact versions of the project dependencies` |
| `/ - / frontend`               | `root of the frontend` |
| `/ - / - /css`                  | `maintain organization, scalability of files` |
| `/ - / - / - /style.css`           | `defines the appearance and visual layout` |
| `/ - / - /js`                   | `maintain organization, scalability of files` |
| `/ - / - / - /script.js`           | `stores and executes JavaScript code` |
| `/ - / - /index.html`          | `main file of the website` |
| `/ - /.gitignore`             | `files and/or folders that should be ignored by Git` |
| `/ - /README.MD`             | `documentation and instructions for the project` |  

### **Development tools**:
* JavaScript ECMAScript (ES2014)
* CSS 3
* HTML 5
* Express 4.21.1
* Mysql2 3.11.3

### **Dependencies**:
* dotenv: 16.4.5
* @eslint/js: 9.14.0
* eslint: 9.14.0
* globals: 15.12.0
* nodemon: 3.1.7
* cors: 2.8.5
