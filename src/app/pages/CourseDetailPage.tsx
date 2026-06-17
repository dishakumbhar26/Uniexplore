import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Star, Users, Clock, CheckCircle, ArrowRight, BookOpen, Briefcase, DollarSign, TrendingUp } from "lucide-react";
import { courses } from "../data/courses";

// YouTube Video IDs for each course
// Replace PASTE_YOUR_ID_HERE with actual YouTube video IDs
const courseVideos: { [key: string]: string } = {
  "cs-101": "tJJGIoTlWZQ",
  "ai-107": "Q4-0sq48rxY",
  "ar-105": "AYhaCJXBw7g",
  "ba-102": "fFy16AY941A",
};

export function CourseDetailPage() {
  const { id } = useParams();
  const [showVideo, setShowVideo] = useState(false);
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#4A2575]">Course Not Found</h1>
        <Link to="/" className="text-[#6B3FA0] hover:text-[#4A2575]">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle radial gradient background */}
      <div className="fixed inset-0 bg-gradient-radial from-white via-white to-[#FAF5FF] -z-10" />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#6B3FA0] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to courses
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-[#D8B4FE] overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3E8FF] via-white to-[#FAF5FF]" />
        
        {/* Floating glowing orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C084FC] rounded-full blur-[100px] opacity-15" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F0A500] rounded-full blur-[80px] opacity-10" />
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Course Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#6B3FA0]/10 text-[#6B3FA0] text-sm rounded-md font-medium border border-[#6B3FA0]/20">
                  {course.department}
                </span>
                <span className="px-3 py-1 bg-[#F0A500]/10 text-[#C47A4A] text-sm rounded-md font-medium border border-[#F0A500]/20">
                  {course.level}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A2575]">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#F0A500]/10 rounded-lg">
                    <Star className="w-5 h-5 text-[#F0A500]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Rating</div>
                    <div className="font-bold text-gray-900">{course.rating}/5.0</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#6B3FA0]/10 rounded-lg">
                    <Users className="w-5 h-5 text-[#6B3FA0]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Students</div>
                    <div className="font-bold text-gray-900">{course.students.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#F0A500]/10 rounded-lg">
                    <Clock className="w-5 h-5 text-[#F0A500]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-bold text-gray-900">{course.duration}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#F0A500] hover:bg-[#C47A4A] text-white font-medium rounded-lg transition-colors shadow-md">
                  Apply Now
                </button>
                <Link
                  to="/compare"
                  className="px-8 py-3 bg-white hover:bg-[#F3E8FF] text-[#6B3FA0] font-medium rounded-lg transition-colors border-2 border-[#6B3FA0]"
                >
                  Compare Programs
                </Link>
                <button
                  onClick={() => setShowVideo(true)}
                  className="px-8 py-3 bg-white hover:bg-[#F3E8FF] text-[#6B3FA0] font-medium rounded-lg border-2 border-[#6B3FA0] flex items-center gap-2 transition-colors"
                >
                  ▶ Intro Video
               </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-[#D8B4FE] shadow-2xl">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B3FA0]/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Course Overview */}
            <div className="bg-white rounded-xl p-8 border-2 border-[#D8B4FE] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#6B3FA0]" />
                <h2 className="text-2xl font-bold text-[#4A2575]">Course Overview</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{course.overview}</p>
            </div>

            {/* Skills Taught */}
            <div className="bg-white rounded-xl p-8 border-2 border-[#D8B4FE] shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[#4A2575]">Skills You'll Learn</h2>
              <div className="grid grid-cols-2 gap-4">
                {course.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#F3E8FF] rounded-lg border border-[#D8B4FE] hover:border-[#6B3FA0] transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#6B3FA0] flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="bg-white rounded-xl p-8 border-2 border-[#D8B4FE] shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[#4A2575]">Curriculum</h2>
              <div className="space-y-4">
                {course.syllabus.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-[#FAF5FF] rounded-lg border border-[#D8B4FE]"
                  >
                    <h3 className="font-bold text-lg mb-3 text-[#6B3FA0]">{item.semester}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {item.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#F0A500] rounded-full mt-1.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white rounded-xl p-6 border-2 border-[#D8B4FE] shadow-sm sticky top-24">
              <h3 className="font-bold text-lg mb-4 text-[#4A2575]">Prerequisites</h3>
              <ul className="space-y-3">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#6B3FA0] mt-0.5 flex-shrink-0" />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-[#F3E8FF] to-[#FAF5FF] rounded-xl p-6 border-2 border-[#6B3FA0]">
              <h3 className="font-bold text-lg mb-4 text-[#4A2575]">Ready to Start?</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-[#F0A500] hover:bg-[#C47A4A] text-white font-medium rounded-lg transition-colors shadow-md">
                  Apply Now
                </button>
                <button className="w-full px-4 py-3 bg-white hover:bg-[#F3E8FF] text-[#6B3FA0] font-medium rounded-lg transition-colors border-2 border-[#6B3FA0]">
                  Download Brochure
                </button>
                <button className="w-full px-4 py-3 bg-white hover:bg-[#F3E8FF] text-[#6B3FA0] font-medium rounded-lg transition-colors border-2 border-[#6B3FA0]">
                  Schedule Campus Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Roadmap */}
      <section className="bg-gradient-to-br from-[#F3E8FF] to-[#FAF5FF] border-y border-[#D8B4FE] py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#4A2575]">Your Career Roadmap</h2>
            <p className="text-gray-600">Course → Skills → Jobs → Salary</p>
          </div>

          {/* Roadmap Flow */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1: Course */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 border-2 border-[#D8B4FE] shadow-sm h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B3FA0] to-[#4A2575] rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#4A2575]">Study</h3>
                <p className="text-sm text-gray-600 mb-3">{course.duration} program</p>
                <p className="text-xs text-gray-500">Complete comprehensive coursework and hands-on projects</p>
              </div>
              <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-[#6B3FA0]" />
            </div>

            {/* Step 2: Skills */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 border-2 border-[#D8B4FE] shadow-sm h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F0A500] to-[#C47A4A] rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#4A2575]">Skills</h3>
                <p className="text-sm text-gray-600 mb-3">{course.skills.length}+ key skills</p>
                <div className="flex flex-wrap gap-1">
                  {course.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-[#F3E8FF] text-[#6B3FA0] rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-[#F0A500]" />
            </div>

            {/* Step 3: Careers */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 border-2 border-[#D8B4FE] shadow-sm h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B3FA0] to-[#4A2575] rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#4A2575]">Careers</h3>
                <p className="text-sm text-gray-600 mb-3">{course.careers.length}+ roles</p>
                <ul className="space-y-1 text-xs text-gray-500">
                  {course.careers.slice(0, 2).map((career, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-[#6B3FA0] rounded-full" />
                      {career.role}
                    </li>
                  ))}
                </ul>
              </div>
              <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-[#6B3FA0]" />
            </div>

            {/* Step 4: Salary */}
            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300 h-full shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#4A2575]">Salary Range</h3>
                <p className="text-sm text-gray-600 mb-3">Average earnings</p>
                <p className="text-xl font-bold text-green-600">
                  {course.careers[0]?.salary || "Competitive"}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Career Paths */}
          <div className="mt-12 bg-white rounded-xl p-8 border-2 border-[#D8B4FE] shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-[#4A2575]">Career Opportunities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {course.careers.map((career, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#F3E8FF] rounded-lg border border-[#D8B4FE] hover:border-[#6B3FA0] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#6B3FA0] to-[#4A2575] rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{career.role}</h4>
                      <p className="text-sm text-green-600">{career.salary}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-[#4A2575]">Related Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses
            .filter(c => c.department === course.department && c.id !== course.id)
            .slice(0, 3)
            .map((relatedCourse) => (
              <Link
                key={relatedCourse.id}
                to={`/course/${relatedCourse.id}`}
                className="group bg-white rounded-xl overflow-hidden border-2 border-[#D8B4FE] hover:border-[#6B3FA0] transition-all hover:scale-105 shadow-sm"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={relatedCourse.image}
                    alt={relatedCourse.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-2 text-gray-900 group-hover:text-[#6B3FA0] transition-colors">
                    {relatedCourse.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#F0A500] text-[#F0A500]" />
                      <span>{relatedCourse.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{relatedCourse.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {showVideo && course && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
    onClick={() => setShowVideo(false)}
  >
    <div
      className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between p-4 border-b border-purple-100 bg-[#4A2575]">
        <div className="flex items-center gap-2">
          <span className="text-white text-lg">▶</span>
          <h3 className="font-bold text-white text-lg">
            {course.title} — Intro Video
          </h3>
        </div>
        <button
          onClick={() => setShowVideo(false)}
          className="text-white hover:text-gray-300 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20"
        >
          ✕
        </button>
      </div>
     <div className="p-4 bg-black">
  {courseVideos[course.id] ? (
    <iframe
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${courseVideos[course.id]}?autoplay=1`}
      title={`${course.title} Intro Video`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-xl"
    />
  ) : (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-5xl mb-4">🎬</div>
      <p className="text-white font-medium text-lg">
        Video coming soon!
      </p>
      <p className="text-gray-400 text-sm mt-2">
        We are currently creating an intro video for this program.
      </p>
    </div>
  )}
</div>
      <div className="p-3 bg-[#F3E8FF] flex items-center justify-between">
        <p className="text-sm text-[#6B3FA0] font-medium">
          🎓 MIT ADT University — {course.department}
        </p>
        <button
          onClick={() => setShowVideo(false)}
          className="text-xs text-[#6B3FA0] hover:underline font-medium"
        >
          Close Video
        </button>
      </div>
    </div>
  </div>
)}
      </section>
    </div>
  );
}