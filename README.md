# Products React App 🛍️

A modern and responsive **Products Application** built using **React + Vite**.
This project fetches products from an external API and displays them in a clean UI with product search and product detail navigation functionality.

The application demonstrates core React concepts such as routing, API fetching, navigation, state management, conditional rendering, and reusable components.

---

# 📌 Project Overview

This project was created to practice:

* React Router
* API Integration
* Dynamic Routing
* Navigation using `useNavigate`
* State Management using `useState`
* Side Effects using `useEffect`
* Search Functionality
* Conditional Rendering
* Component Reusability
* Tailwind CSS Styling

The app displays products fetched from the Fake Store API and allows users to navigate to individual product pages.

---

# 🌐 Live Demo

🔗 **Deployed Link:**
`https://products-react-app-alpha.vercel.app/`

---

# 📂 Project Structure

```bash id="d4w9g2"
products-react-app/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── photos/
│   │
│   ├── components/
│   │   ├── ContactUs.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── ProductList.jsx
│   │   ├── RootLayout.jsx
│   │   └── Search.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

---

# ⚙️ Tech Stack

* React.js
* Vite
* React Router
* JavaScript (ES6+)
* Tailwind CSS
* Fake Store API
* JSX

---

# 📦 Packages Installed

## 1️⃣ Create React Project using Vite

```bash id="l2icq5"
npm create vite@latest
```

---

## 2️⃣ Install Dependencies

```bash id="jlwmnh"
npm install
```

---

## 3️⃣ Install React Router

```bash id="57t81s"
npm install react-router
```

---

## 4️⃣ Install Tailwind CSS

```bash id="b0gr1h"
npm install tailwindcss @tailwindcss/vite
```

---

# 🌍 API Used

This project uses the **Fake Store API** to fetch products dynamically.

Example API:

```bash id="jlwmnh"
https://fakestoreapi.com/products
```

---

# ▶️ How to Run the Project

## Step 1: Clone the Repository

```bash id="kcx9lk"
git clone https://github.com/ritesh-mogilamoni/products-react-app
```

---

## Step 2: Move into Project Folder

```bash id="wppjlwm"
cd products-react-app
```

---

## Step 3: Install Dependencies

```bash id="jq3a5v"
npm install
```

---

## Step 4: Start Development Server

```bash id="wx94e5"
npm run dev
```

---

# ✨ Features

✅ Fetch Products from API
✅ Search Products by Category
✅ Dynamic Product Listing
✅ Product Details Page
✅ React Router Navigation
✅ Responsive Grid Layout
✅ Loading State Handling
✅ Error Handling
✅ Reusable Components
✅ Responsive UI Design

---

# 🧠 Concepts Learned

---

# 🔹 React Concepts

## Functional Components

Created reusable components such as:

* `Header`
* `Footer`
* `Home`
* `Product`
* `ProductsList`
* `RootLayout`

---

## useState Hook

Used `useState` for:

* Products data
* Loading state
* Error handling
* Search input

Example:

```js id="lg5ix8"
const [products, setProducts] = useState([]);
```

---

## useEffect Hook

Used `useEffect` to fetch API data when the component loads.

Example:

```js id="u6bdfu"
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
}, []);
```

---

## React Router

Implemented routing using:

* `NavLink`
* `Outlet`
* `useNavigate`
* `useLocation`

### Learned:

* Nested routing
* Route navigation
* Passing state between routes
* Layout-based routing

---

## Navigation using useNavigate

Navigated dynamically to product detail pages.

Example:

```js id="jlwmnh"
navigate("/product", { state: { product: productObj } });
```

---

## useLocation

Accessed passed product data in the Product page.

Example:

```js id="2yxkqs"
const { state } = useLocation()
```

---

## API Fetching

Fetched data using `fetch()` API.

Example:

```js id="ay9cje"
fetch("https://fakestoreapi.com/products")
```

---

## Conditional Rendering

Handled:

* Loading states
* Error messages

Example:

```js id="k3i4mo"
if (loading) {
  return <p>Loading...</p>
}
```

---

## Filtering Data

Implemented product search using `.filter()`.

Example:

```js id="4g6bg8"
const filteredProducts = products.filter((product) =>
  product.category.includes(search)
)
```

---

## Dynamic Rendering using map()

Displayed products dynamically.

Example:

```js id="js2q3r"
filteredProducts.map((product) => (
  <div key={product.id}></div>
))
```

---

# 📖 Component Explanation

---

# 1️⃣ Header.jsx

## Purpose

Provides navigation links for the application.

### Learned

* Navigation using `NavLink`
* Active link styling
* Responsive navbar structure

---

# 2️⃣ Footer.jsx

## Purpose

Displays footer content.

### Learned

* Basic reusable layout component creation

---

# 3️⃣ Home.jsx

## Purpose

Displays landing page content.

### Learned

* Simple UI rendering
* Flexbox centering

---

# 4️⃣ ProductsList.jsx

## Purpose

Fetches and displays all products.

### Learned

* API fetching
* State management
* Search filtering
* Dynamic rendering
* Loading & error handling

---

# 5️⃣ Product.jsx

## Purpose

Displays detailed information of a selected product.

### Learned

* Passing route state
* Dynamic detail rendering
* `useLocation` hook

---

# 6️⃣ RootLayout.jsx

## Purpose

Provides shared layout structure across pages.

### Learned

* Nested routing
* Layout composition
* Outlet rendering

---

# 7️⃣ ContactUs.jsx

## Purpose

Displays contact page content.

### Learned

* Basic page component creation

---

# 8️⃣ Search.jsx

## Purpose

Handles search input functionality.

### Learned

* Input handling
* State updates using `useState`

---

# 🎨 UI Styling

Tailwind CSS was used for styling the application.

### Styling concepts practiced:

* Flexbox
* Grid layouts
* Responsive design
* Shadows
* Hover effects
* Spacing utilities
* Typography styling

Example:

```js id="i4v3qo"
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
```

---

# 🚀 Future Improvements

Some features that can be added later:

* Add to Cart
* Product Categories Filter
* Product Rating System
* Pagination
* Authentication
* Dark Mode
* Wishlist Feature
* Backend Integration
* Protected Routes
* Search Suggestions

---

# 🚀 Deployment

This project can be deployed using:

* Vercel
* Netlify
* GitHub Pages

---

# 📚 What I Learned From This Project

Through this project, I learned:

* How routing works in React
* How to fetch and display API data
* Passing data between routes
* Managing loading and error states
* Building reusable components
* Structuring React applications properly
* Creating responsive layouts using Tailwind CSS
* Working with external APIs in real-world applications

This project helped me improve my understanding of React Router, API integration, and dynamic frontend development.

---

# 🙌 Author

**Ritesh Mogilamoni**

GitHub: `https://github.com/ritesh-mogilamoni`

---

# ⭐ Conclusion

The Products React App is a beginner-friendly React application that demonstrates API integration, routing, reusable components, dynamic rendering, and responsive UI development using React, Vite, React Router, and Tailwind CSS.
