from transformers import pipeline

detector = pipeline(
    "image-classification",
    model="dima806/deepfake_vs_real_image_detection"
)

def predict_image(image_path):
    """
    Takes image path → returns label + confidence
    """

    try:
        result = detector(image_path)
        label = result[0]['label']
        confidence = round(result[0]['score'] * 100, 2)

        if label.lower() in ["fake", "deepfake"]:
            label = "FAKE"
        else:
            label = "REAL"

        return {
            "label": label,
            "confidence": confidence
        }

    except Exception as e:
        return {
            "label": "ERROR",
            "confidence": 0,
            "message": str(e)
        }