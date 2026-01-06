"use server";

import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import { productSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";

export async function addProduct(data: any) {
  try {
    await connectDB();
    const validatedData = productSchema.parse(data);
    await Product.create(validatedData);

    
    revalidatePath("/dashboard/products"); 
    revalidatePath("/dashboard");        
    
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getProducts() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 });
  return JSON.parse(JSON.stringify(products)); 
}

export async function deleteProduct(id: string) {
  try {
    await connectDB();
    await Product.findByIdAndDelete(id);

    
    revalidatePath("/dashboard/products");
    revalidatePath("/dashboard"); 

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export async function updateProduct(id: string, data: any) {
  try {
    await connectDB();
    await Product.findByIdAndUpdate(id, data);
    
    revalidatePath("/dashboard/products");
    revalidatePath("/dashboard"); 
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}