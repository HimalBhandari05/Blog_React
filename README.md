# React Blog App

This project is a simple **React-based Blog Application** that connects to a fake RESTful API provided by **MockAPI**. It was built to practice API integration, CRUD operations, and component-based design using React. I built this to learn, not just to copy, and I’ve gained a solid understanding of how frontend and mock backends work together.

## Run Locally

### Clone the project

```bash
git clone https://github.com/HimalBhandari05/Blog_React.git
```

### Go to the project directory

```bash
cd Blog_React
```

### Install dependencies

```bash
npm install
```

If you are using Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Start the server

```bash
npm start
```

The app will run at `http://localhost:3000`

## MockAPI Setup

1. Visit [https://mockapi.io](https://mockapi.io)
2. Create a project
3. Add a resource named `blogs` with fields like `title`, `content`, `author`, `createdAt`
4. Copy the base URL and use it in your API calls

## API Example (Axios)

```js
import axios from 'axios';

const API_URL = 'https://yourproject.mockapi.io/api/v1/blogs';

export const getBlogs = () => axios.get(API_URL);
export const getBlog = (id) => axios.get(`${API_URL}/${id}`);
export const createBlog = (data) => axios.post(API_URL, data);
export const updateBlog = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteBlog = (id) => axios.delete(`${API_URL}/${id}`);
```

## Tech Stack

**Client:** React.js, Axios, React Router, Tailwind CSS / CSS

**API:** MockAPI

## Feedback

If you have any feedback, feel free to reach out at [himalbhandari342@gmail.com](mailto:himalbhandari342@gmail.com)
