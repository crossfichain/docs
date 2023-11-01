# Stage 1. Build app
## Use right arch and base images
FROM --platform=linux/amd64 node:18.14.0 AS builder

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Copying the dependency files
COPY package*.json ./

# Installing dependencies
RUN yarn

# Copying source files
COPY . .

# Building app
RUN yarn build

RUN ls -la

# Stage 2. Build app
## Use right arch and base images
FROM --platform=linux/amd64 nginx:latest AS app

# Remove the default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

## Copy data and built code from Stage #1
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html/

# Changing the owner of the working directory to the node user
RUN chown -R nginx:nginx /usr/share/nginx/html

# Change the user that nginx runs as
# USER nginx

# Setting up the port (although nginx already uses port 80 by default)
EXPOSE 80

# Run App
CMD ["nginx", "-g", "daemon off;"]
