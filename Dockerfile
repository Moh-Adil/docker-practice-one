FROM node:24.21.0-alpine

WORKDIR /app
COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]