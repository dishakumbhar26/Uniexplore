import { useState } from "react";
import { 
  FileText, 
  Beaker, 
  Presentation, 
  Globe, 
  AlertCircle,
  BookOpen,
  Award,
  CheckCircle,
  Filter,
  Laptop,
  Bot,
  Settings,
  Dna,
  Shield,
  BarChart3,
  ChevronRight,
  RotateCcw
} from "lucide-react";

type ExamType = "written" | "written-practical" | "practical" | "nptel";

interface Subject {
  name: string;
  code: string;
  credits: number;
  internalMarks: number;
  externalMarks: number;
  internalBreakdown: string;
  examType: ExamType;
  special: string;
}

interface DegreeProgram {
  id: string;
  name: string;
  shortName: string;
  department: string;
  icon: typeof Laptop;
}

const degreePrograms: DegreeProgram[] = [
  {
    id: "btech-cse",
    name: "B.Tech Computer Science and Engineering",
    shortName: "B.Tech CSE",
    department: "School of Engineering",
    icon: Laptop
  },
  {
    id: "btech-ai-ds",
    name: "B.Tech AI and Data Science",
    shortName: "B.Tech AI & DS",
    department: "School of Computing",
    icon: Bot
  },
  {
    id: "btech-mech",
    name: "B.Tech Mechanical Engineering",
    shortName: "B.Tech Mechanical",
    department: "School of Engineering",
    icon: Settings
  },
  {
    id: "btech-biotech",
    name: "B.Tech Biotechnology",
    shortName: "B.Tech Biotechnology",
    department: "School of Life Sciences",
    icon: Dna
  },
  {
    id: "btech-cyber",
    name: "B.Tech Cybersecurity",
    shortName: "B.Tech Cybersecurity",
    department: "School of Computing",
    icon: Shield
  },
  {
    id: "mtech-ds",
    name: "M.Tech Data Science",
    shortName: "M.Tech Data Science",
    department: "School of Computing",
    icon: BarChart3
  }
];

const subjects: Subject[] = [
  {
    name: "Mathematics (Applied)",
    code: "CS301",
    credits: 4,
    internalMarks: 30,
    externalMarks: 70,
    internalBreakdown: "20 assignments + 10 attendance",
    examType: "written",
    special: "No special requirement"
  },
  {
    name: "Operating Systems",
    code: "CS302",
    credits: 4,
    internalMarks: 30,
    externalMarks: 70,
    internalBreakdown: "20 assignments + 10 attendance",
    examType: "written",
    special: "No special requirement"
  },
  {
    name: "Artificial Intelligence & ML",
    code: "CS303",
    credits: 4,
    internalMarks: 40,
    externalMarks: 60,
    internalBreakdown: "20 written assignments + 20 practical",
    examType: "written-practical",
    special: "Practical jury conducted in lab before exams"
  },
  {
    name: "Database Management Systems",
    code: "CS304",
    credits: 4,
    internalMarks: 40,
    externalMarks: 60,
    internalBreakdown: "20 written assignments + 20 practical",
    examType: "written-practical",
    special: "Practical jury conducted in lab before exams"
  },
  {
    name: "Data Structures & Algorithms",
    code: "CS305",
    credits: 4,
    internalMarks: 50,
    externalMarks: 50,
    internalBreakdown: "30 practical performance + 20 viva",
    examType: "practical",
    special: "Live coding demonstration to jury panel"
  },
  {
    name: "Java Programming",
    code: "CS306",
    credits: 3,
    internalMarks: 50,
    externalMarks: 50,
    internalBreakdown: "30 practical performance + 20 viva",
    examType: "practical",
    special: "Build and present a complete Java project"
  },
  {
    name: "Python Programming",
    code: "CS307",
    credits: 3,
    internalMarks: 50,
    externalMarks: 50,
    internalBreakdown: "30 practical performance + 20 viva",
    examType: "practical",
    special: "Build and present a Python project to jury"
  },
  {
    name: "Design & Analysis of Algorithms",
    code: "CS308",
    credits: 3,
    internalMarks: 50,
    externalMarks: 50,
    internalBreakdown: "50 internal assessment",
    examType: "nptel",
    special: "Must complete NPTEL course and submit certificate before exam registration"
  }
];

const examTypes = {
  written: {
    label: "Written Paper Exam",
    color: "bg-blue-500",
    textColor: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: FileText,
    description: "Traditional written examination"
  },
  "written-practical": {
    label: "Written + Practical Jury",
    color: "bg-[#6B3FA0]",
    textColor: "text-[#6B3FA0]",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: Beaker,
    description: "Written paper AND practical jury exam"
  },
  practical: {
    label: "Practical Jury Only",
    color: "bg-green-500",
    textColor: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: Presentation,
    description: "Only practical demonstration to jury"
  },
  nptel: {
    label: "External Course (NPTEL)",
    color: "bg-[#F0A500]",
    textColor: "text-[#C47A4A]",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: Globe,
    description: "Complete an external NPTEL course online"
  }
};

export function StudentCornerPage() {
  const [selectedDegree, setSelectedDegree] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [showSubjects, setShowSubjects] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<ExamType | "all">("all");

  const filteredSubjects = selectedFilter === "all" 
    ? subjects 
    : subjects.filter(s => s.examType === selectedFilter);

  const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);

  const selectedDegreeInfo = degreePrograms.find(d => d.id === selectedDegree);

  const handleViewSubjects = () => {
    setShowSubjects(true);
  };

  const handleChangeSelection = () => {
    setShowSubjects(false);
    setSelectedDegree(null);
    setSelectedSemester(null);
    setSelectedFilter("all");
  };

  // Check if selected combination has data (only B.Tech CSE Semester 5 has data)
  const hasSubjectData = selectedDegree === "btech-cse" && selectedSemester === 5;

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle radial gradient background */}
      <div className="fixed inset-0 bg-gradient-radial from-white via-white to-[#FAF5FF] -z-10" />
      
      {/* Header Banner */}
      <div className="relative border-b border-[#D8B4FE] overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B3FA0] via-[#5A3585] to-[#4A2575]" />
        
        {/* Floating glowing orbs */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F0A500] rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white rounded-full blur-[80px] opacity-10" />
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Student Corner</h1>
              <p className="text-purple-100 mt-1">Academic Guide</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {!showSubjects ? (
          // SELECTION SCREEN
          <div>
            {/* Welcome Message */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#4A2575] mb-3">
                Welcome to Student Corner — Academic Guide
              </h2>
              <p className="text-lg text-gray-600">
                Please select your program and semester to view your subjects and exam details
              </p>
            </div>

            {/* Step 1: Degree Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#4A2575] mb-6 flex items-center gap-2">
                <span className="bg-[#6B3FA0] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Select Your Program
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {degreePrograms.map((degree) => {
                  const Icon = degree.icon;
                  const isSelected = selectedDegree === degree.id;
                  
                  return (
                    <button
                      key={degree.id}
                      onClick={() => {
                        setSelectedDegree(degree.id);
                        setSelectedSemester(null);
                      }}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        isSelected
                          ? "bg-[#F3E8FF] border-[#6B3FA0] shadow-lg"
                          : "bg-white border-[#D8B4FE] hover:bg-[#FAF5FF] hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          isSelected ? "bg-[#6B3FA0]" : "bg-[#F3E8FF]"
                        }`}>
                          <Icon className={`w-8 h-8 ${
                            isSelected ? "text-white" : "text-[#6B3FA0]"
                          }`} />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-lg text-[#4A2575] mb-1">
                            {degree.name}
                          </h4>
                          <p className="text-sm text-gray-600">{degree.department}</p>
                        </div>
                        {isSelected && (
                          <CheckCircle className="w-6 h-6 text-[#6B3FA0] flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Semester Selection (only show if degree is selected) */}
            {selectedDegree && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#4A2575] mb-6 flex items-center gap-2">
                  <span className="bg-[#6B3FA0] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Select Your Semester
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => {
                    const isSelected = selectedSemester === semester;
                    
                    return (
                      <button
                        key={semester}
                        onClick={() => setSelectedSemester(semester)}
                        className={`px-6 py-3 rounded-full font-medium transition-all ${
                          isSelected
                            ? "bg-[#6B3FA0] text-white shadow-md"
                            : "bg-white border-2 border-[#6B3FA0] text-[#6B3FA0] hover:bg-[#F3E8FF]"
                        }`}
                      >
                        Semester {semester}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* View My Subjects Button */}
            {selectedDegree && selectedSemester && (
              <div className="text-center">
                <button
                  onClick={handleViewSubjects}
                  className="px-8 py-4 bg-[#6B3FA0] hover:bg-[#4A2575] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  View My Subjects
                </button>
              </div>
            )}
          </div>
        ) : (
          // SUBJECTS DISPLAY SECTION
          <div>
            {/* Breadcrumb and Change Selection */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-5 h-5 text-[#6B3FA0]" />
                <span className="text-sm">Student Corner</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-sm font-medium text-[#4A2575]">{selectedDegreeInfo?.shortName}</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-sm font-medium text-[#4A2575]">Semester {selectedSemester}</span>
              </div>
              
              <button
                onClick={handleChangeSelection}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#6B3FA0] text-[#6B3FA0] rounded-lg hover:bg-[#F3E8FF] transition-colors font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                Change Selection
              </button>
            </div>

            {hasSubjectData ? (
              // Show actual subjects data
              <>
                {/* Important Notice */}
                <div className="mb-8 bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] border-2 border-[#F0A500] rounded-xl p-6 shadow-md">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-[#F0A500] p-2 rounded-lg">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#92400E] mb-2">Important Notice</h3>
                      <ul className="space-y-1 text-sm text-[#78350F]">
                        <li>• <strong>Practical jury exams</strong> are conducted 1 week before the main examination.</li>
                        <li>• <strong>NPTEL course certificates</strong> must be submitted at least 15 days before exam registration.</li>
                        <li>• Contact your class coordinator for exact dates.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Exam Type Legend */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#4A2575] mb-4 flex items-center gap-2">
                    <Filter className="w-6 h-6" />
                    Exam Type Legend
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(examTypes).map(([key, type]) => {
                      const Icon = type.icon;
                      return (
                        <div 
                          key={key}
                          className={`${type.bgColor} ${type.borderColor} border-2 rounded-xl p-4 hover:shadow-lg transition-shadow`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`${type.color} p-2 rounded-lg`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <span className={`font-bold text-sm ${type.textColor}`}>
                              {type.label}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">{type.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="mb-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedFilter("all")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === "all"
                        ? "bg-[#6B3FA0] text-white shadow-md"
                        : "bg-white border-2 border-[#D8B4FE] text-gray-700 hover:bg-[#F3E8FF]"
                    }`}
                  >
                    All Subjects ({subjects.length})
                  </button>
                  <button
                    onClick={() => setSelectedFilter("written")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === "written"
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-white border-2 border-blue-200 text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    Written Exam ({subjects.filter(s => s.examType === "written").length})
                  </button>
                  <button
                    onClick={() => setSelectedFilter("written-practical")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === "written-practical"
                        ? "bg-[#6B3FA0] text-white shadow-md"
                        : "bg-white border-2 border-purple-200 text-gray-700 hover:bg-purple-50"
                    }`}
                  >
                    Written + Jury ({subjects.filter(s => s.examType === "written-practical").length})
                  </button>
                  <button
                    onClick={() => setSelectedFilter("practical")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === "practical"
                        ? "bg-green-500 text-white shadow-md"
                        : "bg-white border-2 border-green-200 text-gray-700 hover:bg-green-50"
                    }`}
                  >
                    Jury Only ({subjects.filter(s => s.examType === "practical").length})
                  </button>
                  <button
                    onClick={() => setSelectedFilter("nptel")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === "nptel"
                        ? "bg-[#F0A500] text-white shadow-md"
                        : "bg-white border-2 border-orange-200 text-gray-700 hover:bg-orange-50"
                    }`}
                  >
                    NPTEL / External ({subjects.filter(s => s.examType === "nptel").length})
                  </button>
                </div>

                {/* Subject Cards */}
                <div className="space-y-4">
                  {filteredSubjects.map((subject) => {
                    const examType = examTypes[subject.examType];
                    const Icon = examType.icon;
                    const internalPercentage = (subject.internalMarks / (subject.internalMarks + subject.externalMarks)) * 100;
                    const externalPercentage = (subject.externalMarks / (subject.internalMarks + subject.externalMarks)) * 100;

                    return (
                      <div 
                        key={subject.code}
                        className="bg-white border-2 border-[#D8B4FE] rounded-xl overflow-hidden hover:shadow-xl transition-all hover:border-[#6B3FA0]"
                      >
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            {/* Subject Info */}
                            <div className="flex-grow">
                              <div className="flex items-start gap-4 mb-3">
                                <div className={`${examType.color} p-3 rounded-lg flex-shrink-0`}>
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-grow">
                                  <h3 className="font-bold text-xl text-[#4A2575] mb-1">
                                    {subject.name}
                                  </h3>
                                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                                      {subject.code}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Award className="w-4 h-4 text-[#F0A500]" />
                                      {subject.credits} Credits
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Exam Type Badge */}
                              <div className={`inline-flex items-center gap-2 ${examType.bgColor} ${examType.borderColor} border-2 px-3 py-1.5 rounded-lg mb-4`}>
                                <Icon className={`w-4 h-4 ${examType.textColor}`} />
                                <span className={`font-medium text-sm ${examType.textColor}`}>
                                  {examType.label}
                                </span>
                              </div>

                              {/* Marks Breakdown */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                {/* Internal Marks */}
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-600">Internal Marks</span>
                                    <span className="font-bold text-lg text-[#6B3FA0]">
                                      {subject.internalMarks}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-600">{subject.internalBreakdown}</p>
                                </div>

                                {/* External Marks */}
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-600">External Marks</span>
                                    <span className="font-bold text-lg text-[#C47A4A]">
                                      {subject.externalMarks}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-600">Final examination</p>
                                </div>
                              </div>

                              {/* Visual Marks Bar */}
                              <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                                  <span>Marks Distribution:</span>
                                </div>
                                <div className="flex h-8 rounded-lg overflow-hidden border-2 border-gray-200">
                                  <div 
                                    className="bg-[#6B3FA0] flex items-center justify-center text-white text-xs font-bold"
                                    style={{ width: `${internalPercentage}%` }}
                                  >
                                    {subject.internalMarks} Internal
                                  </div>
                                  <div 
                                    className="bg-[#F0A500] flex items-center justify-center text-white text-xs font-bold"
                                    style={{ width: `${externalPercentage}%` }}
                                  >
                                    {subject.externalMarks} External
                                  </div>
                                </div>
                              </div>

                              {/* Special Requirements */}
                              {subject.special !== "No special requirement" && (
                                <div className="bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] border border-[#F0A500]/30 rounded-lg p-3">
                                  <div className="flex items-start gap-2">
                                    <AlertCircle className="w-4 h-4 text-[#92400E] flex-shrink-0 mt-0.5" />
                                    <div>
                                      <p className="text-xs font-medium text-[#78350F] mb-1">Special Requirement:</p>
                                      <p className="text-sm text-[#92400E]">{subject.special}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Summary Card */}
                <div className="mt-12 bg-gradient-to-br from-[#F3E8FF] via-white to-[#FAF5FF] border-2 border-[#6B3FA0] rounded-xl p-8 shadow-lg">
                  <h3 className="font-bold text-2xl mb-6 text-[#4A2575] flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Semester Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#6B3FA0] mb-1">{subjects.length}</div>
                      <div className="text-sm text-gray-600">Total Subjects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#6B3FA0] mb-1">{totalCredits}</div>
                      <div className="text-sm text-gray-600">Total Credits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-1">
                        {subjects.filter(s => s.examType === "written").length}
                      </div>
                      <div className="text-sm text-gray-600">Written Exams</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-1">
                        {subjects.filter(s => s.examType === "practical" || s.examType === "written-practical").length}
                      </div>
                      <div className="text-sm text-gray-600">Practical Juries</div>
                    </div>
                  </div>
                </div>

                {/* Tips Section */}
                <div className="mt-8 bg-white border-2 border-[#D8B4FE] rounded-xl p-6">
                  <h3 className="font-bold text-xl mb-4 text-[#4A2575]">📚 Study Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
                      <span>Start preparing for practical juries at least 2 weeks in advance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
                      <span>Complete NPTEL courses early to avoid last-minute certificate issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
                      <span>Focus on internal marks - they contribute significantly to your final grade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-0.5" />
                      <span>Maintain good attendance as it directly impacts your internal marks</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              // Show coming soon message
              <div className="text-center py-16">
                <div className="bg-gradient-to-br from-[#F3E8FF] to-white border-2 border-[#D8B4FE] rounded-xl p-12 max-w-2xl mx-auto">
                  <div className="bg-[#6B3FA0] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4A2575] mb-4">
                    Subject Data Coming Soon
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Subject data for <strong>{selectedDegreeInfo?.shortName} — Semester {selectedSemester}</strong> will be available soon.
                  </p>
                  <div className="bg-[#FEF3C7] border border-[#F0A500]/30 rounded-lg p-4 text-sm text-gray-700">
                    <p>Check back later or contact your department coordinator for more information.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
