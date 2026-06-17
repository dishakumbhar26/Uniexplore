const BASE_URL = "http://localhost:8000";

// Get all courses from Python backend
export async function fetchCourses() {
  const response = await fetch(`${BASE_URL}/courses`);
  const data = await response.json();
  return data;
}

// Get single course
export async function fetchCourse(id: string) {
  const response = await fetch(`${BASE_URL}/courses/${id}`);
  const data = await response.json();
  return data;
}

// Search courses
export async function searchCourses(query: string) {
  const response = await fetch(`${BASE_URL}/search?q=${query}`);
  const data = await response.json();
  return data;
}

// Get recommendations
export async function getRecommendations(interests: string) {
  const response = await fetch(`${BASE_URL}/recommend?interests=${interests}`);
  const data = await response.json();
  return data;
}