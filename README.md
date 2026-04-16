🛡️ TruthLens AI

AI-Powered Deepfake Detection for Images & Videos

TruthLens AI is a full-stack web application that detects whether an image or video is REAL or FAKE using advanced AI/ML models and forensic techniques like Error Level Analysis (ELA).

🚀 Features
🔍 Deepfake Detection (Images & Videos)
🤖 AI Model Integration (Hugging Face Transformer)
🧪 ELA (Error Level Analysis) Heatmap
📊 Confidence Score + Risk Level
🎥 Frame-based Video Analysis
🔐 Authentication (Google Sign-In – optional)
📄 Downloadable Analysis Report
🎨 Modern UI (Next.js + Tailwind/Custom CSS)
🧠 AI Model Used

We use the Hugging Face model:

👉 https://huggingface.co/dima806/deepfake_vs_real_image_detection

Type: Image Classification Transformer
Task: Detect REAL vs FAKE images
Output: Label + Confidence Score
Works by identifying:
Compression artifacts
GAN inconsistencies
Pixel-level anomalies
🏗️ Tech Stack
Frontend
Next.js (React)
JavaScript / TypeScript
Custom CSS / Tailwind
Fetch API
Backend
Flask (Python)
OpenCV (video processing)
Pillow (image processing)
Transformers (Hugging Face)
PyTorch
📁 Project Structure
TruthLens-AI/
│
├── front/                 # Next.js Frontend
│   ├── src/
│   │   ├── screens/
│   │   └── lib/
│   └── package.json
│
├── back/                  # Flask Backend
│   ├── app.py
│   ├── model/
│   │   └── detector.py
│   ├── utils/
│   │   ├── ela.py
│   │   └── video.py
│   └── static/uploads/
│
└── README.md
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone <your-repo-url>
cd TruthLens-AI
2️⃣ Backend Setup
Create Virtual Environment
cd back
python3 -m venv venv
source venv/bin/activate   # Mac/Linux
Install Dependencies
pip install flask flask-cors transformers torch torchvision torchaudio opencv-python pillow
Run Backend
python app.py

Backend will run at:

http://127.0.0.1:5000
3️⃣ Frontend Setup
cd front
npm install
npm run dev

Frontend will run at:

http://localhost:3000
🔗 API Endpoints
📸 Analyze Image
POST /analyze-image

Input: FormData (file)
Output:

{
  "type": "image",
  "label": "FAKE",
  "confidence": 87.2,
  "original_image": "path",
  "ela_image": "path"
}
🎥 Analyze Video
POST /analyze-video

Output:

{
  "type": "video",
  "label": "REAL",
  "confidence": 72.5,
  "video_path": "path"
}
🔬 How It Works
User uploads image/video
Frontend sends file → Flask backend
Backend:
Saves file
Runs AI model (image or frames)
Generates ELA (for images)
Returns prediction + confidence
Frontend displays:
Result (REAL/FAKE)
Confidence score
Heatmap visualization
⚠️ Important Notes
Requires Python 3.10 (NOT 3.13)
First run may take time (model download)
Works best on CPU (no GPU required)
Video analysis samples frames (not full video)
📸 Demo Flow
Open website
Navigate through pages
Login using Google
Upload image/video
View result + confidence
Toggle ELA heatmap
Download report
📌 Future Improvements
🔥 Real-time webcam detection
☁️ Cloud deployment (AWS/Vercel)
📱 Mobile optimization
🧠 Better video models
📊 Detailed forensic reports
