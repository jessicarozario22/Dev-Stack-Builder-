# 🧱 Dev Stack Builder

A modern and responsive **Dev Stack Builder** website built with React.
Users can explore different web development technologies, learn about them, and create their own personalized technology stack by adding and removing technologies.

## 🚀 Live Website

🔗 Add your deployed website link here

## 📂 GitHub Repository

🔗 Add your GitHub repository link here

---

## ✨ Features

* 🔎 **Explore Technologies** — Browse frontend, backend, database, styling, DevOps, and other development technologies.
* 🧰 **Build Your Stack** — Add your favorite technologies to a personalized stack and remove them whenever needed.
* 🔔 **Interactive Notifications** — React Toastify provides feedback when technologies are added, removed, duplicated, or cleared.
* 📱 **Fully Responsive** — Designed to work smoothly across desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* Tailwind CSS
* React Toastify
* JSON
* Vite

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechnologyCard.jsx
│   ├── TechnologyGrid.jsx
│   ├── YourStack.jsx
│   └── Footer.jsx
│
├── data/
│   └── technologies.json
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Main Functionalities

### Technology Data

Technology information is stored separately in a JSON file instead of being hardcoded inside the React components.

Each technology contains:

* ID
* Name
* Category
* Description
* Icon
* Rating
* Difficulty
* Badge

### Add to Stack

Users can add a technology to their personal stack by clicking **Add to Stack**.

Once a technology is added:

* It appears in the **Your Stack** section.
* Its button becomes disabled.
* The button changes to **Added to Stack**.
* A success notification is displayed.

The same technology cannot be added twice. A warning notification appears if the user tries to add it again.

### Remove Technology

Users can remove individual technologies from their stack using the remove button.

### Remove All

The **Remove All** button clears all selected technologies from the stack at once.

### Loading State

A loading state is displayed while the technology data is being loaded from the JSON file.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**. It allows us to write HTML-like code inside JavaScript.

It makes React components easier to write and understand because we can describe the UI directly inside our JavaScript code.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only.

**State** is data managed inside a component. When state changes, React updates the UI.

For example, technology information can be passed to a card through props, while the selected technologies can be managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to create and manage state.

In this project, it is used to store:

* Technology data
* Selected technologies
* Loading state

For example:

```js
const [selectedTechnologies, setSelectedTechnologies] = useState([]);
```

This keeps track of the technologies added to the user's stack.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

In this project, it is used to load the technology data from the JSON file when the application starts.

After the data is loaded, the technology list is stored in state and displayed on the page.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which items were added, removed, or changed and update the UI efficiently.

For example:

```jsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

Here, each technology's unique `id` is used as the key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

In this project, the **Your Stack** section shows an empty message when no technology has been selected.

For example:

```jsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackItems />
)}
```

When technologies are selected, the stack items are displayed instead.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child component using **props**.

For example:

```jsx
<TechnologyCard technology={technology} />
```

The child receives the technology through props.

A child can communicate back to the parent by calling a function passed through props.

For example:

```jsx
<TechnologyCard
  technology={technology}
  onAdd={handleAddToStack}
/>
```

The child can call `onAdd()` when the user clicks the **Add to Stack** button.

---

## 🎨 Design

The project uses a shared gradient theme for the main brand elements, hero heading, and primary buttons.

**Brand Gradient:**

```css
linear-gradient(90deg, #ff7a18, #ff3d81, #8b5cf6);
```

The layout is designed with a clean and modern developer-focused interface.

---

## 📱 Responsive Design

The website is responsive across:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

The technology cards automatically adjust their layout based on screen size, while the navigation changes to a mobile-friendly menu on smaller devices.

---

## 🧑‍💻 Author

**Jessica Mary Rozario**

UI/UX Designer & Web Developer

---

## 📄 License

This project was created for educational purposes as part of a React development assignment.
