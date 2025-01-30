# WELCOME TO AYDON'S TEMPLATE

This template serves as a base for all Aydon's projects, it keeps projects consistent and it makes it easier to start 
developing instead of starting from scratch with designs


# How to get started

First open the terminal to install [npm install] the template and you will get the node_modules. [AydonWrappers (custom-library) will be in future updates].
When the installation is done, you can run the program in the terminal [npm run dev] to open the template website.

# File Structure

AYDON-TEMPLATE
│── node_modules/        # Dependencies installed via npm
│── public/              # Static assets (e.g., icons, images)
│   ├── assets/
│   │   ├── react.svg    # React logo or other assets
│── src/                 # Main source code directory
│   ├── components/      # Reusable UI components
│   │   ├── Component1.jsx
│   ├── css/             # Stylesheets
│   │   ├── Dashboard.css
│   │   ├── index.css
│   ├── pages/           # Page-level components
│   │   ├── Dashboard.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point for React
│── .gitignore           # Specifies files to ignore in Git
│── db.json              # JSON file (possibly mock data)
│── eslint.config.js     # ESLint configuration
│── index.html           # Main HTML file for the app
│── package.json         # Project metadata and dependencies
│── package-lock.json    # Lock file for package dependencies
│── README.md            # Project documentation
│── vite.config.js       # Vite configuration file


1. Root Directory (AYDON-TEMPLATE/)
This is the main folder containing all files and directories necessary for the project.

node_modules/: This folder contains all the dependencies installed via npm install. It's automatically generated and should not be manually modified.

public/: Holds static assets like images, icons, and other publicly accessible resources.

assets/react.svg: A React logo or other assets used in the project.

.gitignore: Specifies files and folders to be ignored by Git (e.g., node_modules/, .env files).

package.json: Defines project metadata, dependencies, scripts, and configuration.

package-lock.json: Locks dependencies to specific versions for consistency across environments.

README.md: Documentation for the project, including setup instructions.

vite.config.js: Configuration file for Vite, which is used for development and building the app.


2. src/ (Source Code)
This is the main folder where all application code resides.

components/: Contains reusable UI components to maintain modularity.
Example: Component1.jsx

css/: Holds CSS files for styling different components.
Example: Dashboard.css, index.css

pages/: Contains high-level page components (i.e., views).
Example: Dashboard.jsx

App.jsx: The root component that organizes the structure of the React app.

main.jsx: The entry point where the React app is rendered into the DOM.


3. Other Files
index.html: The main HTML file that serves as the entry point for the React app.

db.json: Likely used for mock data, useful for testing without a backend.

eslint.config.js: Configuration file for ESLint, which helps maintain code quality.



# How to use it
