FROM node:18

WORKDIR /app

#Install app dependencies
COPY package*.json .

RUN npm install
# for Production
#RUN npm ci --omit=dev

COPY . .
EXPOSE 3000

CMD [ "npm","start" ]