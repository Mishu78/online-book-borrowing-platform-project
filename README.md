# 📚 Online Book Borrow Platform
<p align="center">
  <strong>A seamless and modern web application designed to digitize the traditional library experience.</strong><br />
  Built with the power of Next.js, Better Auth, and MongoDB.
</p>

<p align="center">
  <a href="#-live-url">🌐 Live Demo</a> •
  <a href="#-key-features">✨ Features</a> •
  <a href="#-tech-stack--npm-packages-used">🛠️ Tech Stack</a> •
  <a href="#-installation--running-locally">🚀 Getting Started</a>
</p>

---

## 🌐 Live URL

* 🔗 **Live Deployment:** https://online-book-borrowing-platform-proj.vercel.app/
* 💻 **Client Repository:** https://github.com/Mishu78/online-book-borrowing-platform-project

---

## 🎯 Purpose of the Project

The primary objective of **Borrow&Connect** is to bridge the gap between books and readers through a straightforward, interactive digital platform. 

By converting traditional library systems into a modern web hub, the application streamlines authentication, eliminates manual inventory tracking, and allows users to browse, search, and borrow reading materials effortlessly.

---

## ✨ Key Features

### 🏢 1. Optimized Layout & Core Navigation
* **Dynamic Header:** Intuitive navigation with conditional rendering. It shows the **Login** link for guests, and the **User Name**, **Profile Image**, and **Logout** button once authenticated.
* **Custom Footer:** Features dynamic contact links, operational hours, and social media icons for maximum accessibility.

### 🔐 2. Advanced Authentication
* **Email & Password:** Traditional registration and secure sign-in options.
* **Google OAuth:** One-click registration and sign-in directly linked via Google Accounts.
* **Secure Sessions:** Instant checking of authenticated states using Better Auth client hooks.

### 🏠 3. Interactive Home Experience
* **Find Your Next Read Banner:** High-conversion call-to-action button linking directly to the full catalog.
* **Promotional Marquee:** Animated scrolling bar showcasing *New Arrivals* and membership perks.
* **Featured Books Slider (Swiper.js):** Touch-friendly carousel highlighting the top books with smooth transitions.

### 📖 4. All Books Page & Category Sidebar
* **Dynamic Search Bar:** Live searching by book title to locate specific materials instantly.
* **Genre & Category Filter:** A functional left sidebar allowing users to filter books dynamically by **Story**, **Tech**, or **Science**.

### 🛡️ 5. Robust Route Protection
* **Book Details Page:** View complete descriptions, author details, and live available quantities. This is a **Private Route** that redirects unauthenticated guests back to the login page.
* **Dynamic Borrow Action:** Restricts borrowing if a book's quantity reaches zero, and updates users via interactive alerts.

### 👤 6. User Account Management
* **My Profile Page:** Secure private route that displays the authenticated user's profile picture, name, and email.
* **Update Information:** Form allows users to modify their name and profile photo URL instantly, syncing changes across the entire app.

---

## 🛠️ Tech Stack & NPM Packages Used

### 🏗️ Core Frameworks & Database
* **Next.js 15 (App Router):** Server-side data fetching, optimized performance, and dynamic routing.
* **MongoDB:** Database engine storing books, users, accounts, and session collections.
* **Better Auth:** Identity management with local credentials and Google OAuth.

### 🎨 UI & Styling
* **Tailwind CSS:** Utility-first styling for completely customized layouts.
* **HeroUI / DaisyUI:** Components used for interactive forms, buttons, and cards.
* **React Icons:** Scalable icons used across the navbar, forms, and footer.

### 📦 Essential NPM Packages
* `swiper` — For the smooth, responsive, touch-friendly book slider on the home page.
* `react-hook-form` — Handles form state and input validation across login, registration, and profile updates.

---

## ⚙️ Environment Variables Setup

To run this project, create a `.env.local` file at the root of your Next.js directory and define the following variables:

```env
# 🗄️ Database Connection
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.your_id.mongodb.net/borrow_connect?retryWrites=true&w=majority"

# 🔑 Better Auth Configuration
BETTER_AUTH_SECRET="your_random_secure_auth_secret"
BETTER_AUTH_URL="http://localhost:3000" # Update to production URL upon deployment

# 🌐 Google Social Provider OAuth Credentials
GOOGLE_CLIENT_ID="your_google_client_id_here"
GOOGLE_CLIENT_SECRET="your_google_client_secret_here"
