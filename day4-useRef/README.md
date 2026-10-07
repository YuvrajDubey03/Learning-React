# React Forms & React Hook Form Practice

A React practice project focused on understanding **form handling in React**, comparing manual form handling with **React Hook Form (RHF)**.

This project demonstrates how to collect form data, manage form references, handle form submission, and simplify form handling using `react-hook-form`.

## 📌 Topics Covered

* React Forms
* `useState`
* `useRef`
* Form submission with `onSubmit`
* `event.preventDefault()`
* Accessing input values using refs
* Managing form data
* React Hook Form
* `useForm()`
* `register()`
* `handleSubmit()`
* `reset()`
* Basic form state and errors
* Tailwind CSS form styling

## 🛠️ Tech Stack

* React.js
* JavaScript
* React Hook Form
* Tailwind CSS
* Vite

## 📂 Project Structure

```text
src/
├── components/
│   ├── Form.jsx
│   └── RHF.jsx
│
├── App.jsx
└── main.jsx
```

## 📝 Form Handling Without React Hook Form

The `Form.jsx` component demonstrates manual form handling using React's `useRef` and `useState`.

Input elements are stored inside a ref object:

```jsx
const FormRef = useRef({});
```

Each input is assigned to the ref:

```jsx
ref={(e) => FormRef.current.productName = e}
```

When the form is submitted, the values are collected manually:

```jsx
const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
        pname: FormRef.current.productName.value,
        category: FormRef.current.category.value,
        price: FormRef.current.price.value,
        image: FormRef.current.image.value
    };

    setProducts(obj);
};
```

The submitted product data is then stored using `useState`.

## ⚛️ React Hook Form

The `RHF.jsx` component demonstrates the same basic form using **React Hook Form**.

The `useForm()` hook provides useful methods:

```jsx
const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
} = useForm();
```

Inputs can then be registered directly:

```jsx
<input {...register("productName")} />
```

Form submission becomes simpler:

```jsx
<form
    onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
    })}
>
```

React Hook Form automatically collects the registered input values and passes them to the submit callback.

## 🔄 Manual Form vs React Hook Form

| Manual Form Handling                    | React Hook Form                |
| --------------------------------------- | ------------------------------ |
| Uses `useRef` / `useState`              | Uses `useForm()`               |
| Input values accessed manually          | Values collected automatically |
| More code                               | Less boilerplate               |
| Validation must be implemented manually | Built-in validation support    |
| More control over implementation        | Easier for larger forms        |
| Can become difficult to maintain        | Easier to scale                |

## 🎯 What I Learned

Through this project, I practiced:

1. How HTML forms work in React.
2. How to prevent the browser's default form submission.
3. How `useRef` can be used to access DOM elements.
4. How to store submitted data using `useState`.
5. How React Hook Form simplifies form handling.
6. How `register()` connects inputs with React Hook Form.
7. How `handleSubmit()` processes form submissions.
8. How `reset()` clears form fields.
9. The difference between manually handling forms and using a form library.

## 🚀 Installation & Setup

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

The application will then be available at the local Vite development URL.

## 📦 Dependency

Install React Hook Form if it is not already installed:

```bash
npm install react-hook-form
```

## 📚 Practice Project

This project was created as part of my **React learning and practice**, focusing specifically on understanding form handling and React Hook Form.

---

### 👨‍💻 Author

**Yuvraj Dubey**

Learning and building with React, JavaScript, and the MERN Stack.

---

⭐ If you find this project useful, consider giving the repository a star.
