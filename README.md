# Notes App Backend

This is the backend component of a notes app, built using Node.js. It provides the necessary APIs to manage notes.

## Features

- **Simple yet basic CRUD Operations**: Create, Read, Update, and Delete notes.
  
## Installation

1. Clone the repository:

    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```
    cd notes-app-backend
    ```

3. Install dependencies:

    ```
    npm install
    ```

## Usage

1. Start the server:

    ```
    npm start
    ```

2. The server will start running at `http://localhost:5000` by default.
3. Run the ESLint:
   
    ```
    npm run lint
    ```

## API Endpoints

### Notes

- `GET /api/notes`: Get all notes.
- `GET /api/notes/:id`: Get a single note by ID.
- `POST /api/notes`: Create a new note.
- `PUT /api/notes/:id`: Update a note.
- `DELETE /api/notes/:id`: Delete a note.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request if you find any bugs or want to suggest improvements.

## License

This project is licensed under the [MIT License](LICENSE).
