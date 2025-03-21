# confidential

**Confidential**

A Node.js + Express project built with TypeScript.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [npm](https://www.npmjs.com/) (Comes with Node.js)
- A MongoDB Atlas account (or another MongoDB instance)

## Installation & Deployment

Follow these steps to deploy the project:

### 1. Unzip the Project

If you received a `.zip` file named `smtp-be.zip`, extract its contents to a suitable directory.

### 2. Navigate to the Project Directory

Open a terminal and move into the extracted folder:

```sh
cd smtp-be
```

### 3. Install Dependencies

Run the following command to install all required dependencies:

```sh
npm install
```

### 4. Required Environment Variables

The following environment variables must be set before running the project:

```
DB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_random_jwt_auth_secret
INITIAL_SMTP_IP=your_initial_smtp_ip
INITIAL_TELEGRAM_BOT_TOKEN=your_initial_telegram_bot_token
INITIAL_CHAT_ID=your_initial_chat_id
TELEGRAM_API_URL=https://api.telegram.org/bot
INITIAL_WORKER_NAME=your_initial_worker_name
```

#### :warning: Important Notes on Environment Variables

- **DB_URI:** Must be a valid MongoDB connection string.
- **JWT_SECRET:** Use a strong random string for JWT authentication security.
- **INITIAL_SMTP_IP:** Ensure it is correctly formatted.
- **INITIAL_TELEGRAM_BOT_TOKEN:** Must be a valid Telegram bot token.
- **INITIAL_CHAT_ID:** Validate it belongs to a valid Telegram chat/group.
- **TELEGRAM_API_URL:** The default API URL is `https://api.telegram.org/bot`.
- **INITIAL_WORKER_NAME:** This is the default worker name assigned to all users.

### 5. Build the Project

Run the following command to compile TypeScript files into JavaScript:

```sh
npm run build
```

This will generate a `dist` folder containing the compiled JavaScript files.

### 6. Start the Server

Run the following command to start the server:

```sh
npm run start
```

## Deploying with Docker

A `Dockerfile` is already included in the project. To deploy using Docker, follow these steps:

1. Build the Docker image:

```sh
docker build -t confidential .
```

2. Run the container:

```sh
docker run -d -p 3000:3000 --env-file .env confidential
```

## Available Scripts

The project provides the following npm scripts:

- **`npm run build`** – Compiles TypeScript to JavaScript.
- **`npm run start`** – Runs the compiled JavaScript code.
- **`npm run dev`** – Starts the development server with hot-reloading.

## Project Structure

```
📦 smtp-be
 ┣ 📂 dist          # Compiled JavaScript files
 ┣ 📂 src           # Source TypeScript files
 ┣ 📜 package.json  # Dependencies & scripts
 ┣ 📜 tsconfig.json # TypeScript configuration
 ┣ 📜 README.md     # Project documentation
 ┣ 📜 Dockerfile    # Docker configuration file
```

## Confidentiality Notice

This project and its contents are **confidential**. Do not distribute or share this code without proper authorization.

## License

This project is licensed under the **MIT License**.
