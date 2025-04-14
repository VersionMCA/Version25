FROM node:20-alpine AS build

WORKDIR /usr/src/app
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

COPY package.json package-lock.json ./
COPY package.json package-lock.json ./
COPY prisma ./prisma
COPY .husky  ./.husky

RUN npm install

COPY . . 

RUN npx prisma generate


RUN npm run build


FROM node:20-alpine AS run

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000
