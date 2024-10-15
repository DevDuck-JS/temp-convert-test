# Dockerfile
FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY . .


ENV HOST 0.0.0.0
ENV PORT 80
EXPOSE 80

CMD [ "npm", "start" ]
