import { useState } from "react";
import { auth } from "../data/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{backgroundImage: `url('/mitadt.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}><div className="absolute inset-0 bg-[#4A2575] opacity-50"></div>
      <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 p-8 w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-2xl font-bold text-[#4A2575] mb-1">
            Uni<span className="text-[#F0A500]">Explore</span>
          </div>
          <p className="text-sm text-gray-500">MIT ADT University</p>
          <h2 className="text-xl font-bold text-[#4A2575] mt-4">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {isRegister
              ? "Register to explore MIT ADT programs"
              : "Sign in to continue to UniExplore"}
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Email input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-purple-200 rounded-lg text-sm focus:outline-none focus:border-[#6B3FA0]"
          />
        </div>

        {/* Password input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-purple-200 rounded-lg text-sm focus:outline-none focus:border-[#6B3FA0]"
          />
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#6B3FA0] hover:bg-[#4A2575] text-white font-medium py-3 rounded-lg transition-colors"
        >
          {loading ? "Please wait..." : isRegister ? "Create Account" : "Sign In"}
        </button>

        {/* Toggle register/login */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-[#6B3FA0] font-medium ml-1 hover:underline"
          >
            {isRegister ? "Sign In" : "Register here"}
          </button>
        </p>

        <p className="text-center text-xs text-gray-400 mt-4">
          This platform is for MIT ADT University students
        </p>
      </div>
    </div>
  );
}