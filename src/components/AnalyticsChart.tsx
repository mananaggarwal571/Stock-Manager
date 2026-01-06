"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function AnalyticsChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm h-[400px]">
      <h3 className="text-lg font-semibold mb-6">Inventory Stock Levels</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{fill: '#f1f5f9'}} />
          <Bar dataKey="quantity" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
             
              <Cell key={`cell-${index}`} fill={entry.quantity < 10 ? '#ef4444' : '#6366f1'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}