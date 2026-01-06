"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addProduct } from "@/actions/productActions";
import ImageUpload from "@/components/ImageUpload";

export default function AddProductPage() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const data = {
      name: formData.get("name"),
      sku: formData.get("sku"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      category: formData.get("category"),
      imageUrl: imageUrl,
    };

    const result = await addProduct(data);
    if (result.success) {
      router.push("/dashboard/products");
    } else {
      alert("Error: " + result.error);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input name="name" required className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">SKU</label>
            <input name="sku" required className="w-full p-2 border rounded-md outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input name="category" required className="w-full p-2 border rounded-md outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input name="price" type="number" step="0.01" required className="w-full p-2 border rounded-md outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Stock Quantity</label>
            <input name="quantity" type="number" required className="w-full p-2 border rounded-md outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Product Image</label>
          {imageUrl ? (
            <img src={imageUrl} alt="Preview" className="h-32 w-32 object-cover rounded-lg mb-2" />
          ) : (
            <ImageUpload onUpload={(url) => setImageUrl(url)} />
          )}
        </div>

        <button 
          disabled={loading || !imageUrl}
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 disabled:bg-slate-400 transition-all"
        >
          {loading ? "Saving..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}