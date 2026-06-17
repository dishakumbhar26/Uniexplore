import { Outlet, Link } from "react-router";
import { Search, BookOpen, GitCompare, GraduationCap } from "lucide-react";

export function Root() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Department Banner */}
      <div className="bg-gradient-to-r from-[#6B3FA0] to-[#4A2575] text-white py-2">
        <div className="container mx-auto px-6 text-center text-sm font-medium">
          MIT School of Computing — Department of CSE
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-[#D8B4FE] sticky top-0 z-50 shadow-md relative overflow-hidden">
        {/* Gradient background with shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A2575] via-[#5A3585] to-[#6B3FA0]" />
        
        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-[#F0A500] to-[#C47A4A] p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">UniExplore</h1>
                <p className="text-xs text-purple-200">MIT ADT University</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link to="/" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>Explore</span>
              </Link>
              <Link to="/compare" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2">
                <GitCompare className="w-4 h-4" />
                <span>Compare</span>
              </Link>
              <Link to="/student-corner" className="text-purple-100 hover:text-white transition-colors flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Student Corner</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="border-t border-[#D8B4FE] mt-20 py-8 bg-[#FAF5FF]">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2026 MIT ADT University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}