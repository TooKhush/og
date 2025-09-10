import React from 'react';

const RecommendationList = ({ recommendations }) => {
    return (
        <div className="recommendation-list">
            {recommendations.length > 0 ? (
                recommendations.map((rec, index) => (
                    <div key={index} className="recommendation-card">
                        <h3>{rec.title}</h3>
                        <p>{rec.description}</p>
                        <div className="confidence-bar">
                            <div
                                className="confidence-fill"
                                style={{ width: `${rec.confidence * 100}%` }}
                            />
                        </div>
                        <p className="explanation">{rec.explanation}</p>
                    </div>
                ))
            ) : (
                <p>No recommendations available.</p>
            )}
        </div>
    );
};

export default RecommendationList;