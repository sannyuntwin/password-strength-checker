"use client";

import { useState } from "react";
import { Shield, Lock, AlertTriangle, CheckCircle2, Zap } from "lucide-react";

function StrengthBar({ strength }: { strength: string }) {
  const getStrengthConfig = () => {
    switch (strength?.toLowerCase()) {
      case "very weak":
        return { width: "20%", color: "bg-red-500", glow: "shadow-red-500/50" };
      case "weak":
        return { width: "40%", color: "bg-orange-500", glow: "shadow-orange-500/50" };
      case "moderate":
        return { width: "60%", color: "bg-yellow-500", glow: "shadow-yellow-500/50" };
      case "strong":
        return { width: "80%", color: "bg-lime-500", glow: "shadow-lime-500/50" };
      case "very strong":
        return { width: "100%", color: "bg-emerald-500", glow: "shadow-emerald-500/50" };
      default:
        return { width: "0%", color: "bg-gray-600", glow: "" };
    }
  };

  const config = getStrengthConfig();

  return (
    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mt-3 border border-gray-700">
      <div
        className={`h-full ${config.color} transition-all duration-500 shadow-lg ${config.glow}`}
        style={{ width: config.width }}
      />
    </div>
  );
}

export default function Home() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Correct API URL with endpoint
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/check_password`;

  async function checkPassword() {
    if (!password) return;
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        throw new Error("API Error: " + res.status);
      }

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Error checking password:", error);
    }

    setLoading(false);
  }

  const getStrengthIcon = () => {
    if (!result) return null;
    const strength = result.strength?.toLowerCase();

    if (strength === "very strong" || strength === "strong") {
      return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
    } else if (strength === "moderate") {
      return <Shield className="w-6 h-6 text-yellow-400" />;
    } else {
      return <AlertTriangle className="w-6 h-6 text-red-400" />;
    }
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Lights */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4 shadow-lg shadow-emerald-500/20">
            <Lock className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 mb-2 tracking-tight">
            SECURITY ANALYZER
          </h1>
          <p className="text-gray-400 text-sm tracking-wider uppercase">Password Strength Assessment</p>
        </div>

        {/* Card */}
        <div className="bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/5 p-8">
          {/* Input */}
          <div className="space-y-4">
            <label className="block text-emerald-400 text-sm font-medium uppercase tracking-wider">
              Enter Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                className="w-full p-4 bg-black/50 border border-emerald-500/30 rounded-lg text-gray-100 placeholder-gray-600 outline-none focus:border-emerald-400 focus:shadow-lg focus:shadow-emerald-500/20 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && checkPassword()}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-400 transition-colors"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <button
              onClick={checkPassword}
              disabled={loading || !password}
              className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 disabled:from-gray-700 disabled:to-gray-800 disabled:cursor-not-allowed p-4 rounded-lg font-semibold text-white uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <>
                  <Zap className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Analyze Security
                </>
              )}
            </button>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

              {/* Strength */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStrengthIcon()}
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Strength Level</p>
                    <p className="text-2xl font-bold text-emerald-400">{result.strength}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Entropy</p>
                  <p className="text-2xl font-bold text-cyan-400">
                    {result.entropy_bits} <span className="text-sm text-gray-500">bits</span>
                  </p>
                </div>
              </div>

              <StrengthBar strength={result.strength} />

              {/* Feedback */}
              {result.feedback && result.feedback.length > 0 && (
                <div className="bg-black/30 border border-yellow-500/20 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-yellow-400 font-semibold uppercase tracking-wider text-sm">
                      Security Recommendations
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {result.feedback.map((s: string, i: number) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">▸</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-6 uppercase tracking-wider">
          Encrypted • Secure • Private
        </p>
      </div>
    </main>
  );
}
