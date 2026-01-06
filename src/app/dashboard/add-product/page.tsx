"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addProduct } from "@/actions/productActions";
import ImageUpload from "@/components/ImageUpload";
import { Loader2 } from "lucide-react"; // Spinner import kiya

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
      setLoading(false); // Error aane par loading off
      alert("Error: " + result.error);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      
      <form action={handleSubmit} className="space-y-4">
        {/* ... baaki inputs same rahenge ... */}
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
            <div className="relative w-32 h-32">
              <img src={imageUrl} alt="Preview" className="h-32 w-32 object-cover rounded-lg mb-2" />
              <button 
                type="button" 
                onClick={() => setImageUrl("")} 
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs"
              >✕</button>
            </div>
          ) : (
            <ImageUpload onUpload={(url) => setImageUrl(url)} />
          )}
        </div>

        <button 
          disabled={loading || !imageUrl}
          className={`w-full flex items-center justify-center gap-2 py-2 rounded-md font-semibold transition-all ${
            loading || !imageUrl 
              ? "bg-slate-400 cursor-not-allowed" 
              : "bg-indigo-600 hover:bg-indigo-700"
          } text-white`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Creating Product...</span>
            </>
          ) : (
            "Create Product"
          )}
        </button>
      </form>
    </div>
  );
}