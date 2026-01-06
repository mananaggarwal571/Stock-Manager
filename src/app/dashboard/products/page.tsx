import { getProducts, deleteProduct } from "@/actions/productActions";
import Link from "next/link";
import { Trash2, Plus } from "lucide-react";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Inventory List</h1>
                <Link href="/dashboard/add-product" className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700">
                    <Plus size={18} /> Add Product
                </Link>
            </div>

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-sm">Product</th>
                            <th className="p-4 font-semibold text-sm">SKU</th>
                            <th className="p-4 font-semibold text-sm">Price</th>
                            <th className="p-4 font-semibold text-sm">Stock</th>
                            <th className="p-4 font-semibold text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {products.map((product: any) => (
                            <tr key={product._id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 flex items-center gap-3">
                                    <img src={product.imageUrl} alt="" className="w-10 h-10 rounded object-cover border" />
                                    <span className="font-medium">{product.name}</span>
                                </td>
                                <td className="p-4 text-slate-600">{product.sku}</td>
                                <td className="p-4 font-medium">${product.price}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${product.quantity < 10 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                        {product.quantity} in stock
                                    </span>
                                </td>

                               
                                <td className="p-4 text-right flex justify-end gap-2">
                                    
                                    <Link
                                        href={`/dashboard/products/edit/${product._id}`}
                                        className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-lg transition-colors"
                                        title="Edit Product"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                    </Link>

                                   
                                    <form action={async () => { "use server"; await deleteProduct(product._id); }}>
                                        <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors" title="Delete Product">
                                            <Trash2 size={18} />
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}