# candidate-search

# Candidate Search Application

A React-based application that allows employers to search and review potential candidates using GitHub's API. Users can browse through candidate profiles, save promising candidates, and manage their list of saved candidates.

## Features

- View detailed candidate information including:
  - Name and username
  - Location
  - Avatar
  - Email
  - GitHub URL
  - Company affiliation
- Accept or reject candidates with simple "+" and "-" controls
- View and manage a persistent list of saved candidates
- Responsive design for various screen sizes

## Prerequisites

Before you begin, ensure you have:
- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- A GitHub Personal Access Token

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd candidate-search
```

2. Install dependencies:
```bash
npm install
```

3. Create a GitHub Personal Access Token:
   - Visit GitHub's [Personal Access Tokens](https://github.com/settings/tokens) page
   - Generate a new token (no additional privileges needed)
   - Copy the generated token

4. Create an environment file:
   - Navigate to the `environment` folder
   - Create a `.env` file
   - Add your GitHub token:
   ```
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

## Running the Application

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Deployment

The application can be deployed to Render:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the build settings:
   - Build Command: `npm run build`
   - Start Command: `npm run start`
4. Add your GitHub token as an environment variable:
   - Key: `VITE_GITHUB_TOKEN`
   - Value: Your GitHub Personal Access Token

## Acceptance Criteria

✅ Upon loading the candidate search page:
- Displays information for one candidate, including:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub URL
  - Company

✅ User Interface:
- "+" button saves current candidate and loads next candidate
- "-" button skips to next candidate without saving
- Message displayed when no more candidates are available
- List of saved candidates persists between page reloads
- Message displayed when no candidates have been saved

✅ Saved Candidates Page:
- Displays all previously saved candidates with full information
- Allows removal of candidates from saved list
- Maintains saved list across page reloads

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub REST API
- localStorage for data persistence

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request