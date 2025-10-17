import joblib
from sklearn.ensemble import RandomForestClassifier  # or whatever model you trained

# Example: retrain quickly if you still have your training script
X = [[1,0.8,0.5,0.6,1], [0,0.4,0.7,0.2,0]]  # dummy training data
y = [1, 0]  # dummy labels

model = RandomForestClassifier()
model.fit(X, y)

# Save correctly
joblib.dump(model, 'ml/task_assignment_model.pkl')

print("✅ Model saved successfully!")