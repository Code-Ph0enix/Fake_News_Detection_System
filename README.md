# 📰 Fake News Detection App  
**A Machine Learning-Powered Full-Stack Web Application to Classify News Articles as Real or Fake**

---

## 🚀 Overview

The **Fake News Detection** project is designed to combat the spread of misinformation by using machine learning to classify news articles as **Fake** or **Real**. Built with a full-stack architecture, the app allows users to input news text, receive predictions from multiple models, and engage with interactive educational tools.

---

## 🎯 Problem Definition

In today’s digital age, **fake news** spreads rapidly, especially via social media. This misinformation can severely affect **public opinion**, **elections**, and **societal trust**.  
Our challenge:  
➡️ Automatically distinguish between fake and real news using **text classification** techniques.  
➡️ Develop a model capable of understanding linguistic and stylistic patterns in news articles.

---

## 💻 Tech Stack

### ⚙️ Backend (API)
- **Framework**: Flask (Python)
- **Model Serving**:  
  - Logistic Regression  
  - Naive Bayes  
  - Random Forest  
  - Gradient Boosting  
  - PyTorch Linear Classifier
- **Preprocessing**: Lowercasing, punctuation removal
- **Vectorization**: TF-IDF (`vectorizer.pkl`)
- **Model Loading**: joblib + PyTorch
- **API Handling**: Flask-CORS
- **Logging**: Python Logging Module

🔗 **Hosted API**:  
[https://fakenewsdetectiobackend-production.up.railway.app/](https://fakenewsdetectiobackend-production.up.railway.app/)

### 🌐 Frontend
- **Framework**: React (with TypeScript)
- **Styling**: Tailwind CSS
- **UI Library**: ShadCN UI (Cards, Tabs, Buttons, Inputs)
- **Features**:
  - News input and prediction result interface
  - Multi-model comparison
  - Theme toggle (Light/Dark Mode)
  - Educational games: Quiz, Speed Challenge
  - Leaderboard tracking

---

## 🧠 Machine Learning Models

| Model                 | Type              | Notes                                |
|----------------------|-------------------|--------------------------------------|
| Logistic Regression  | Linear Model      | Lightweight and interpretable        |
| Naive Bayes          | Probabilistic     | Performs well on sentiment-heavy text |
| Random Forest        | Ensemble          | High accuracy, slower training       |
| Gradient Boosting    | Ensemble          | More precise but computationally heavier |
| PyTorch Linear Classifier | Neural Network | Integrated as an additional benchmark |

---

## 🛠️ How to Run the Project Locally

### 🔁 Clone the Repository

```bash
git clone https://github.com/your-username/fake-news-detection.git
cd fake-news-detection
```

---

### 🐍 Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Ensure models and `vectorizer.pkl` are in the `/models` directory.

5. Run the backend server:

   ```bash
   python app.py
   ```

> Your backend should now be running on `http://127.0.0.1:5000/`

---

### ⚛️ Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

> Open `http://localhost:5173/` in your browser to access the app

---

## 🔍 App Features

- 📰 **News Prediction**: Input any news article text and receive model-wise prediction.
- 📊 **Model Comparison**: See how different algorithms classify the same article.
- 🎮 **Educational Mode**:
  - Fake News Quiz
  - Speed Challenge
  - Leaderboard tracking
- 🌓 **Dark/Light Mode** toggle for better UX

---

## 📦 Folder Structure

```
fake-news-detection/
├── backend/
│   ├── models/
│   ├── app.py
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
├── README.md
└── requirements.txt
```

---

## 🙌 Acknowledgements

We, **Eeshanya Joshi**, **Aakriti Mehta**, and **Khushi Menpara**, express our sincere gratitude to our guide **Professor Poonam Bhogle** for her continuous support, expert guidance, and valuable feedback throughout the development of this project.

---

Let me know if you'd like me to generate this as a file or add images/screenshots for the UI section!
