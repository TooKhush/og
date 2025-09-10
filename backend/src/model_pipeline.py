def train(data):
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import StandardScaler
    import joblib
    import pandas as pd

    # Data preprocessing
    X = data.drop('internship_id', axis=1)
    y = data['internship_id']
    
    # Normalize features
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # Split the dataset
    X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

    # Train the model
    model = LogisticRegression()
    model.fit(X_train, y_train)

    # Save the model and scaler
    joblib.dump(model, 'model.joblib')
    joblib.dump(scaler, 'scaler.joblib')

def load():
    import joblib
    model = joblib.load('model.joblib')
    scaler = joblib.load('scaler.joblib')
    return model, scaler

def predict_topk(student_profile, k=5):
    import pandas as pd
    import numpy as np

    model, scaler = load()
    
    # Normalize the student profile
    student_profile_scaled = scaler.transform(pd.DataFrame([student_profile]))

    # Predict probabilities
    probabilities = model.predict_proba(student_profile_scaled)[0]
    
    # Get top k recommendations
    top_k_indices = np.argsort(probabilities)[-k:][::-1]
    return top_k_indices.tolist()