from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# This allows your React frontend to talk to Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── ALL COURSE DATA ──────────────────────────────
courses = [
    {
        "id": "cs-101",
        "title": "Computer Science & Engineering",
        "department": "Engineering",
        "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        "duration": "4 Years",
        "level": "Undergraduate",
        "description": "Master programming, algorithms, and software development with hands-on projects and industry partnerships.",
        "rating": 4.8,
        "students": 1250,
        "skills": ["Python Programming", "Data Structures", "Web Development", "Machine Learning", "Cloud Computing", "DevOps"],
        "careers": [
            {"role": "Software Engineer", "salary": "₹7L - ₹18L"},
            {"role": "Full Stack Developer", "salary": "₹6L - ₹15L"},
            {"role": "ML Engineer", "salary": "₹10L - ₹25L"},
            {"role": "Cloud Architect", "salary": "₹12L - ₹30L"}
        ],
        "overview": "Our Computer Science & Engineering program is designed to produce industry-ready software professionals.",
        "prerequisites": ["Mathematics (12th Grade)", "Physics (12th Grade)", "Basic Computer Knowledge"],
        "syllabus": [
            {"semester": "Semester 1-2", "topics": ["C Programming", "Data Structures", "Digital Logic", "Mathematics for CS"]},
            {"semester": "Semester 3-4", "topics": ["OOP", "Database Systems", "Operating Systems", "Computer Networks"]},
            {"semester": "Semester 5-6", "topics": ["Machine Learning", "Software Engineering", "Cloud Computing", "Cybersecurity"]},
            {"semester": "Semester 7-8", "topics": ["Advanced AI", "DevOps", "Capstone Project", "Industry Internship"]}
        ]
    },
    {
        "id": "ai-107",
        "title": "Artificial Intelligence",
        "department": "Technology",
        "image": "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
        "duration": "4 Years",
        "level": "Undergraduate",
        "description": "Build intelligent systems with deep learning, neural networks, and cutting-edge AI technologies.",
        "rating": 4.9,
        "students": 920,
        "skills": ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "Reinforcement Learning", "AI Ethics"],
        "careers": [
            {"role": "AI Engineer", "salary": "₹12L - ₹30L"},
            {"role": "Research Scientist", "salary": "₹15L - ₹40L"},
            {"role": "Computer Vision Engineer", "salary": "₹10L - ₹28L"},
            {"role": "NLP Engineer", "salary": "₹10L - ₹25L"}
        ],
        "overview": "The Artificial Intelligence program focuses on developing next-generation intelligent systems.",
        "prerequisites": ["Mathematics (12th Grade)", "Physics (12th Grade)", "Programming Knowledge"],
        "syllabus": [
            {"semester": "Semester 1-2", "topics": ["Python Programming", "Mathematics for AI", "Data Structures", "Intro to AI"]},
            {"semester": "Semester 3-4", "topics": ["Machine Learning", "Neural Networks", "Computer Vision", "NLP"]},
            {"semester": "Semester 5-6", "topics": ["Deep Learning", "Reinforcement Learning", "Generative AI", "AI Ethics"]},
            {"semester": "Semester 7-8", "topics": ["Advanced AI Research", "Autonomous Systems", "AI Capstone Project"]}
        ]
    },
    {
        "id": "ds-106",
        "title": "Data Science & Analytics",
        "department": "Technology",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "duration": "4 Years",
        "level": "Undergraduate",
        "description": "Master big data, machine learning, and statistical analysis to drive data-driven decision making.",
        "rating": 4.8,
        "students": 780,
        "skills": ["Python/R", "Machine Learning", "Big Data", "Statistics", "Data Visualization", "Deep Learning"],
        "careers": [
            {"role": "Data Scientist", "salary": "₹10L - ₹25L"},
            {"role": "Data Analyst", "salary": "₹6L - ₹14L"},
            {"role": "ML Engineer", "salary": "₹10L - ₹25L"},
            {"role": "BI Analyst", "salary": "₹7L - ₹18L"}
        ],
        "overview": "The Data Science & Analytics program equips students with skills to extract insights from complex datasets.",
        "prerequisites": ["Mathematics (12th Grade)", "Statistics Preferred", "Basic Programming"],
        "syllabus": [
            {"semester": "Semester 1-2", "topics": ["Programming Fundamentals", "Statistics", "Linear Algebra", "Database Systems"]},
            {"semester": "Semester 3-4", "topics": ["Machine Learning", "Data Mining", "Big Data Technologies", "Data Visualization"]},
            {"semester": "Semester 5-6", "topics": ["Deep Learning", "NLP", "Time Series Analysis", "Cloud Analytics"]},
            {"semester": "Semester 7-8", "topics": ["AI & Ethics", "Capstone Project", "Industry Internship"]}
        ]
    },
    {
        "id": "me-103",
        "title": "Mechanical Engineering",
        "department": "Engineering",
        "image": "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
        "duration": "4 Years",
        "level": "Undergraduate",
        "description": "Learn design, manufacturing, and automation with state-of-the-art labs and industry collaborations.",
        "rating": 4.7,
        "students": 980,
        "skills": ["CAD Design", "Thermodynamics", "Manufacturing", "Robotics", "Automation", "FEA Analysis"],
        "careers": [
            {"role": "Mechanical Engineer", "salary": "₹4L - ₹10L"},
            {"role": "Design Engineer", "salary": "₹5L - ₹12L"},
            {"role": "Automation Engineer", "salary": "₹6L - ₹15L"},
            {"role": "R&D Engineer", "salary": "₹6L - ₹14L"}
        ],
        "overview": "The Mechanical Engineering program provides comprehensive training in mechanical systems design.",
        "prerequisites": ["Mathematics (12th Grade)", "Physics (12th Grade)", "Chemistry (12th Grade)"],
        "syllabus": [
            {"semester": "Semester 1-2", "topics": ["Engineering Mechanics", "Engineering Drawing", "Materials Science", "Thermodynamics"]},
            {"semester": "Semester 3-4", "topics": ["Fluid Mechanics", "Machine Design", "Heat Transfer", "CAD/CAM"]},
            {"semester": "Semester 5-6", "topics": ["Robotics", "Automation", "FEA", "Industrial Engineering"]},
            {"semester": "Semester 7-8", "topics": ["Advanced Manufacturing", "Project Management", "Capstone Project"]}
        ]
    },
    {
        "id": "ba-102",
        "title": "Business Administration (MBA)",
        "department": "Business",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
        "duration": "2 Years",
        "level": "Postgraduate",
        "description": "Develop strategic thinking, leadership skills, and business acumen through case studies.",
        "rating": 4.6,
        "students": 890,
        "skills": ["Strategic Planning", "Financial Analysis", "Marketing Strategy", "Leadership", "Data Analytics"],
        "careers": [
            {"role": "Business Analyst", "salary": "₹6L - ₹14L"},
            {"role": "Marketing Manager", "salary": "₹7L - ₹18L"},
            {"role": "Product Manager", "salary": "₹10L - ₹25L"},
            {"role": "Management Consultant", "salary": "₹8L - ₹20L"}
        ],
        "overview": "The MBA program at MIT ADT University focuses on developing versatile business leaders.",
        "prerequisites": ["Bachelor's Degree", "Work Experience Preferred", "CAT/MAT/CMAT"],
        "syllabus": [
            {"semester": "Semester 1", "topics": ["Organizational Behavior", "Business Economics", "Financial Accounting", "Marketing"]},
            {"semester": "Semester 2", "topics": ["Strategic Management", "Operations Management", "HR Management", "Business Analytics"]},
            {"semester": "Semester 3", "topics": ["Digital Marketing", "International Business", "Entrepreneurship"]},
            {"semester": "Semester 4", "topics": ["Business Strategy", "Corporate Governance", "Major Project", "Industry Internship"]}
        ]
    },
    {
        "id": "ar-105",
        "title": "Architecture & Design",
        "department": "Design",
        "image": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
        "duration": "5 Years",
        "level": "Undergraduate",
        "description": "Create innovative spaces and sustainable designs with advanced 3D modeling and urban planning.",
        "rating": 4.5,
        "students": 540,
        "skills": ["AutoCAD", "3D Modeling", "Sustainable Design", "Urban Planning", "Interior Design"],
        "careers": [
            {"role": "Architect", "salary": "₹4L - ₹12L"},
            {"role": "Interior Designer", "salary": "₹3L - ₹10L"},
            {"role": "Urban Planner", "salary": "₹5L - ₹14L"},
            {"role": "Landscape Architect", "salary": "₹4L - ₹12L"}
        ],
        "overview": "The Architecture & Design program emphasizes creative problem-solving and sustainable design principles.",
        "prerequisites": ["Mathematics (12th Grade)", "Physics (12th Grade)", "NATA Qualification"],
        "syllabus": [
            {"semester": "Year 1", "topics": ["Architectural Design", "Building Construction", "History of Architecture"]},
            {"semester": "Year 2", "topics": ["Design Studio", "Building Materials", "Structural Systems", "CAD"]},
            {"semester": "Year 3", "topics": ["Urban Design", "Landscape Architecture", "Sustainable Architecture"]},
            {"semester": "Year 4-5", "topics": ["Professional Practice", "Interior Design", "Thesis Project"]}
        ]
    },
    {
        "id": "dm-108",
        "title": "Digital Marketing",
        "department": "Business",
        "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
        "duration": "2 Years",
        "level": "Postgraduate",
        "description": "Master SEO, social media marketing, content strategy, and analytics.",
        "rating": 4.6,
        "students": 670,
        "skills": ["SEO/SEM", "Social Media Marketing", "Content Strategy", "Google Analytics", "Email Marketing"],
        "careers": [
            {"role": "Digital Marketing Manager", "salary": "₹6L - ₹15L"},
            {"role": "SEO Specialist", "salary": "₹4L - ₹10L"},
            {"role": "Social Media Manager", "salary": "₹4L - ₹12L"},
            {"role": "Growth Hacker", "salary": "₹6L - ₹18L"}
        ],
        "overview": "The Digital Marketing program prepares students for careers in the fast-paced digital marketing landscape.",
        "prerequisites": ["Bachelor's Degree Any Field", "Basic Marketing Knowledge Preferred"],
        "syllabus": [
            {"semester": "Semester 1", "topics": ["Digital Marketing Fundamentals", "SEO & SEM", "Social Media Marketing"]},
            {"semester": "Semester 2", "topics": ["Email Marketing", "Mobile Marketing", "E-commerce Strategy"]},
            {"semester": "Semester 3", "topics": ["Performance Marketing", "Influencer Marketing", "Brand Strategy"]},
            {"semester": "Semester 4", "topics": ["Advanced Analytics", "Digital Strategy", "Major Project"]}
        ]
    }
]

# ── API ROUTES ────────────────────────────────────

# Home route
@app.get("/")
def home():
    return {
        "message": "Welcome to UniExplore API!",
        "version": "1.0",
        "university": "MIT ADT University"
    }

# Get all courses
@app.get("/courses")
def get_all_courses():
    return courses

# Get single course by ID
@app.get("/courses/{course_id}")
def get_course(course_id: str):
    for course in courses:
        if course["id"] == course_id:
            return course
    return {"error": "Course not found"}

# Get courses by department
@app.get("/courses/department/{dept}")
def get_by_department(dept: str):
    filtered = [c for c in courses if c["department"].lower() == dept.lower()]
    return filtered

# Search courses
@app.get("/search")
def search_courses(q: str):
    results = []
    for course in courses:
        if (q.lower() in course["title"].lower() or
            q.lower() in course["department"].lower() or
            any(q.lower() in skill.lower() for skill in course["skills"])):
            results.append(course)
    return results

# Get all departments
@app.get("/departments")
def get_departments():
    depts = list(set(c["department"] for c in courses))
    return depts

# AI Recommendation endpoint
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

@app.get("/recommend")
def recommend_courses(interests: str):
    if not interests.strip():
        return []

    # Step 1 — Create a text description for each course
    # combining title + department + all skills into one string
    course_texts = []
    for course in courses:
        skills_text = " ".join(course["skills"])
        combined = f"{course['title']} {course['department']} {skills_text}"
        course_texts.append(combined.lower())

    # Step 2 — Add student interests as the last item
    all_texts = course_texts + [interests.lower()]

    # Step 3 — Convert all text to TF-IDF vectors
    # TF-IDF = Term Frequency Inverse Document Frequency
    # It measures how important each word is
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(all_texts)

    # Step 4 — Calculate cosine similarity
    # Cosine similarity measures the angle between two vectors
    # Score of 1 = perfect match, Score of 0 = no match
    student_vector = tfidf_matrix[-1]  # last item is student interests
    course_vectors = tfidf_matrix[:-1]  # all other items are courses

    similarity_scores = cosine_similarity(student_vector, course_vectors)[0]

    # Step 5 — Get top 3 most similar courses
    top_indices = np.argsort(similarity_scores)[::-1][:3]

    # Step 6 — Only return courses with similarity > 0
    results = []
    for i in top_indices:
        if similarity_scores[i] > 0:
            course = courses[i].copy()
            course["match_score"] = round(float(similarity_scores[i]) * 100, 1)
            results.append(course)

    return results