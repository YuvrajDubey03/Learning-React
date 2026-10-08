# 👤 User Management CRUD App

A simple **User Management CRUD application** built with **React.js, React Hook Form, and Tailwind CSS**.

This project allows users to create, view, update, and delete user cards. It also includes form validation and demonstrates important React concepts such as **state management, props, conditional rendering, `map()`, `filter()`, `useEffect()`, and React Hook Form**.

---

## 🚀 Features

* Create new users
* Display users as responsive cards
* Update existing user information
* Delete users
* Form validation
* Email validation
* Mobile number validation
* Image URL validation
* Name validation
* Automatic form population while updating
* Separate Create and Update modes
* Responsive card layout
* Modern dark UI using Tailwind CSS

---

## 🛠️ Technologies Used

* React.js
* React Hooks

  * `useState`
  * `useEffect`
* React Hook Form
* Tailwind CSS
* Vite
* JavaScript (ES6+)

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Form.jsx
│   ├── Navbar.jsx
│   └── UserCard.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

The project follows a simple component-based React structure.

---

# 🔄 CRUD Operations

## 1. Create User

When there is no active `editingIndex`, the form works in **Create mode**.

```jsx
setUsers((prev) => [...prev, data]);
```

The new user is added to the existing users array without modifying the previous users.

---

## 2. Read Users

Users are displayed using `map()`:

```jsx
users.map((elem, index) => {
  return (
    <UserCard
      key={index}
      index={index}
      user={elem}
      setUsers={setUsers}
      setToggle={setToggle}
      setEditingIndex={setEditingIndex}
    />
  );
});
```

Each user object is passed to the `UserCard` component through props.

---

## 3. Update User

The application stores the index of the user being edited:

```jsx
setEditingIndex(index);
```

The selected user's data is then loaded into the form:

```jsx
useEffect(() => {
  if (editingIndex !== null) {
    reset(users[editingIndex]);
  }
}, [editingIndex, users, reset]);
```

After submitting the updated form:

```jsx
setUsers((prev) =>
  prev.map((user, index) =>
    index === editingIndex ? data : user
  )
);
```

### How it works

If the current index matches `editingIndex`, the old user is replaced with the updated data.

```text
index === editingIndex
        ↓
      true
        ↓
   return data
```

For every other user:

```text
index !== editingIndex
        ↓
      false
        ↓
   return user
```

After updating, the editing state is cleared:

```jsx
setEditingIndex(null);
```

This allows the next form submission to work as a new **Create User** operation.

---

## 4. Delete User

The Delete functionality uses `filter()`:

```jsx
setUsers((prev) =>
  prev.filter((_, i) => i !== index)
);
```

`filter()` creates a new array containing only the elements for which the condition returns `true`.

For example:

```text
Users:
[A, B, C, D]

Delete index 2

A → 0 !== 2 → true  → keep
B → 1 !== 2 → true  → keep
C → 2 !== 2 → false → remove
D → 3 !== 2 → true  → keep

Result:
[A, B, D]
```

---

# 🧠 Important React Concepts Used

## `useState`

Three states are used in the application:

```jsx
const [toggle, setToggle] = useState(false);

const [users, setUsers] = useState([]);

const [editingIndex, setEditingIndex] = useState(null);
```

### `toggle`

Controls whether the form or user cards are displayed.

### `users`

Stores all user data.

### `editingIndex`

Stores the index of the user currently being edited.

---

## `useEffect`

`useEffect()` is used to populate the form when updating a user:

```jsx
useEffect(() => {
  if (editingIndex !== null) {
    reset(users[editingIndex]);
  }
}, [editingIndex, users, reset]);
```

---

## React Hook Form

The form uses:

```jsx
useForm({
  mode: "onChange"
});
```

Important methods:

```jsx
register
handleSubmit
reset
```

### `register()`

Connects inputs with React Hook Form.

### `handleSubmit()`

Handles form submission and validation.

### `reset()`

Used to:

* Populate the form during update
* Clear the form after submission

---

# ✅ Form Validation

The project includes validation for:

### Name

```jsx
required: "Name is Required"
```

Minimum length:

```jsx
minLength: {
  value: 3,
  message: "Name should be greater than 3 digits"
}
```

Leading/trailing spaces are also checked.

### Email

A regular expression is used to validate email format:

```jsx
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Mobile Number

The mobile number must contain exactly 10 digits.

```jsx
minLength: {
  value: 10
}

maxLength: {
  value: 10
}
```

### Profile Image

The image URL is required:

```jsx
required: "Image is required"
```

---

# 🧩 Component Responsibilities

## `App.jsx`

The main parent component.

Responsibilities:

* Maintains application state
* Stores users
* Stores editing index
* Controls form/card visibility
* Passes props to child components

---

## `Form.jsx`

Responsible for:

* Creating users
* Updating users
* Form validation
* Loading existing user data
* Resetting form data

---

## `UserCard.jsx`

Responsible for:

* Displaying user information
* Triggering update
* Triggering delete

---

## `Navbar.jsx`

Responsible for:

* Navigation UI
* Opening/closing the user form

---

# 🔁 Application Flow

```text
                 App.jsx
                    │
        ┌───────────┴───────────┐
        │                       │
      Form                  UserCard
        │                       │
        │                       ├── Update
        │                       │
        │                       └── Delete
        │
        └──────── users state ─────────┘
```

### Create Flow

```text
Click Create User
        ↓
editingIndex = null
        ↓
Empty Form
        ↓
Submit
        ↓
[...prev, data]
        ↓
New User Card
```

### Update Flow

```text
Click Update
        ↓
editingIndex = index
        ↓
Form opens
        ↓
reset(users[editingIndex])
        ↓
Existing data appears
        ↓
Submit
        ↓
map()
        ↓
Replace selected user
        ↓
setEditingIndex(null)
        ↓
User Cards
```

### Delete Flow

```text
Click Delete
        ↓
filter()
        ↓
Remove selected index
        ↓
New users array
        ↓
React re-renders
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

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

The application will be available on the local development URL provided by Vite.

---

# 📚 Learning Outcomes

This project helped practice:

* React component architecture
* Props
* State management
* Conditional rendering
* `useState`
* `useEffect`
* Array `map()`
* Array `filter()`
* React Hook Form
* Form validation
* Controlled application flow
* CRUD operations
* Tailwind CSS
* Component communication

---

# 🔮 Future Improvements

Possible improvements for the project:

* Add confirmation before deleting a user
* Add search functionality
* Add user filtering
* Add unique IDs instead of array indexes
* Store users in `localStorage`
* Add backend API
* Connect MongoDB
* Add authentication
* Add loading and error states
* Add pagination
* Add image preview
* Make the application fully responsive

---

## 👨‍💻 Author

**Yuvraj Dubey**

Built as a React CRUD practice project to strengthen frontend development concepts.
