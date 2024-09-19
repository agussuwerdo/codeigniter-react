
# CodeIgniter with React - Vercel Deployment

This boilerplate project is a web application built using **CodeIgniter 3** as the backend framework and **React** for the frontend. The project is deployed on Vercel with separate URLs for the frontend and backend API.

## Demo Links

- **Frontend**: [https://codeigniter-react.vercel.app](https://codeigniter-react.vercel.app)
- **Backend API**: [https://codeigniter-react.vercel.app/api](https://codeigniter-react.vercel.app/api)
- **PHPINFO**: [https://codeigniter-react.vercel.app/api/phpinfo](https://codeigniter-react.vercel.app/api/phpinfo)
## Project Structure

- **Frontend (React)**: Located inside the `frontend/` directory. This handles the client-side UI and interacts with the backend via API calls.
- **Backend (CodeIgniter)**: The `backend/` directory contains the CodeIgniter PHP files responsible for handling the API logic.

### Folder Layout:

```
.
├── backend/            # CodeIgniter backend for handling API requests
│   ├── application/    # CodeIgniter application logic (controllers, models, views)
│   └── system/         # CodeIgniter system files
├── frontend/           # React frontend application
│   ├── src/            # React source files
│   └── build/          # React build output (deployed to Vercel)
├── vercel.json         # Vercel configuration for builds and routing
```

## Technologies Used

- **Frontend**: React (with Hooks), React Router for client-side routing.
- **Backend**: CodeIgniter 3 for handling server-side logic and APIs.
- **Deployment**: Vercel, providing CI/CD and hosting for both the frontend and backend.

## How It Works

1. **React Frontend**: The frontend is a single-page React application that makes API calls to the CodeIgniter backend.
2. **API Routing**: The backend serves dynamic content through API routes available at `/api/`.
3. **Frontend Routing**: All non-API requests are routed to the React `index.html` to handle client-side routing.

## Local Development

### Prerequisites

- Node.js and npm for the frontend development.
- PHP 7.4+ and MySQL for the CodeIgniter backend.
- Vercel CLI (optional) for local deployment testing.

### Running Locally

1. **Frontend (React)**:

   ```bash
   cd frontend
   npm install
   npm start
   ```

   This will start the React development server at `http://localhost:3000`.

2. **Backend (CodeIgniter)**:

   To run the backend locally, you will need to set up a PHP server (e.g., XAMPP, MAMP, or a Dockerized environment). Ensure you configure the database and environment settings in the `api/application/config/` directory.

3. **API Testing**:

   You can modify the API endpoints through the `.env` file when running locally.
   set the `REACT_APP_API_URL` in the `.env` file inside frontend folder.

4. **Docker**:

    Refer to Makefile to run the app trough Docker.

## Deployment

The project is deployed to Vercel. Below is the configuration used in the `vercel.json` file for deployment:

```json
{
  "builds": [
    { "src": "api/*.php", "use": "vercel-php@0.7.1" },
    {
      "src": "frontend/build/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/index.php" },
    { "src": "/(.*)", "dest": "/frontend/build/$1" }
  ]
}
```

### Frontend Deployment

- The React app is built using `npm run build` and deployed under `frontend/build`.

### Backend Deployment

- The CodeIgniter backend is deployed under `api/` and accessible at the `/api/` route.

### Vercel Deployment

- Run `Make deploy` from the root directory

## API Documentation

The API follows RESTful principles and can be accessed via `/api/`. Here are a few example endpoints:

- `GET /api/controller/param1/param2`: Retrieves data from the controller with dynamic parameters.
- `POST /api/controller`: Sends data to the backend.

## Future Improvements

- **Authentication**: Add JWT or OAuth for secured API endpoints.
- **Testing**: Set up unit and integration testing for both frontend and backend.
- **Error Handling**: Implement global error handling for better user experience.

## License

This project is licensed under the MIT License.
