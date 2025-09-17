"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignInPage() {
  const router = useRouter();

  // Dummy credentials (for check only)
  const DUMMY_EMAIL = "admin@site.com";
  const DUMMY_PASSWORD = "Password123";

  const [email, setEmail] = useState<string>(""); // 👈 empty by default
  const [password, setPassword] = useState<string>(""); // 👈 empty by default
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email.trim() === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
        router.push("/admin"); // ✅ redirect to admin panel
      } else {
        setError("Invalid email or password.");
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-extrabold text-white text-center mb-1">
          Sign In
        </h1>
        <p className="text-sm text-gray-300 text-center mb-6">
          Enter your email and password to access the admin panel.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-300">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-gray-700 bg-black/40 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Enter your email"
            />
          </label>

          <label className="block relative">
            <span className="text-sm text-gray-300">Password</span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-gray-700 bg-black/40 text-white px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-8 text-xs text-gray-400 hover:text-gray-200"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </label>

          <div className="flex items-center justify-between">
            <Link href={"/admin"}>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-lime-500 text-black px-4 py-2 rounded-lg font-semibold hover:scale-[1.01] transition-transform disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </Link>
          </div>

          {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
        </form>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Use <span className="text-lime-400">abc.com</span> /
          <span className="text-lime-400">1233</span> for demo.
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
