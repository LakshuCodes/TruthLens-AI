const BACKEND_URL = "http://localhost:5000";

export async function analyzeImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BACKEND_URL}/analyze-image`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("Image analysis failed");
  return response.json();
}

export async function analyzeVideo(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BACKEND_URL}/analyze-video`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("Video analysis failed");
  return response.json();
}