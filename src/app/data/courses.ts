export interface Course {
  id: string;
  title: string;
  department: string;
  duration: string;
  level: string;
  description: string;
  image: string;
  rating: number;
  students: number;
  skills: string[];
  careers: { role: string; salary: string }[];
  overview: string;
  prerequisites: string[];
  syllabus: { semester: string; topics: string[] }[];
}

export const courses: Course[] = [
  {
    id: "cs-101",
    title: "Computer Science & Engineering",
    department: "Engineering",
    duration: "4 Years",
    level: "Undergraduate",
    description: "Master programming, algorithms, and software development with hands-on projects and industry partnerships.",
    image: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzMzNjMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    students: 1250,
    skills: ["Python Programming", "Data Structures", "Web Development", "Machine Learning", "Cloud Computing", "DevOps"],
    careers: [
      { role: "Software Engineer", salary: "₹95,000 - ₹140,000" },
      { role: "Full Stack Developer", salary: "₹85,000 - ₹125,000" },
      { role: "ML Engineer", salary: "₹110,000 - ₹165,000" },
      { role: "Cloud Architect", salary: "₹125,000 - ₹180,000" }
    ],
    overview: "Our Computer Science & Engineering program is designed to produce industry-ready software professionals. The curriculum combines theoretical foundations with practical applications, ensuring graduates are equipped with cutting-edge skills in software development, artificial intelligence, and cloud technologies.",
    prerequisites: ["Mathematics (12th Grade)", "Physics (12th Grade)", "Basic Computer Knowledge"],
    syllabus: [
      {
        semester: "Semester 1-2",
        topics: ["C Programming", "Data Structures", "Digital Logic", "Mathematics for CS", "Computer Organization"]
      },
      {
        semester: "Semester 3-4",
        topics: ["Object-Oriented Programming", "Database Systems", "Operating Systems", "Computer Networks", "Web Technologies"]
      },
      {
        semester: "Semester 5-6",
        topics: ["Machine Learning", "Software Engineering", "Cloud Computing", "Mobile App Development", "Cybersecurity"]
      },
      {
        semester: "Semester 7-8",
        topics: ["Advanced AI", "DevOps", "Capstone Project", "Industry Internship", "Electives"]
      }
    ]
  },
  {
    id: "ba-102",
    title: "Business Administration (MBA)",
    department: "Business",
    duration: "2 Years",
    level: "Postgraduate",
    description: "Develop strategic thinking, leadership skills, and business acumen through case studies and real-world projects.",
    image: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzczMzg5MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    students: 890,
    skills: ["Strategic Planning", "Financial Analysis", "Marketing Strategy", "Leadership", "Data Analytics", "Project Management"],
    careers: [
      { role: "Business Analyst", salary: "₹75,000 - ₹110,000" },
      { role: "Marketing Manager", salary: "₹80,000 - ₹130,000" },
      { role: "Product Manager", salary: "₹95,000 - ₹150,000" },
      { role: "Management Consultant", salary: "₹90,000 - ₹155,000" }
    ],
    overview: "The MBA program at MIT ADT University focuses on developing versatile business leaders who can navigate complex global markets. With a strong emphasis on analytical thinking, strategic decision-making, and ethical leadership, our graduates are prepared to excel in diverse business environments.",
    prerequisites: ["Bachelor's Degree (Any Field)", "Work Experience (Preferred)", "Entrance Test (CAT/MAT/CMAT)"],
    syllabus: [
      {
        semester: "Semester 1",
        topics: ["Organizational Behavior", "Business Economics", "Financial Accounting", "Marketing Management", "Quantitative Methods"]
      },
      {
        semester: "Semester 2",
        topics: ["Strategic Management", "Operations Management", "Human Resource Management", "Financial Management", "Business Analytics"]
      },
      {
        semester: "Semester 3",
        topics: ["Digital Marketing", "International Business", "Entrepreneurship", "Leadership Development", "Specialization Electives"]
      },
      {
        semester: "Semester 4",
        topics: ["Business Strategy", "Corporate Governance", "Major Project", "Industry Internship", "Advanced Electives"]
      }
    ]
  },
  {
    id: "me-103",
    title: "Mechanical Engineering",
    department: "Engineering",
    duration: "4 Years",
    level: "Undergraduate",
    description: "Learn design, manufacturing, and automation with state-of-the-art labs and industry collaborations.",
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHJvYm90aWNzfGVufDF8fHx8MTc3MzQ2NzI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    students: 980,
    skills: ["CAD Design", "Thermodynamics", "Manufacturing", "Robotics", "Automation", "FEA Analysis"],
    careers: [
      { role: "Mechanical Engineer", salary: "₹70,000 - ₹105,000" },
      { role: "Design Engineer", salary: "₹75,000 - ₹115,000" },
      { role: "Automation Engineer", salary: "₹80,000 - ₹125,000" },
      { role: "R&D Engineer", salary: "₹85,000 - ₹130,000" }
    ],
    overview: "The Mechanical Engineering program provides comprehensive training in mechanical systems design, thermal sciences, and manufacturing technologies. Students gain hands-on experience with modern CAD tools, robotics, and automation systems.",
    prerequisites: ["Mathematics (12th Grade)", "Physics (12th Grade)", "Chemistry (12th Grade)"],
    syllabus: [
      {
        semester: "Semester 1-2",
        topics: ["Engineering Mechanics", "Engineering Drawing", "Materials Science", "Thermodynamics", "Manufacturing Processes"]
      },
      {
        semester: "Semester 3-4",
        topics: ["Fluid Mechanics", "Machine Design", "Heat Transfer", "Control Systems", "CAD/CAM"]
      },
      {
        semester: "Semester 5-6",
        topics: ["Robotics", "Automation", "FEA", "Industrial Engineering", "Renewable Energy Systems"]
      },
      {
        semester: "Semester 7-8",
        topics: ["Advanced Manufacturing", "Project Management", "Capstone Project", "Industry Training", "Electives"]
      }
    ]
  },
  {
    id: "ar-105",
    title: "Architecture & Design",
    department: "Design",
    duration: "5 Years",
    level: "Undergraduate",
    description: "Create innovative spaces and sustainable designs with advanced 3D modeling and urban planning courses.",
    image: "https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBkZXNpZ24lMjBibHVlcHJpbnR8ZW58MXx8fHwxNzczNDY3Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    students: 540,
    skills: ["AutoCAD", "3D Modeling", "Sustainable Design", "Urban Planning", "Interior Design", "Landscape Architecture"],
    careers: [
      { role: "Architect", salary: "₹65,000 - ₹110,000" },
      { role: "Interior Designer", salary: "₹55,000 - ₹90,000" },
      { role: "Urban Planner", salary: "₹70,000 - ₹115,000" },
      { role: "Landscape Architect", salary: "₹60,000 - ₹100,000" }
    ],
    overview: "The Architecture & Design program emphasizes creative problem-solving and sustainable design principles. Students learn to create functional and aesthetically pleasing spaces using cutting-edge design technologies.",
    prerequisites: ["Mathematics (12th Grade)", "Physics (12th Grade)", "NATA Qualification"],
    syllabus: [
      {
        semester: "Year 1",
        topics: ["Architectural Design", "Building Construction", "History of Architecture", "Architectural Graphics", "Environmental Studies"]
      },
      {
        semester: "Year 2",
        topics: ["Design Studio", "Building Materials", "Structural Systems", "Services & Utilities", "Computer-Aided Design"]
      },
      {
        semester: "Year 3",
        topics: ["Urban Design", "Landscape Architecture", "Sustainable Architecture", "Advanced Structures", "Building Estimation"]
      },
      {
        semester: "Year 4-5",
        topics: ["Professional Practice", "Interior Design", "Conservation Architecture", "Thesis Project", "Industry Training"]
      }
    ]
  },
  {
    id: "ds-106",
    title: "Data Science & Analytics",
    department: "Technology",
    duration: "4 Years",
    level: "Undergraduate",
    description: "Master big data, machine learning, and statistical analysis to drive data-driven decision making.",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzMzNTgzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    students: 780,
    skills: ["Python/R", "Machine Learning", "Big Data", "Statistics", "Data Visualization", "Deep Learning"],
    careers: [
      { role: "Data Scientist", salary: "₹100,000 - ₹150,000" },
      { role: "Data Analyst", salary: "₹70,000 - ₹105,000" },
      { role: "ML Engineer", salary: "₹110,000 - ₹165,000" },
      { role: "Business Intelligence Analyst", salary: "₹80,000 - ₹120,000" }
    ],
    overview: "The Data Science & Analytics program equips students with skills to extract insights from complex datasets. Learn to build predictive models, create data visualizations, and solve real-world business problems.",
    prerequisites: ["Mathematics (12th Grade)", "Statistics (Preferred)", "Basic Programming Knowledge"],
    syllabus: [
      {
        semester: "Semester 1-2",
        topics: ["Programming Fundamentals", "Statistics", "Linear Algebra", "Database Systems", "Data Structures"]
      },
      {
        semester: "Semester 3-4",
        topics: ["Machine Learning", "Data Mining", "Big Data Technologies", "Data Visualization", "Probability Theory"]
      },
      {
        semester: "Semester 5-6",
        topics: ["Deep Learning", "Natural Language Processing", "Time Series Analysis", "Cloud Analytics", "Advanced Statistics"]
      },
      {
        semester: "Semester 7-8",
        topics: ["AI & Ethics", "Capstone Project", "Industry Internship", "Research Methods", "Advanced Electives"]
      }
    ]
  },
  {
    id: "ai-107",
    title: "Artificial Intelligence",
    department: "Technology",
    duration: "4 Years",
    level: "Undergraduate",
    description: "Build intelligent systems with deep learning, neural networks, and cutting-edge AI technologies.",
    image: "https://images.unsplash.com/photo-1708373100061-f75279dbaa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwQUl8ZW58MXx8fHwxNzczNDY3Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    students: 920,
    skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "Reinforcement Learning", "AI Ethics"],
    careers: [
      { role: "AI Engineer", salary: "₹115,000 - ₹175,000" },
      { role: "Research Scientist", salary: "₹120,000 - ₹190,000" },
      { role: "Computer Vision Engineer", salary: "₹110,000 - ₹170,000" },
      { role: "NLP Engineer", salary: "₹105,000 - ₹165,000" }
    ],
    overview: "The Artificial Intelligence program focuses on developing next-generation intelligent systems. Students learn advanced AI techniques including deep learning, computer vision, and natural language processing.",
    prerequisites: ["Mathematics (12th Grade)", "Physics (12th Grade)", "Programming Knowledge (Preferred)"],
    syllabus: [
      {
        semester: "Semester 1-2",
        topics: ["Python Programming", "Mathematics for AI", "Data Structures", "Logic & Reasoning", "Introduction to AI"]
      },
      {
        semester: "Semester 3-4",
        topics: ["Machine Learning", "Neural Networks", "Computer Vision", "Natural Language Processing", "Probability & Statistics"]
      },
      {
        semester: "Semester 5-6",
        topics: ["Deep Learning", "Reinforcement Learning", "Generative AI", "AI Hardware", "Ethics in AI"]
      },
      {
        semester: "Semester 7-8",
        topics: ["Advanced AI Research", "Autonomous Systems", "AI Capstone Project", "Industry Collaboration", "Specialized Electives"]
      }
    ]
  },
  {
    id: "dm-108",
    title: "Digital Marketing",
    department: "Business",
    duration: "2 Years",
    level: "Postgraduate",
    description: "Master SEO, social media marketing, content strategy, and analytics to excel in the digital economy.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsfGVufDF8fHx8MTc3MzM5NjU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    students: 670,
    skills: ["SEO/SEM", "Social Media Marketing", "Content Strategy", "Google Analytics", "Email Marketing", "Performance Marketing"],
    careers: [
      { role: "Digital Marketing Manager", salary: "₹75,000 - ₹120,000" },
      { role: "SEO Specialist", salary: "₹60,000 - ₹95,000" },
      { role: "Social Media Manager", salary: "₹65,000 - ₹100,000" },
      { role: "Growth Hacker", salary: "₹80,000 - ₹130,000" }
    ],
    overview: "The Digital Marketing program prepares students for careers in the fast-paced digital marketing landscape. Learn to create data-driven campaigns, optimize online presence, and drive business growth through digital channels.",
    prerequisites: ["Bachelor's Degree (Any Field)", "Basic Marketing Knowledge (Preferred)"],
    syllabus: [
      {
        semester: "Semester 1",
        topics: ["Digital Marketing Fundamentals", "SEO & SEM", "Social Media Marketing", "Content Marketing", "Web Analytics"]
      },
      {
        semester: "Semester 2",
        topics: ["Email Marketing", "Mobile Marketing", "E-commerce Strategy", "Video Marketing", "Marketing Automation"]
      },
      {
        semester: "Semester 3",
        topics: ["Performance Marketing", "Influencer Marketing", "Conversion Optimization", "Marketing Analytics", "Brand Strategy"]
      },
      {
        semester: "Semester 4",
        topics: ["Advanced Analytics", "Digital Strategy", "Major Project", "Industry Internship", "Emerging Trends"]
      }
    ]
  }
];

export const departments = [
  "All Departments",
  "Engineering",
  "Business",
  "Technology",
  "Design"
];
