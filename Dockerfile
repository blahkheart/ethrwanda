# Use Node.js LTS (Latest LTS version as base)
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Expose port 5173 (Vite's default dev server port)
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]