from flask import Flask, request, jsonify
import os


from model.detector import predict_image
from utils.ela import generate_ela
from utils.video import analyze_video
from flask_cors import CORS
from flask import send_from_directory

app = Flask(__name__)
CORS(app)


# Upload folder setup
UPLOAD_FOLDER = "static/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


#Image analysis route
@app.route("/analyze-image", methods=["POST"])
def analyze_image():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
    file.save(file_path)

    
    prediction = predict_image(file_path)
    ela_path = generate_ela(file_path)

    return jsonify({
        "type": "image",
        "label": prediction["label"],
        "confidence": prediction["confidence"],
        "original_image": file_path,
        "ela_image": ela_path
    })

#Video analysis route
@app.route("/analyze-video", methods=["POST"])
def analyze_video_route():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
    file.save(file_path)

    result = analyze_video(file_path)

    return jsonify({
        "type": "video",
        "label": result["label"],
        "confidence": result["confidence"],
        "video_path": file_path
    })

@app.route('/static/uploads/<path:filename>')
def serve_file(filename):
    return send_from_directory('static/uploads', filename)


@app.route("/")
def home():
    return "Backend is running"


if __name__ == "__main__":
    app.run(debug=True)