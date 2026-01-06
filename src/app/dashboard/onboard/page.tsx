"use client";
import { useState } from "react";
import { onboardAdmin } from "@/actions/adminActions";
import { UserPlus, CheckCircle } from "lucide-react";

export default function OnboardPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"), // Plain text for your project
    };

    const result = await onboardAdmin(data);
    if (result.success) {
      setSuccess(true);
      (document.getElementById("onboard-form") as HTMLFormElement).reset();
    } else {
      alert("Error creating admin");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-6 text-indigo-600">
          <UserPlus size={24} />
          <h2 className="text-2xl font-bold text-slate-800">Onboard New Admin</h2>
        </div>

        {success && (
          <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2">
            <CheckCircle size={18} /> Admin created successfully!
          </div>
        )}

        <form id="onboard-form" action={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input name="name" type="text" required className="w-full p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input name="email" type="email" required className="w-full p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input name="password" type="text" required className="w-full p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <button 
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-slate-400 transition-all"
          >
            {loading ? "Registering..." : "Create Admin Account"}
          </button>
        </form>
      </div>
    </div>
  );
}