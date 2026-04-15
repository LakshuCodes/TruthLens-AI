from PIL import Image, ImageChops, ImageEnhance
import os

def generate_ela(image_path, quality=90):
    """
    Generates ELA (Error Level Analysis) image
    """

    try:
        original = Image.open(image_path).convert('RGB')

        temp_path = image_path + "_temp.jpg"
        original.save(temp_path, "JPEG", quality=quality)

        compressed = Image.open(temp_path)

        ela_image = ImageChops.difference(original, compressed)

        extrema = ela_image.getextrema()
        max_diff = max([pixel[1] for pixel in extrema])

        scale = 255.0 / max_diff if max_diff != 0 else 1

        ela_image = ImageEnhance.Brightness(ela_image).enhance(scale)

        ela_path = image_path.rsplit('.', 1)[0] + "_ela.jpg"
        ela_image.save(ela_path)

        if os.path.exists(temp_path):
            os.remove(temp_path)

        return ela_path

    except Exception as e:
        return None