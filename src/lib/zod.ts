import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  sku: z.string().min(3, "SKU is required"),
  quantity: z.coerce.number().min(0, "Quantity cannot be negative"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  imageUrl: z.string().url("Please upload an image"),
  category: z.string().min(1, "Category is required"),
});

export type ProductInput = z.infer<typeof productSchema>;