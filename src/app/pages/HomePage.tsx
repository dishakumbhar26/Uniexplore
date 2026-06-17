import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search, Filter, Star, Users, Clock, ArrowRight } from "lucide-react";
import { departments } from "../data/courses";


export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [aiInterests, setAiInterests] = useState("");
  const [aiRecommendations, setAiRecommendations] = useState<any[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSearched, setAiSearched] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [courseList, setCourseList] = useState<any[]>([]);
  const getRecommendations = async () => {
  if (!aiInterests.trim()) return;
  setAiLoading(true);
  setAiSearched(true);
  try {
    const res = await fetch(
      `http://localhost:8000/recommend?interests=${encodeURIComponent(aiInterests)}`
    );
    const data = await res.json();
    setAiRecommendations(data);
  } catch (error) {
    console.error("Recommendation error:", error);
    setAiRecommendations([]);
  }
  setAiLoading(false);
};
useEffect(() => {
  fetch("http://localhost:8000/courses")
    .then(res => res.json())
    .then(data => setCourseList(data));
}, []);

  const filteredCourses = courseList.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "All Departments" || 
                              course.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle radial gradient background */}
      <div className="fixed inset-0 bg-gradient-radial from-white via-white to-[#FAF5FF] -z-10" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3E8FF] via-white to-[#FEF9E7]" />
        
        {/* Floating glowing orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C084FC] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F0A500] rounded-full blur-[100px] opacity-15" />
        
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `radial-gradient(circle, #6B3FA0 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#4A2575] relative">
              Discover Your Future at MIT ADT
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#6B3FA0] to-transparent" />
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Explore world-class programs designed to launch your career. From engineering to business, 
              find the perfect course for your ambitions.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, departments, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-[#D8B4FE] rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:border-transparent shadow-sm"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6B3FA0]">50+</div>
                <div className="text-sm text-gray-600 mt-1">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F0A500]">10K+</div>
                <div className="text-sm text-gray-600 mt-1">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#6B3FA0]">95%</div>
                <div className="text-sm text-gray-600 mt-1">Placement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="border-b border-[#D8B4FE] sticky top-[105px] z-40 relative">
        {/* Frosted glass background */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-[#D8B4FE]" style={{
          backgroundColor: 'rgba(243, 232, 255, 0.6)'
        }} />
        
        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
                  selectedDepartment === dept
                    ? "bg-[#6B3FA0] text-white shadow-md"
                    : "bg-white text-[#6B3FA0] border-2 border-[#6B3FA0] hover:bg-[#F3E8FF]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards - Netflix Style */}
      <section className="container mx-auto px-6 py-12 relative z-0">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#4A2575] relative inline-block">
            {selectedDepartment === "All Departments" ? "All Programs" : selectedDepartment}
            <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-gradient-to-r from-[#6B3FA0] to-transparent" />
          </h2>
          <span className="text-gray-500">{filteredCourses.length} courses found</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="group relative bg-white rounded-xl overflow-hidden border-2 border-[#D8B4FE] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#6B3FA0] hover:shadow-[#6B3FA0]/20"
              style={{
                background: 'linear-gradient(to bottom, rgba(107, 63, 160, 0.03) 0%, rgba(107, 63, 160, 0.03) 3px, white 3px, white 100%)'
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" style={{
                boxShadow: '0 0 20px rgba(107, 63, 160, 0.3)',
                zIndex: -1
              }} />
              
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F3E8FF] to-[#FAF5FF]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                
                {/* Level Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#6B3FA0] border border-[#D8B4FE]">
                  {course.level}
                </div>
              </div>

              {/* Course Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#F3E8FF] text-[#6B3FA0] text-xs rounded-md font-medium">
                    {course.department}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2 text-[#1A0A2E] group-hover:text-[#6B3FA0] transition-colors line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#F0A500] text-[#F0A500]" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[#D8B4FE]">
                  <span className="text-sm text-gray-500">Learn more</span>
                  <ArrowRight className="w-4 h-4 text-[#6B3FA0] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-500 text-lg">No courses found matching your criteria</div>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDepartment("All Departments");
              }}
              className="mt-4 px-6 py-3 bg-[#F0A500] text-[#4A2575] font-medium rounded-lg hover:bg-[#C47A4A] hover:text-white transition-colors shadow-md"
            >
              Clear Filters
            </button>
          </div>
        )}
        {/* AI RECOMMENDATION SECTION */}
<div className="mt-16 px-6 py-10 bg-gradient-to-br from-[#F3E8FF] to-white rounded-2xl border border-[#D8B4FE] mx-4 mb-10">
  
  {/* Header */}
  <div className="text-center mb-8">
    <div className="inline-flex items-center gap-2 bg-[#6B3FA0] text-white text-xs font-semibold px-4 py-2 rounded-full mb-4">
      ✨ AI Powered
    </div>
    <h2 className="text-2xl font-bold text-[#4A2575] mb-2">
      Find Your Perfect Program
    </h2>
    <p className="text-gray-500 text-sm">
      Tell us your interests and our AI will recommend the best courses for you
    </p>
  </div>

  {/* Input */}
  <div className="flex gap-3 max-w-2xl mx-auto mb-8">
    <input
      type="text"
      value={aiInterests}
      onChange={(e) => setAiInterests(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && getRecommendations()}
      placeholder="e.g. Python, Machine Learning, Data Analysis..."
      className="flex-1 px-4 py-3 border-2 border-[#D8B4FE] rounded-xl text-sm focus:outline-none focus:border-[#6B3FA0] bg-white"
    />
    <button
      onClick={getRecommendations}
      disabled={aiLoading}
      className="px-6 py-3 bg-[#6B3FA0] hover:bg-[#4A2575] text-white font-medium rounded-xl transition-colors text-sm disabled:opacity-50"
    >
      {aiLoading ? "Finding..." : "🔍 Find Courses"}
    </button>
  </div>

  {/* Quick interest tags */}
  <div className="flex flex-wrap gap-2 justify-center mb-8">
    {["Python", "Machine Learning", "Web Development", "Data Science", "Mechanical", "Business", "Design", "Cybersecurity"].map(tag => (
      <button
        key={tag}
        onClick={() => setAiInterests(tag)}
        className="px-3 py-1 bg-white border border-[#D8B4FE] text-[#6B3FA0] text-xs rounded-full hover:bg-[#6B3FA0] hover:text-white transition-colors"
      >
        {tag}
      </button>
    ))}
  </div>

  {/* Results */}
  {aiRecommendations.length > 0 && (
    <div>
      <p className="text-center text-sm text-[#6B3FA0] font-medium mb-4">
        ✅ Top {aiRecommendations.length} programs recommended for you
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {aiRecommendations.map((course: any, index: number) => (
          <div
            key={course.id}
            onClick={() => window.location.href = `/course/${course.id}`}
            className="bg-white rounded-xl border-2 border-[#D8B4FE] p-4 cursor-pointer hover:border-[#6B3FA0] hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#6B3FA0] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-xs text-[#6B3FA0] font-medium uppercase tracking-wide">
                {course.department}
              </span>
            </div>
            <h3 className="font-bold text-[#4A2575] text-sm mb-2 leading-tight">
              {course.title}
            </h3>
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">
              {course.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{course.duration}</span>
               {course.match_score && (
              <span className="text-xs font-bold text-green-600">
               {course.match_score}% match
               </span>
              )}
              <span className="text-xs font-bold text-[#F0A500]">★ {course.rating}</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {course.skills?.slice(0, 2).map((skill: string) => (
                <span key={skill} className="text-xs bg-[#F3E8FF] text-[#6B3FA0] px-2 py-0.5 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )}

  {/* No results */}
  {aiSearched && aiRecommendations.length === 0 && (
    <div className="text-center py-6">
      <div className="text-4xl mb-2">🤔</div>
      <p className="text-gray-500 text-sm">No matches found. Try different interests!</p>
    </div>
  )}

</div>
      </section>
    </div>
  );
}