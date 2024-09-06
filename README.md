# Movie Finder

Movie Finder is a React-based application that allows users to search for movies and view detailed information about selected movies. It fetches movie data from a public API and displays search results and detailed movie information.

## Features

- **Search**: Search for movies by title.
- **Movie List**: Display a list of movies based on the search criteria.
- **Movie Details**: View detailed information about a selected movie.
- **Header**: A fixed header component for navigation.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MehekFatima/movie-finder.git
    cd movie-finder
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

### Usage

1. **Search for Movies**: Enter a movie title into the search bar to filter the list of movies.
2. **View Movie Details**: Click on a movie title from the search results to view detailed information about the movie.
3. **Header Navigation**: Use the fixed header to navigate between different parts of the application.

### Project Structure

- `src/`
  - `components/`
    - `Header.jsx` - Component for the fixed navigation header.
    - `Search.jsx` - Component for searching and displaying movies.
    - `MovieDetail.jsx` - Component for displaying detailed movie information.
  - `style/`
    - `Header.css` - Styles for the header component.
    - `Search.css` - Styles for the search component.
    - `MovieDetail.css` - Styles for the movie detail component.
  - `App.jsx` - Main application component.

## API

The application uses the following API to fetch movie data:

- **Endpoint**: `https://freetestapi.com/api/v1/movies`
- **Method**: GET
- **Response**: Array of movie objects with details including title, year, genre, etc.

