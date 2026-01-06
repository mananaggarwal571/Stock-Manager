import mongoose, { Schema, model, models } from "mongoose";

// We define the structure for our Admin users
const UserSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  }, // Storing as plain text per your project requirement
}, { 
  timestamps: true // This automatically adds 'createdAt' and 'updatedAt'
});

// This line is crucial for Next.js: 
// It checks if the model already exists before creating a new one.
const User = models.User || model("User", UserSchema);

export default User;