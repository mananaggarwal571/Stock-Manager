# 📦 Stock Manager- Inventory Management & Analytics

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

**StockMaster Pro** is a robust full-stack Inventory Management Dashboard designed for real-time stock tracking, secure admin onboarding, and graphical data visualization.

🚀 **Live Demo:** https://stock-manager-tkeo.vercel.app/
    
  **Dummy Admin Credentials:**
  ```bash
  Username: admin@test.com
  Password:123
```    
---

## ✨ Core Features

- **📊 Dynamic Analytics**: Visualizes stock levels using interactive Bar Charts powered by **Recharts**.
- **🔐 Secure Authentication**: Route protection and admin sessions managed via **NextAuth.js**.
- **⚡ Server Actions**: High-performance database operations using Next.js 14 Server Actions.
- **🔄 Instant Synchronization**: Implements `revalidatePath` to ensure the dashboard graph updates immediately after product entry without manual refresh.
- **🖼 Image Handling**: Seamless product image uploads and previews.
- **⏳ Optimized UX**: Integrated loading states and spinners for all form submissions and onboarding processes.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router) |
| **Backend** | Server Actions & Node.js |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **Styling** | Tailwind CSS |
| **Charts** | Recharts |
| **Validation** | Zod |

---

## 🚀 Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/stock-manager.git](https://github.com/your-username/stock-manager.git)
cd stock-manager
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
Create a .env.local file in the root directory and add the following:
```bash
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_random_secret_string
NEXTAUTH_URL=http://localhost:3000
```
### 4. Start Development Server
```bash
npm run dev
```

## 🏗 Implementation Highlights

**Data Consistency**
To solve caching issues, we utilize:
```bash
revalidatePath("/dashboard");
```
This ensures that the Server-Side cache is purged whenever a new product is added, providing the user with real-time graphical updates.

## Video Tutorial of The Website 
https://github.com/user-attachments/assets/37349ce5-5e22-4abc-85df-ebb135173fe7


## 🤝 Contributing
Contributions are welcome! Feel free to open a Pull Request or report an issue.


Developed with ❤️ by Manan
