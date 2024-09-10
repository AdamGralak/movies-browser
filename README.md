
# 🎬 Movie Browser App

Welcome to **Movie Browser App** — an interactive application that allows you to browse the most popular movies and actors using the power of the [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api). Discover the latest hits, explore movie details, and dive into the world of your favorite actors!

![Movie Browser App Screenshot](./images/movie-browser-screenshot.png)

## ✨ Features

- 🔍 **Browse Movies**: Explore popular movies fetched in real-time from TMDB API.
- 🎥 **Movie Details**: View detailed information such as title, release date, genre, and ratings.
- 👤 **Actor Profiles**: Check out your favorite actors, see their filmography, and learn more about their careers.
- 🔄 **Pagination**: Easily navigate through pages of results for movies and actors.
- 📱 **Responsive Design**: Enjoy the app on both desktop and mobile devices.

## 🚀 Live Demo

👉 [Movie Browser App](https://adamgralak.github.io/movies-browser/#/movies)

## 🛠️ Technologies Used

This app is built using modern web technologies to ensure high performance, clean code, and maintainability.

### Frontend Technologies
- **HTML**: Structuring the content of the application.
- **CSS**: Styling the components and layouts.
- **JavaScript (ES6+)**: The backbone of the application, leveraging modern JavaScript features.

### Core Libraries & Tools
- **React**: Core library for building the user interface.
  - **React-Router**: For seamless navigation between different sections of the app.
  - **useState**: React hook for managing component-level state.
  - **useEffect**: React hook for managing side-effects in components.
  - **useLocation**: For accessing the current location of the app.
  - **useHistory**: For navigating programmatically between routes.
  - **custom hooks**: For encapsulating and reusing logic.
- **Redux Toolkit**: State management for handling complex state and async API requests.
  - **@reduxjs/toolkit**: For simplifying Redux setup and logic.
  - **react-redux**: For connecting React components to the Redux store.
- **Redux Saga**: Handling side effects (like API requests) in a scalable and predictable way.
  - **JS-generators**: For handling asynchronous actions in Redux Saga.
- **TMDB API**: For retrieving real-time data on movies and actors.
- **Webpack**: Module bundler to compile the project and serve optimized assets.
- **Babel**: Transpiler to ensure compatibility with older browsers.
- **create-react-app**: Bootstrap tool to set up the React environment.

### CSS Techniques
- **Grid layout**: For creating flexible and responsive layouts.
- **Flexbox**: For aligning items within containers.
- **@media queries**: For making the design responsive across different screen sizes.
- **Styled Components**: For writing clean, reusable, and scoped CSS in JavaScript.

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./images/home-page.png)

### 📖 Movie Details
![Movie Details](./images/movie-details.png)

### 👤 Actor Profiles
![Actor Profiles](./images/actor-profiles.png)


# Happy movie browsing! 🍿🎬


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
