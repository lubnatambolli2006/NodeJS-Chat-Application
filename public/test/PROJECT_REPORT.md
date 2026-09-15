# Node.js and Express.js Fundamentals Assignment

## Real-Time Chat Application

### 1. Introduction

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser. It is commonly used for building fast and scalable server-side applications.

Express.js is a web application framework for Node.js. It provides features for creating web servers and handling HTTP requests and responses.

For this assignment, a basic real-time chat application was designed using Node.js, Express.js, MongoDB and Socket.io. Mocha and Chai were also included for testing.

---

## 2. Node.js Architecture

Node.js uses an event-driven and non-blocking architecture.

Important features include:

- Event-driven programming
- Non-blocking I/O
- Single-threaded event loop
- Fast execution using the V8 JavaScript engine
- Suitable for real-time applications

The non-blocking architecture allows Node.js to handle multiple requests efficiently.

---

## 3. Express.js

Express.js is a lightweight framework built on Node.js.

In this project, Express.js is used to:

- Create the web server
- Serve the HTML page
- Handle the main application route
- Work with Socket.io

The application serves the chat interface through the `/` route.

---

## 4. Database Integration

MongoDB is a NoSQL database that stores data in flexible documents.

MongoDB Atlas was used as the cloud database environment.

The application is prepared to connect to MongoDB using the MongoDB Node.js driver.

The connection string is stored using the `MONGODB_URI` environment variable instead of storing database credentials directly in the source code.

---

## 5. Real-Time Chat Using Socket.io

Socket.io is used to provide real-time communication between the client and server.

When a user sends a message:

1. The user enters a name.
2. The user enters a message.
3. The client sends the message using Socket.io.
4. The server receives the message.
5. The server broadcasts the message to connected users.
6. The message appears in the chat interface.

This allows users to communicate without refreshing the web page.

---

## 6. Project Structure

The project contains the following files:

```text
NodeJS-Chat-Application/
│
├── public/
│   └── index.html
│
├── test/
│   └── chat.test.js
│
├── server.js
├── package.json
└── PROJECT_REPORT.md
