# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Prisma schema to the working directory
COPY ./prisma ./prisma

# Generate Prisma Client for the deployment platform
RUN npx prisma generate --schema=./prisma/schema.prisma

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the Nest.js application will run
EXPOSE 3000

# Command to run the Nest.js application
CMD ["npm", "run", "start:prod"]
