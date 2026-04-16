# 🛡️ TruthLens AI  
AI-Powered Deepfake Detection for Images & Videos

TruthLens AI is a full-stack web application that detects whether an image or video is REAL or FAKE using advanced AI/ML models and forensic techniques like Error Level Analysis (ELA).

---

DEMO - {https://youtu.be/7M6BlRiKiGc?si=HYMEWQCKeC0IeNVi}

---

## 🚀 Features

- Deepfake Detection (Images & Videos)  
- AI Model Integration (Hugging Face Transformer)  
- ELA (Error Level Analysis) Heatmap  
- Confidence Score + Risk Level  
- Frame-based Video Analysis  
- Google Sign-In (optional)  
- Downloadable Analysis Report  
- Modern UI (Next.js)

---

## 🧠 AI Model Used

Hugging Face Model:  
https://huggingface.co/dima806/deepfake_vs_real_image_detection

- Type: Image Classification Transformer  
- Task: Detect REAL vs FAKE images  
- Detects:
  - Compression artifacts  
  - GAN inconsistencies  
  - Pixel-level anomalies  

---

## 🏗️ Tech Stack

Frontend:
- Next.js (React)
- JavaScript / TypeScript
- CSS

Backend:
- Flask (Python)
- OpenCV
- Pillow
- Transformers (Hugging Face)
- PyTorch

---

## 📁 Project Structure

TruthLens-AI/

  front/                  → Next.js frontend  
  back/                   → Flask backend  

    app.py                → Main backend server  
    model/detector.py     → AI model logic  
    utils/ela.py          → ELA generation  
    utils/video.py        → Video analysis  

---

## ⚙️ Setup Instructions

### 1. Clone Repository

git clone <your-repo-url>  
cd TruthLens-AI  

---

### 2. Backend Setup

cd back  

Create virtual environment:
python3 -m venv venv  
source venv/bin/activate  

Install dependencies:
pip install flask flask-cors transformers torch torchvision torchaudio opencv-python pillow  

Run backend:
python app.py  

Backend runs on:
http://127.0.0.1:5000  

---

### 3. Frontend Setup

cd front  

Install dependencies:
npm install  

Run frontend:
npm run dev  

Frontend runs on:
http://localhost:3000  

---

## 🔗 API Endpoints

POST /analyze-image  

Input: file  

Output:
{
  "type": "image",
  "label": "FAKE",
  "confidence": 87.2,
  "original_image": "path",
  "ela_image": "path"
}

---

POST /analyze-video  

Output:
{
  "type": "video",
  "label": "REAL",
  "confidence": 72.5,
  "video_path": "path"
}

---

## 🔬 How It Works

1. User uploads image or video  
2. Frontend sends file to Flask backend  
3. Backend:
   - Saves file  
   - Runs AI model  
   - Generates ELA (for images)  
4. Returns prediction + confidence  
5. Frontend displays result and visualization  

---

## ⚠️ Important Notes

- Use Python 3.10 (not 3.13)  
- First run will download model  
- Works on CPU  
- Video analysis uses sampled frames  

---

## 📸 Demo Flow

1. Open website  
2. Navigate pages  
3. Login with Google  
4. Upload file  
5. View result + confidence  
6. Toggle ELA heatmap  
7. Download report  

---

## 📌 Future Improvements

- Real-time webcam detection  
- Cloud deployment  
- Mobile optimization  
- Better video models  
- Advanced reports  

---
