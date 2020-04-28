# Google-Book-Search

![](github/home.PNG)

## Table of contents
- [General Info](#Info)
- [Install](#Install)
- [Dependencies](#Dependencies)
- [Run](#Run)
- [Technologies](#Technologies)
- [Demo](#Demo)
- [Author](#Author)
- [License](#License)

# General Info

-  React-based Google Books Search application requires a creation of a React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. This can achieve use Node, Express and MongoDB so that users can save books to review or purchase later.


![](github/search.PNG)

# Install
- clone the repo using
``` bash
    git clone "the repo address here"
```
- then on the folder terminal run install
``` bash
    npm install
```

# Dependencies
- client side dependencies
``` bash
    "dependencies": {
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.5.0",
        "@testing-library/user-event": "^7.2.1",
        "react": "^16.13.1",
        "react-dom": "^16.13.1",
        "react-router-dom": "^5.1.2",
        "react-scripts": "3.4.1"
    },
```
- server side dependencies
``` bash
    "devDependencies": {
    "concurrently": "^5.1.0",
    "nodemon": "^2.0.2"
  },
  "dependencies": {
    "axios": "^0.19.2",
    "express": "^4.17.1",
    "if-env": "^1.0.4",
    "mongoose": "^5.9.10"
  },
```

# Run / Build

``` bash
    "scripts": {
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"
  },

```

In the project directory, you can run:
``` bash
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
``` bash
npm test
```
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
``` bash
npm run build
```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
``` bash
npm run eject
```
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

![](github/collection.PNG)

# Technologies
- HTML/CSS
- JavaScript
- Bootstrap
- Node.js
- Express
- MongoDB 
- React
- Google API (book search)



# Demo
- view a live demo via video <a href="https://drive.google.com/file/d/1erVsadunF2RvwYP0cGP7mJXouI1cWFV9/view" target="_blank"> in here! </a>
- Click here to go to the app via Heroku ----> https://google-books-search-lloyd.herokuapp.com/ <-----

# Author
- Lloyd Marcelino 
- github: https://github.com/ethanlloyd21
- website: lloydmarcelino.com
- email: lloydmarcelino@gmail.com

# License
- see MIT License Copyright (c) 2020
