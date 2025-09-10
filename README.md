# AI Internship Recommender

## Overview
The AI Internship Recommender is a lightweight recommendation system designed to help students find suitable internship opportunities based on their profiles. This project utilizes a machine learning model to provide personalized internship recommendations and is built using FastAPI for the backend and React for the frontend.

## Goals
- To create a user-friendly interface for students to input their profiles and receive internship recommendations.
- To implement a machine learning model that predicts the best internship matches based on user data.
- To provide a feedback mechanism for users to improve the recommendation system.

## Architecture
The project is structured into two main components: the backend and the frontend.

### Backend
- **Framework**: FastAPI
- **Model**: Logistic Regression for internship recommendation
- **Database**: SQLite for storing internship data
- **Endpoints**:
  - `POST /recommend`: Accepts a student profile and returns top internship recommendations.
  - `GET /internships`: Returns a list of available internships.
  - `POST /feedback`: Accepts user feedback on recommendations.

### Frontend
- **Framework**: React
- **Components**:
  - Input form for student profiles
  - Display area for internship recommendations
  - Feedback form for user input

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Seed the database with sample data:
   ```
   python src/seed_data.py
   ```
4. Run the FastAPI application:
   ```
   uvicorn src.app:app --reload
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Testing
- Backend tests can be run using pytest:
  ```
  pytest backend/tests
  ```
- Frontend tests can be run using the testing library:
  ```
  npm test
  ```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.