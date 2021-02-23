# Crossword puzzle generator

A simple crossword puzzle generator with a REST api.

## Installation

```bash
npm i
```

## Run server

```bash
npm start
```

## Start in auto-refreshing dev mode

```bash
npm run start:dev
```

## Route

To get a list of words that can be used to create your target word, send a GET request to the following endpoint:

```bash
/generate/:word
```
