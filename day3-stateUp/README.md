# React User Registration & User Cards

A React learning project built to practice **component-based architecture, state management, props, controlled forms, and parent-child communication**.

The project allows users to register through a form and dynamically displays the registered users as cards.

## 🚀 Features

* User registration form
* Controlled form inputs using `useState`
* Dynamic user list
* User cards generated using `.map()`
* Parent-to-child data passing using props
* Child-to-parent communication using state setter functions
* Form submission handling
* Form reset after registration
* Basic Login/Register UI
* Responsive UI using Tailwind CSS

> **Note:** Login authentication and the Delete functionality are currently UI/practice implementations and are not connected to a backend.

## 🛠️ Tech Stack

* React.js
* JavaScript
* Tailwind CSS
* Vite

## 📂 Project Structure

```text
src/
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── UserCard.jsx
│
├── App.jsx
└── main.jsx
```

## 🧠 Concepts Practiced

### 1. Component-Based Architecture

The application is divided into separate reusable components:

```text
App
 ├── Register
 ├── Login
 └── UserCard
```

This keeps the UI and logic separated into smaller components.

---

### 2. State Management with `useState`

The `App` component maintains the main user state:

```jsx
const [users, setUsers] = useState([]);
```

Whenever a new user registers, the user is added to the existing array:

```jsx
setUsers((prev) => [...prev, formData]);
```

This demonstrates how React state can be used to manage a dynamic collection of data.

---

### 3. Controlled Components

The registration form uses React state to control the input values:

```jsx
const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: ""
});
```

Each input receives its value from state:

```jsx
value={formData.name}
```

and updates the state using `onChange`.

---

### 4. Dynamic Object Keys

The form uses the input's `name` attribute to update the corresponding property dynamically:

```jsx
const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
        ...formData,
        [name]: value
    });
};
```

For example:

```text
name="email"
```

updates:

```js
formData.email
```

This is an important pattern when handling multiple form fields.

---

### 5. Passing Props

The `App` component passes data and functions to child components:

```jsx
<Register
    setUsers={setUsers}
    setIsLoggedIn={setIsLoggedIn}
/>
```

The `UserCard` receives individual user data:

```jsx
<UserCard user={elem} />
```

This demonstrates **parent-to-child communication through props**.

---

### 6. Child-to-Parent Communication

React follows one-way data flow.

The `Register` component cannot directly modify the `users` state because that state belongs to `App`.

Instead, `App` passes the `setUsers` function to `Register`:

```jsx
<Register setUsers={setUsers} />
```

The child component can then update the parent's state:

```jsx
setUsers((prev) => [...prev, formData]);
```

This is a fundamental React pattern.

---

### 7. Rendering Lists with `.map()`

Registered users are rendered dynamically:

```jsx
users.map((elem) => {
    return <UserCard user={elem} />;
})
```

Each user object is passed to a separate `UserCard`.

This allows the UI to automatically update when new users are added.

## 🔄 Application Flow

The basic data flow of the application is:

```text
User fills Register Form
        ↓
handleChange()
        ↓
formData state updates
        ↓
User submits form
        ↓
setUsers()
        ↓
users array updates
        ↓
App re-renders
        ↓
users.map()
        ↓
UserCard components are created
```

## 📋 Registration Form

The registration form collects:

* Name
* Email
* Password
* Profile Image URL

After submission:

1. The form submission is prevented from refreshing the page.
2. The user object is added to the `users` array.
3. The form is reset.
4. The application updates and displays the new user card.

## 👤 User Card

Each registered user is displayed using the `UserCard` component.

The card currently displays:

* Profile image
* User name
* Email
* Delete button UI

The Delete button is currently not connected to a delete handler.

## 🔐 Login/Register UI

The project also contains a separate `Login` component.

The Login component demonstrates:

* Email input
* Password input
* Submit button
* Switching between Login and Register UI using state

However, there is **no real authentication system** yet.

There is no:

* Backend authentication
* Password verification
* JWT
* Database
* Session management

This project is focused on learning React concepts rather than implementing production authentication.

## 📚 What I Learned

Through this project, I practiced:

1. Creating reusable React components.
2. Managing state using `useState`.
3. Creating controlled forms.
4. Handling form submission.
5. Updating objects inside React state.
6. Updating arrays without mutating the previous state.
7. Passing props between components.
8. Passing state setter functions to child components.
9. Understanding parent-to-child and child-to-parent communication.
10. Rendering dynamic data using `.map()`.
11. Structuring a React application into multiple components.
12. Styling React components using Tailwind CSS.

## 🔮 Future Improvements

The project can be extended with:

* Functional Delete User feature
* Edit User feature
* Actual Login authentication
* Form validation
* Password validation
* React Hook Form
* LocalStorage persistence
* Unique user IDs
* Search and filtering
* Backend API
* MongoDB database
* JWT authentication
* Protected routes

## 🚀 Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 👨‍💻 Author

**Yuvraj Dubey**

Frontend / Full Stack Developer — learning and building with React and the MERN Stack.

---

⭐ This is a learning project created to strengthen React fundamentals and component communication.
