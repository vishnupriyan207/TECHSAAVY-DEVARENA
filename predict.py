import sys
import joblib
import numpy as np
import os

print("🟢 Starting prediction script...")

# Check current directory
print("📁 Current working directory:", os.getcwd())

# Check if model exists
model_path = 'ml/task_assignment_model.pkl'
if not os.path.exists(model_path):
    print("❌ Model file not found at:", model_path)
    sys.exit(1)

# Load saved model
print("✅ Loading model...")
model = joblib.load(model_path)
print("✅ Model loaded successfully.")

# Check arguments
args = sys.argv[1:]
print("🧩 Received arguments:", args)

if len(args) != 5:
    print("⚠️ Error: Expected 5 arguments but got", len(args))
    sys.exit(1)

# Convert to numpy array
features = np.array(args, dtype=float).reshape(1, -1)
print("🔢 Feature array:", features)

# Predict
prediction = model.predict(features)
print("🔮 Prediction:", prediction[0])