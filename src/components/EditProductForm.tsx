"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateProduct } from "@/actions/productActions";

export default function EditProductForm({ product }: { product: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const data = {
      name: formData.get("name"),
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),
      category: formData.get("category"),
    };

    const result = await updateProduct(product._id, data);
    
    if (result.success) {
      router.push("/dashboard/products");
      router.refresh();
    } else {
      alert("Failed to update");
    }
    setLoading(false);
  }

  return (
    <form action={handleSubmit} className="bg-white p-6 rounded-xl border space-y-4">
      <div>
        <label className="block text-sm font-medium">Product Name</label>
        <input name="name" defaultValue={product.name} className="w-full p-2 border rounded" required />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Price ($)</label>
          <input name="price" type="number" defaultValue={product.price} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input name="quantity" type="number" defaultValue={product.quantity} className="w-full p-2 border rounded" required />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <input name="category" defaultValue={product.category} className="w-full p-2 border rounded" required />
      </div>

      <button 
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 rounded font-bold hover:bg-indigo-700 disabled:bg-slate-400"
      >
        {loading ? "Updating..." : "Update Product"}
      </button>
    </form>
  );
}