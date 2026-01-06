"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email, password, redirect: false,
    });
    if (res?.ok) router.push("/dashboard");
    else alert("Invalid Credentials");
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
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4">
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" onChange={e => setPassword(e.target.value)} />
        <button className="w-full bg-indigo-600 text-white py-2 rounded font-bold hover:bg-indigo-700">Login</button>
      </form>
    </div>
    </>
  );
}