# Ecom Next.js  

This is my first project using Next.js! It's an e-commerce website built with Next.js and React.  

## 🚀 Features  
- Server-side rendering (SSR) with Next.js  
- Optimized performance and SEO-friendly  
- Modern UI with React components  
- Responsive design  

## 📌 Getting Started  

Follow these steps to run the project locally:  

```bash
# Clone the repository
git clone https://github.com/mouadbimk/Ecom-nextjs
cd Ecom-nextjs

# Install dependencies
npm install

# Run the development server
npm run dev

```
## Home Page Dark
![home page](./images/homepagedark.png)
## Home Page Light
![home page](./images/homepagelight.png)
## Products Page
![Products Page](./images/products.png)
##📂 Project Structure
<ecom_next>
└── ecom_next
    ├── .env.local
    ├── eslint.config.mjs
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    ├── src
    │   ├── context
    │   │   └── ThemeContext.js
    │   ├── components
    │   │   ├── Navbar
    │   │   │   ├── data.js
    │   │   │   ├── NavBar.module.css
    │   │   │   └── NavBar.jsx
    │   │   ├── Footer
    │   │   │   ├── data.js
    │   │   │   ├── Footer.jsx
    │   │   │   └── Footer.module.css
    │   │   └── DarkModeToggle
    │   │       ├── DarkModeToggle.jsx
    │   │       └── DarkModeToggle.module.css
    │   └── app
    │       ├── favicon.ico
    │       ├── globals.css
    │       ├── layout.jsx
    │       ├── page.jsx
    │       ├── page.module.css
    │       ├── elements
    │       │   ├── Logo
    │       │   │   ├── Logo.jsx
    │       │   │   └── Logo.module.css
    │       │   └── Button
    │       │       ├── Button.jsx
    │       │       └── Button.module.css
    │       ├── (static)
    │       │   ├── contact
    │       │   │   └── page.jsx
    │       │   └── about
    │       │       └── page.js
    │       └── (dynamic)
    │           ├── products
    │           │   ├── page.js
    │           │   ├── products.module.css
    │           │   └── [id]
    │           │       ├── page.jsx
    │           │       └── Product.module.css
    │           └── blog
    │               ├── Blogs.module.css
    │               ├── page.jsx
    │               └── [id]
    │                   ├── blog.module.css
    │                   └── page.jsx
    └── public
        ├── file.svg
        ├── globe.svg
        ├── hero.png
        ├── hero.svg
        ├── next.svg
        ├── vercel.svg
        ├── window.svg
        └── images
            ├── facebook.png
            ├── instagram.png
            ├── tiktok.png
            ├── twitter.png
            ├── whatsapp.png
            └── youtube.png
</ecom_next>

