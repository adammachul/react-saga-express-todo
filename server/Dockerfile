FROM node

WORKDIR /usr/app

ADD package.json .

RUN npm install --quiet

CMD ["./wait-for-it.sh", "db:3306", "--", "npm", "start"]