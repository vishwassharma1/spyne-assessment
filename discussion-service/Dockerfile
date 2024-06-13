FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Expose the port on which your Node.js application is running (if applicable)
EXPOSE 5001

# Command to run your Node.js application
CMD ["npm", "start"]
