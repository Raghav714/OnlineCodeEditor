# gcloud id: onlinecodeeditor-409504
# Start from a Node.js base image
FROM node:18


# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install Python 3
RUN apt-get update && apt-get install -y python3

# Install g++ for C++ compilation
RUN apt-get install -y g++

# Install default JDK for Java compilation and execution
RUN apt-get install -y default-jdk

RUN apt-get install -y lldb

# Copy the rest of your application's code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Command to run your app
CMD [ "node", "index.js" ]
