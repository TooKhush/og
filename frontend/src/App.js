import React, { useState, useEffect } from 'react';
import RecommendationList from './components/RecommendationList';

function App() {
    const [studentProfile, setStudentProfile] = useState({
        skills: '',
        interests: '',
        experience: ''
    });
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentProfile({ ...studentProfile, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studentProfile),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setRecommendations(data.recommendations);
        } catch (err) {
            setError('Failed to fetch recommendations. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>AI Internship Recommendation System</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="skills"
                    placeholder="Enter your skills"
                    value={studentProfile.skills}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="interests"
                    placeholder="Enter your interests"
                    value={studentProfile.interests}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="experience"
                    placeholder="Enter your experience"
                    value={studentProfile.experience}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Get Recommendations'}
                </button>
            </form>
            {error && <p className="error">{error}</p>}
            <RecommendationList recommendations={recommendations} />
        </div>
    );
}

export default App;