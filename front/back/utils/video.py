import cv2
import os
from model.detector import predict_image


def analyze_video(video_path):
    """
    Analyze video by extracting frames and running model
    """

    try:
        cap = cv2.VideoCapture(video_path)

        if not cap.isOpened():
            return {"label": "ERROR", "confidence": 0}

        fps = cap.get(cv2.CAP_PROP_FPS)

        if fps == 0:
            fps = 25

        frame_interval = int(fps)  # 1 frame per second

        predictions = []
        frame_count = 0
        saved_frames = 0

        temp_folder = "static/uploads/temp_frames"
        os.makedirs(temp_folder, exist_ok=True)

        while True:
            ret, frame = cap.read()
            if not ret:
                break

            if frame_count % frame_interval == 0:
                frame_path = os.path.join(temp_folder, f"frame_{frame_count}.jpg")

                cv2.imwrite(frame_path, frame)

                result = predict_image(frame_path)

                if result["label"] != "ERROR":
                    predictions.append(result["confidence"])

                saved_frames += 1

                if saved_frames >= 10:
                    break

            frame_count += 1

        cap.release()

        for file in os.listdir(temp_folder):
            os.remove(os.path.join(temp_folder, file))

        if len(predictions) == 0:
            return {"label": "UNKNOWN", "confidence": 0}

        avg_conf = sum(predictions) / len(predictions)

        label = "FAKE" if avg_conf > 50 else "REAL"

        return {
            "label": label,
            "confidence": round(avg_conf, 2)
        }

    except Exception as e:
        return {
            "label": "ERROR",
            "confidence": 0,
            "message": str(e)
        }