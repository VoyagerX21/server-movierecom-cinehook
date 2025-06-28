# 🎬 Movie Recommendation API

A sleek and simple Node.js API that delivers personalized movie recommendations based on a provided movie title. Deployed on **Vercel**, this API powers a frontend to enhance user experience by suggesting similar movies.

---

## 🔗 Live API Endpoint

Make a `POST` request to the following endpoint to get movie recommendations:

```
https://server-movierecom-cinehook.vercel.app/api/suggest
```

**Request Body Example:**

```json
{
  "title": "Inception"
}
```

**Response Example:**

```json
[
  { "name": "Interstellar" },
  { "name": "The Matrix" },
  ...
]
```

---

## 📁 Project Structure

```plaintext
.
├── api
│   └── index.js       # Vercel serverless function entry point
├── routes
│   └── suggest.js       # Express server handling /api/suggest route
├── package.json       # Project dependencies and scripts
├── package.-lockjson  
├── server.js     
└── vercel.json         # vercel deployment configuration
```

---

## 🚀 Deployment on Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/gauravs-projects-a69012f7/server-movierecom-cinehook). Simply connect your GitHub repository, and Vercel will automatically detect the `vercel.json` configuration for seamless deployment.

### `vercel.json` Configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "api/index.js"
    }
  ]
}
```

---

## 🔧 Tech Stack

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for handling API routes
- **Vercel**: Serverless deployment platform

---

## 🧪 Testing the API

Test the API using [Postman](https://www.postman.com/) or the following `curl` command:

```bash
curl -X POST https://server-movierecom-cinehook.vercel.app/api/suggest \
-H "Content-Type: application/json" \
-d '{"title": "Inception"}'
```

---

## 📦 Example Usage in a React App

Integrate the API into your React application with a simple `fetch` request:

```javascript
const res = await fetch("https://server-movierecom-cinehook.vercel.app/api/suggest", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: movie.title }), //movie should be defined here
});
const data = await res.json();
```

---

## 📍 Credits

Developed by [VoyagerX21](https://github.com/VoyagerX21). Powered by a curated JSON movie dataset.
