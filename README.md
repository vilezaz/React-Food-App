# React Food App (site screenshots below)

This repository contains a simple, real-world food ordering single-page app built with React. It includes menu listing, food item details, a cart, and a basic checkout flow (frontend only). Sign-in and sign-up are handled with Firebase Authentication and Google Sign-In is available.

---

## Key features

* Menu listing and food detail pages
* Add to cart, update quantities, and remove items
* Add to favourites, remove from favourites
* Simple checkout flow (client-side)
* User account management with Firebase Authentication

  * Email/password sign up & sign in
  * Google Sign-In (OAuth)
* Responsive layout (mobile-friendly)

---

## Tech stack

* React (create-react-app or Vite)
* React Router for routing
* Redux for global state (cart + auth)
* Firebase Authentication for user accounts (email/password + Google)
* Tailwind CSS for styling

---

## How to run locally

1. Clone the repo and run locally

```bash
git clone https://github.com/vilezaz/React-Food-App.git
```

2. Move into the project folder

```bash
cd React-Food-App
```

3. Install dependencies

```bash
npm install
```

4. Create a Firebase project and enable Authentication

* Go to the Firebase Console (console.firebase.google.com)
* Create a new project (or use an existing one)
* In **Authentication** → **Sign-in method**, enable **Email/Password** and **Google**
* In **Project settings** → **General**, copy the Firebase config for your web app (apiKey, authDomain, projectId, etc.)

5. Add your Firebase config to the project

Create a `.env.local` (or `.env`) file in the project root and add your Firebase config values. Example:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_APP_ID=your_app_id
# optional
REACT_APP_FIREBASE_MEASUREMENT_ID=G-XXXXXX
```

6. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Screenshots

### Login Page

![App Screenshot](/public/githubPictures/Screenshot%20from%202025-08-12%2016-10-00.png)

### Home Page

![App Screenshot](/public/githubPictures/Screenshot%20from%202025-08-12%2016-10-10.png)

### Trending Page (Home)

![App Screenshot](/public/githubPictures/Screenshot%20from%202025-08-12%2016-10-19.png)

### Category Sorting

![App Screenshot](/public/githubPictures/Screenshot%20from%202025-08-12%2016-11-03.png)

### Favourite Page

![App Screenshot](/public/githubPictures/Screenshot%20from%202025-08-12%2016-11-33.png)

### Cart Page
![App Screenshot](/public/githubPictures/Screenshot%20from%202025-08-12%2016-11-44.png)
