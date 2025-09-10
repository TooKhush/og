import pytest
from fastapi.testclient import TestClient
from src.app import app

client = TestClient(app)

def test_recommend_internship():
    response = client.post("/recommend", json={
        "skills": ["Python", "Machine Learning"],
        "interests": ["Data Science"],
        "education": "Bachelor's in Computer Science"
    })
    assert response.status_code == 200
    assert "recommendations" in response.json()

def test_get_internships():
    response = client.get("/internships")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_feedback():
    response = client.post("/feedback", json={
        "internship_id": 1,
        "feedback": "This recommendation was helpful."
    })
    assert response.status_code == 200
    assert response.json() == {"message": "Feedback received."}