# Zero Click URL Detector 🔍

A Chrome Extension + Flask backend + AI-powered model to detect malicious URLs in real time.

## 🔧 Features

- Chrome extension that checks the current tab's URL
- Python backend with Flask
- Machine learning model (Naive Bayes + CountVectorizer)
- Flags phishing, malicious, and suspicious URLs
- CORS-enabled secure API
- Clean and readable UI

## 🚀 Technologies Used

- JavaScript, HTML/CSS (Chrome extension)
- Python, Flask, Pandas, scikit-learn
- Machine learning (URL classification)
- REST API integration
- VS Code + GitHub

## 🧠 How it Works

- The extension captures the URL of the current tab
- Sends it to the Flask backend
- Backend uses a trained model to classify the URL
- Result is returned as "Safe", "Suspicious", or "Malicious"

## 📁 Project Structure

- `extension/`: Chrome extension files
- `backend/`: Python server, ML model, dataset

## 🏁 Setup Instructions

1. Clone this repo
2. Open `backend/` and run:
pip install flask flask-cors pandas scikit-learn joblib
python train_model.py
python app.py


3. Load the `extension/` folder as an unpacked Chrome extension
4. Browse any site and click "Check Now"!

## 🙋‍♀️ Created By

Anita Lalwani – Final-year CS student & aspiring security engineer 💻✨
