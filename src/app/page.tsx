import Link from "next/link";
import { Box, BarChart3, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-600">Stock Manager</h1>
        <Link href="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700">
          Admin Login
        </Link>
      </nav>

      
      <main className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
          Manage your Stock <span className="text-indigo-600">Smarter.</span>
        </h2>
        <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-10">
          A powerful portal to track inventory, analyze stock levels and manage team members with ease.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <Box className="text-indigo-600 mx-auto mb-4" size={40} />
            <h3 className="font-bold text-lg">Inventory Tracking</h3>
            <p className="text-slate-500 text-sm">Real-time product management with Cloudinary storage.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <BarChart3 className="text-indigo-600 mx-auto mb-4" size={40} />
            <h3 className="font-bold text-lg">Visual Analytics</h3>
            <p className="text-slate-500 text-sm">See your stock trends clearly with Recharts integration.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <ShieldCheck className="text-indigo-600 mx-auto mb-4" size={40} />
            <h3 className="font-bold text-lg">Admin Control</h3>
            <p className="text-slate-500 text-sm">Secure onboarding for your management team.</p>
          </div>
        </div>
      </main>
    </div>
  );
}