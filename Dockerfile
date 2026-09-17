FROM node:24.21.0-alpine

WORKDIR /app
COPY . .

RUN apk add --no-cache python3 make g++ && \
    npm ci --omit=dev && \
    apk del python3 make g++

EXPOSE 3000

CMD ["npm", "start"]