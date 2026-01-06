import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import EditProductForm from "@/components/EditProductForm";
import { notFound } from "next/navigation";


export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const id = resolvedParams.id;

  await connectDB();
  
  
  const product = await Product.findById(id).lean();

  if (!product) {
    return notFound();
  }

  
  const plainProduct = JSON.parse(JSON.stringify(product));

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Edit Product: {plainProduct.name}</h1>
      <EditProductForm product={plainProduct} />
    </div>
  );
}