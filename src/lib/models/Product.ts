import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

// Add the 3rd argument "Products" to match your Compass folder name exactly
const Product = models.Product || model("Product", ProductSchema, "Products");
export default Product;