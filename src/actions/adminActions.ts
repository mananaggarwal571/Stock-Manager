"use server";
import { connectDB } from "@/lib/db";
import User from "@/lib/models/User";
import { revalidatePath } from "next/cache";

export async function onboardAdmin(data: any) {
  try {
    await connectDB();

   
    console.log("Onboarding data received:", data);

    
    const newAdmin = await User.create({
      name: data.name,
      email: data.email,
      password: data.password, 
    });

    console.log("Admin created in MongoDB:", newAdmin._id);
    
    revalidatePath("/dashboard/onboard");
    return { success: true };
  } catch (error: any) {
    
    console.error("Detailed MongoDB Error:", error.message);
    return { success: false, error: error.message };
  }
}