


# Slidely Backend

This is the backend server for the Slidely Task-2 application. 

## Features

- Submit a new form
- Read a specific form
- Delete a specific form
- Edit a specific form
- Search forms by email

## Project Structure

```
SLIDELY/
├── src/
│   ├── controllers/
│   │   ├── submissionController.ts
│   ├── models/
│   │   └── submission.ts
│   ├── routes/
│   │   └── submissionRoutes.ts
│   ├── services/
│   │   └── submissionService.ts
│   ├── db.json
│   ├── index.ts
│   └── config.ts
├── package.json
├── tsconfig.json
└── tsconfig.build.json
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Typescript

### Installation

1. Clone the repository

    ```sh
    git clone https://github.com/your-username/slidely-backend.git
    ```

2. Navigate to the project directory

    ```sh
    cd slidely-backend
    ```

3. Install the dependencies

    ```sh
    npm install
    ```

### Build the Project

Compile the TypeScript code to JavaScript

```sh
npm run build
```

### Run the Server

Start the server

```sh
npm start
```

The server will be running at `http://localhost:3000`.

## API Endpoints

### Ping

- **URL:** `/api/ping`
- **Method:** `GET`
- **Response:** `true`

### Submit Form

- **URL:** `/api/submit`
- **Method:** `POST`
- **Request Headers:** `Content-Type: application/json`
- **Request Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "github_link": "https://github.com/johndoe",
      "stopwatch_time": "00:05:30"
    }
    ```
- **Response:** `Submission saved`

### Read Form

- **URL:** `/api/read?index=0`
- **Method:** `GET`
- **Response:**
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "github_link": "https://github.com/johndoe",
      "stopwatch_time": "00:05:30"
    }
    ```

### Delete Form

- **URL:** `/api/delete?index=0`
- **Method:** `DELETE`
- **Response:** `Submission deleted`

### Edit Form

- **URL:** `/api/edit?index=0`
- **Method:** `PUT`
- **Request Headers:** `Content-Type: application/json`
- **Request Body:**
    ```json
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": "987-654-3210",
      "github_link": "https://github.com/janedoe",
      "stopwatch_time": "00:10:45"
    }
    ```
- **Response:** `Submission updated`

### Search Form by Email

- **URL:** `/api/search?email=john.doe@example.com`
- **Method:** `GET`
- **Response:**
    ```json
    [
      {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "123-456-7890",
        "github_link": "https://github.com/johndoe",
        "stopwatch_time": "00:05:30"
      }
    ]
    ```



