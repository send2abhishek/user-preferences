# user-preferences

This project contains client(React App) and server(Node App) code in this codebase.

# How to Setup Project In Local Development Environment

- Clone this repo, open client, and server code in visual studio code
- Go to server folder and install node modules using npm install command.
- For server you need to setup env file. create a new .env file in the root. Place below mentioned keys in the .env file.
- Server supports mysql db. Configure your database and define connection strings in env file

- After setting up environment file and node modules installation hit npm start
- Server will start at port 3001 (if you configured App port in env file as 3001).
- Navigate to http://localhost:3001/ here you can see your Server App running.

- After setting up environment for server. Go to client folder and install node modules using npm install
- In app/config.js is the configuration file for client code. If your server is running at 3001 port then no need to change here.
- Hit npm start. Project will start at 3000 port in the browser. Navigate to http://localhost:3000/ here you can see your App.
