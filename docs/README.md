# AI Internship Recommender

## Overview
The AI Internship Recommender is a lightweight recommendation system designed to help students find suitable internship opportunities based on their profiles. This project utilizes a machine learning model to provide personalized internship recommendations.

## Features
- **Personalized Recommendations**: The system analyzes student profiles and suggests internships tailored to their skills and preferences.
- **Feedback Mechanism**: Users can provide feedback on the recommendations, which can be used to improve the model.
- **User-Friendly Interface**: A simple and intuitive frontend allows users to easily input their information and view recommendations.

## Project Structure
```
ai-internship-recommender
├── backend
│   ├── src
│   │   ├── app.py
│   │   ├── model_pipeline.py
│   │   ├── routes.py
│   │   └── seed_data.py
│   ├── requirements.txt
│   └── tests
│       └── test_api.py
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   └── RecommendationList.js
│   │   └── strings.json
│   ├── package.json
│   └── tests
│       └── App.test.js
├── docs
│   └── README.md
└── README.md
```

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
4. Start the FastAPI server:
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

## Usage
- Access the frontend application at `http://localhost:3000`.
- Input your profile information and submit the form to receive internship recommendations.
- Provide feedback on the recommendations to help improve the system.

## Testing
- Backend tests can be run using:
  ```
  pytest backend/tests
  ```
- Frontend tests can be run using:
  ```
  npm test
  ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.