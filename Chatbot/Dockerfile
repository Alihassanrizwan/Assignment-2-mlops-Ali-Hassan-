FROM node:latest

RUN mkdir depdir

WORKDIR /depdir

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

EXPOSE 3000

CMD ["npm" ,"start"]

