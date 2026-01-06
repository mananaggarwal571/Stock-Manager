"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react"; // Loader2 icon add kiya hai

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 1. Loading state banayi
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // 2. Login start hote hi loading true

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setIsLoading(false); // 3. Error aane par loading wapas false
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors font-medium"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>

      <div className="h-screen flex items-center justify-center bg-slate-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
        >
          <h1 className="text-2xl font-bold text-center">Admin Login</h1>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {/* 4. Button mein loading logic dala hai */}
          <button
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 py-2 rounded font-bold transition-all ${
              isLoading 
                ? "bg-indigo-400 cursor-not-allowed" 
                : "bg-indigo-600 hover:bg-indigo-700"
            } text-white`}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Verifying...</span>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </>
  );
}