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

If you received a `.zip` file, extract its contents to a suitable directory.

### 2. Install Dependencies

Run the following command to install all required dependencies:

```sh
npm install
```

### 3. Required Environment Variables

The following environment variables must be set before running the project:

- **DB_URI**: Must be a valid MongoDB connection string.
- **JWT_SECRET**: A strong random string for JWT authentication security.
- **INITIAL_SMTP_IP**: Ensure it is correctly formatted.
- **INITIAL_TELEGRAM_BOT_TOKEN**: A valid Telegram bot token.
- **INITIAL_CHAT_ID**: Must be a valid Telegram chat/group ID.
- **TELEGRAM_API_URL**: Default API URL is `https://api.telegram.org/bot`.
- **INITIAL_WORKER_NAME**: The default worker name assigned to all users.

Ensure these variables are set in your deployment environment.

### 4. Build the Project

Run the following command to compile TypeScript files into JavaScript:

```sh
npm run build
```

This will generate a `dist` folder containing the compiled JavaScript files.

### 5. Start the Server

Run the following command to start the server:

```sh
npm run start
```

## Deployment Instructions

For deploying on a server, follow these additional steps:

### Using PM2 for Process Management

To keep the server running in the background, use PM2:

```sh
npm install -g pm2
npm run build
npm start &
pm2 start dist/index.js --name confidential
pm2 save
pm2 startup
```

### Deploying with Docker

A `Dockerfile` is already included in the project. To deploy using Docker, follow these steps:

1. Build the Docker image:

```sh
docker build -t confidential .
```

2. Run the container:

```sh
docker run -d -p 3000:3000 -e DB_URI=your_mongodb_atlas_uri -e JWT_SECRET=your_random_jwt_auth_secret -e INITIAL_SMTP_IP=your_initial_smtp_ip -e INITIAL_TELEGRAM_BOT_TOKEN=your_initial_telegram_bot_token -e INITIAL_CHAT_ID=your_initial_chat_id -e TELEGRAM_API_URL=https://api.telegram.org/bot -e INITIAL_WORKER_NAME=your_initial_worker_name confidential
```

## Available Scripts

The project provides the following npm scripts:

- **`npm run build`** – Compiles TypeScript to JavaScript.
- **`npm run start`** – Runs the compiled JavaScript code.
- **`npm run dev`** – Starts the development server with hot-reloading.

## Project Structure

```
📦 confidential
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
