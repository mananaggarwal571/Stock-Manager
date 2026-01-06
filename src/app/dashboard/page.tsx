import { getProducts } from "@/actions/productActions";
import AnalyticsChart from "@/components/AnalyticsChart";

export default async function DashboardMain() {
  const products = await getProducts();
  
  const totalStock = products.reduce((acc: number, p: any) => acc + p.quantity, 0);
  const lowStockItems = products.filter((p: any) => p.quantity < 10).length;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Total Products</p>
          <h2 className="text-3xl font-bold">{products.length}</h2>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Total Stock</p>
          <h2 className="text-3xl font-bold">{totalStock}</h2>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm border-l-4 border-l-red-500">
          <p className="text-slate-500 text-sm font-medium">Low Stock Alerts</p>
          <h2 className="text-3xl font-bold text-red-600">{lowStockItems}</h2>
        </div>
      </div>

      <AnalyticsChart data={products} />
    </div>
  );
}