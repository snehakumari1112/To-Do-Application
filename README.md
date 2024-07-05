
# To-Do Application with React and Redux

This is a simple To-Do application built using ReactJS and Redux. It allows users to add, view, edit, and delete tasks. The application also persists tasks using local storage so that tasks are not lost on page reload.

## Setup Instructions

Follow these steps to set up and run the application locally:

### Prerequisites

- Node.js installed on your local machine.
- npm (Node Package Manager) or yarn installed.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/snehakumari1112/To-Do-Application.git
   ```

2. Navigate into the project directory:

   ```bash
   cd todo-app
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. After installing dependencies, start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

### Usage

- **Adding a Task**: Enter a task in the input field and click "Add Task" or press Enter.
- **Editing a Task**: Click the edit icon next to a task, make your changes in the input field, and press Enter to save.
- **Deleting a Task**: Click the delete icon next to a task to remove it from the list.
- **Marking a Task as Completed**: Click the checkbox next to a task to toggle its completion status.

### Persisting State

The application uses Redux for state management. Task data is persisted locally using browser local storage. Tasks will be saved and loaded from local storage automatically.

## Project Structure

- **`src/`**: Contains all application source code.
  - **`app/`**: Contains the Redux store configuration (`store.js`).
  - **`features/`**: Contains Redux slice for tasks (`tasksSlice.js`).
  - **`components/`**: Contains React components (`TaskInput.js`, `TaskList.js`, etc.).
  - **`App.js`**: Main application component.
  - **`index.js`**: Entry point for rendering the React application.
- **`public/`**: Static assets and index.html.

## Dependencies

- React
- Redux Toolkit
- Material-UI (for UI components)
- @mui/icons-material (for icons)

## Contributing

Feel free to contribute to this project by forking and submitting pull requests.

---

