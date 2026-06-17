import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Check, X, Star, Clock, Users, DollarSign, ChevronDown } from "lucide-react";
import { courses } from "../data/courses";

export function ComparisonPage() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([
    courses[0].id,
    courses[1].id
  ]);

  const handleCourseChange = (index: number, courseId: string) => {
    const newSelection = [...selectedCourses];
    newSelection[index] = courseId;
    setSelectedCourses(newSelection);
  };

  const comparedCourses = selectedCourses.map(id => courses.find(c => c.id === id)!);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle radial gradient background */}
      <div className="fixed inset-0 bg-gradient-radial from-white via-white to-[#FAF5FF] -z-10" />
      
      {/* Header */}
      <div className="relative border-b border-[#D8B4FE] overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3E8FF] via-white to-[#FAF5FF]" />
        
        {/* Floating glowing orbs */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C084FC] rounded-full blur-[80px] opacity-15" />
        
        <div className="container mx-auto px-6 py-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#6B3FA0] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to courses
          </Link>
          
          <h1 className="text-4xl font-bold mb-2 text-[#4A2575] text-center block relative">
            Compare Programs
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#6B3FA0] to-transparent" />
          </h1>
          <p className="text-gray-600 mt-4 text-center">Compare 2 courses side-by-side to find the perfect fit</p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-xl border-2 border-[#D8B4FE] overflow-hidden shadow-lg">
          {/* Course Selectors */}
          <div className="grid grid-cols-3 border-b border-[#D8B4FE]">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE]">
              <h3 className="font-bold text-lg text-[#4A2575]">Features</h3>
            </div>
            {selectedCourses.map((courseId, index) => {
              const course = courses.find(c => c.id === courseId);
              return (
                <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0">
                  <div className="relative">
                    <select
                      value={courseId}
                      onChange={(e) => handleCourseChange(index, e.target.value)}
                      className="w-full p-3 bg-white border-2 border-[#6B3FA0] rounded-lg text-gray-900 appearance-none cursor-pointer hover:bg-[#F3E8FF] transition-colors pr-10 font-medium"
                    >
                      {courses.map((c) => (
                        <option key={c.id} value={c.id} className="bg-white">
                          {c.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B3FA0] pointer-events-none" />
                  </div>
                  
                  {course && (
                    <div className="mt-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-32 object-cover rounded-lg mb-3 border-2 border-[#D8B4FE]"
                      />
                      <span className="px-2 py-1 bg-[#F3E8FF] text-[#6B3FA0] text-xs rounded-md font-medium border border-[#D8B4FE]">
                        {course.department}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE] border-b border-[#D8B4FE]">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#F0A500]" />
                <span className="font-medium text-gray-900">Rating</span>
              </div>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0 border-b border-[#D8B4FE]">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#F0A500] text-[#F0A500]" />
                  <span className="font-bold text-lg text-gray-900">{course.rating}/5.0</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE] border-b border-[#D8B4FE]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#6B3FA0]" />
                <span className="font-medium text-gray-900">Duration</span>
              </div>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0 border-b border-[#D8B4FE]">
                <span className="font-medium text-gray-900">{course.duration}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE] border-b border-[#D8B4FE]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#6B3FA0]" />
                <span className="font-medium text-gray-900">Enrolled Students</span>
              </div>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0 border-b border-[#D8B4FE]">
                <span className="font-medium text-gray-900">{course.students.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE] border-b border-[#D8B4FE]">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">Level</span>
              </div>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0 border-b border-[#D8B4FE]">
                <span className="px-2 py-1 bg-[#F0A500]/10 text-[#C47A4A] text-sm rounded-md font-medium border border-[#F0A500]/30">
                  {course.level}
                </span>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE] border-b border-[#D8B4FE]">
              <span className="font-bold text-lg text-[#4A2575]">Skills Taught</span>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0 border-b border-[#D8B4FE]">
                <div className="space-y-2">
                  {course.skills.slice(0, 6).map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-[#6B3FA0] flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                  {course.skills.length > 6 && (
                    <span className="text-xs text-gray-500">
                      +{course.skills.length - 6} more skills
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Career Paths */}
          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE] border-b border-[#D8B4FE]">
              <span className="font-bold text-lg text-[#4A2575]">Career Paths</span>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0 border-b border-[#D8B4FE]">
                <div className="space-y-3">
                  {course.careers.slice(0, 4).map((career, careerIndex) => (
                    <div key={careerIndex} className="text-sm">
                      <div className="font-medium text-gray-900">{career.role}</div>
                      <div className="flex items-center gap-1 text-green-600 text-xs">
                        <DollarSign className="w-3 h-3" />
                        <span>{career.salary}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prerequisites */}
          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE] border-b border-[#D8B4FE]">
              <span className="font-bold text-lg text-[#4A2575]">Prerequisites</span>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0 border-b border-[#D8B4FE]">
                <div className="space-y-2">
                  {course.prerequisites.map((prereq, prereqIndex) => (
                    <div key={prereqIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{prereq}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Curriculum Complexity */}
          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE] border-b border-[#D8B4FE]">
              <span className="font-bold text-lg text-[#4A2575]">Curriculum</span>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0 border-b border-[#D8B4FE]">
                <div className="space-y-2">
                  <div className="text-sm text-gray-700 font-medium">
                    {course.syllabus.length} phases
                  </div>
                  <div className="text-xs text-gray-500">
                    Topics include: {course.syllabus[0]?.topics.slice(0, 2).join(", ")}...
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Department */}
          <div className="grid grid-cols-3">
            <div className="p-6 bg-[#F3E8FF] border-r border-[#D8B4FE]">
              <span className="font-medium text-gray-900">Department</span>
            </div>
            {comparedCourses.map((course, index) => (
              <div key={index} className="p-6 border-r border-[#D8B4FE] last:border-r-0">
                <span className="font-medium text-gray-900">{course.department}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          {comparedCourses.map((course, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Link
                to={`/course/${course.id}`}
                className="w-full px-6 py-3 bg-[#6B3FA0] hover:bg-[#4A2575] text-white font-medium rounded-lg transition-colors text-center shadow-md"
              >
                View Details
              </Link>
              <button className="w-full px-6 py-3 bg-[#F0A500] hover:bg-[#C47A4A] text-white font-medium rounded-lg transition-colors border-2 border-[#F0A500] shadow-md">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Tips */}
        <div className="mt-12 bg-gradient-to-br from-[#F3E8FF] to-[#FAF5FF] rounded-xl p-8 border-2 border-[#6B3FA0]">
          <h3 className="font-bold text-xl mb-4 text-[#4A2575]">💡 Comparison Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
              <span>Consider the career paths and salary ranges that align with your goals</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
              <span>Review the prerequisites to ensure you meet the admission requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
              <span>Compare the skills taught to identify which program offers the most relevant training</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
              <span>Duration matters - balance your time commitment with career objectives</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}