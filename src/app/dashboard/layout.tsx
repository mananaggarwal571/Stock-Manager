import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Use the new Client Sidebar here */}
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}