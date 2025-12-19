# Portfolio Website

This is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. It features a clean design, smooth animations, and a functional contact form.

## 🚀 Live Demo

[Check out the live demo here](https://manojverse.vercel.app/)

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS, Shadcn UI
- **Animations:** Framer Motion, React Type Animation
- **Icons:** Lucide React
- **Email Service:** EmailJS

## ⚙️ Features

- ⚡️ Blazing fast performance with Vite
- 📱 Fully responsive design
- 🎨 Modern UI with Glassmorphism effects
- 📝 Functional contact form
- 🌓 Dark mode support (default)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manoj-kumar111/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📦 Build

To create a production build:

```bash
npm run build
```

## � Deployment to Vercel

1. **Push your code to GitHub**
   Make sure your latest changes are committed and pushed to your GitHub repository.

2. **Log in to Vercel**
   Go to [Vercel](https://vercel.com/) and sign up/log in with your GitHub account.

3. **Import Project**
   - Click **"Add New..."** > **"Project"**.
   - Select your portfolio repository from the list and click **"Import"**.

4. **Configure Environment Variables** (Critical for Contact Form)
   - In the **"Environment Variables"** section, expand the dropdown.
   - Add the same variables from your local `.env` file:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Paste the corresponding values for each.

5. **Deploy**
   - Click **"Deploy"**.
   - Vercel will build your project. Once finished, you will get a live URL!

## �📄 License

This project is licensed under the MIT License.
