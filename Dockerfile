# Dockerfile

# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy project files
COPY . .

# 4. Install dependencies
RUN npm install

# 5. Build the app
RUN npm run build

# 6. Serve the build with `serve`
RUN npm install -g serve

# 7. Final command
CMD ["serve", "-s", "dist", "-l", "3000"]