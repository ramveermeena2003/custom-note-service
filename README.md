# 📝 Custom Note Service (Frontend Only)

A simple and elegant note-taking app built with **React** and **Tailwind CSS**, persisting data to **localStorage** without any backend.

## 🚀 Live Demo

🔗 [Live Site on Vercel](https://custom-note-service-seven.vercel.app/)

📂 [GitHub Repo](https://github.com/ramveermeena2003/custom-note-service)

---

## 📖 Overview

Users can:
- Add new notes (title + content)
- View all saved notes
- Edit or delete existing notes
- All notes are stored persistently using `localStorage`.

---

## ⚙️ Tech Stack

- **React** for building UI
- **Tailwind CSS** for styling
- **localStorage** for client-side persistence

---

 ## 🛠️ Project Setup

```bash
npm install
npm run dev
```



## 🧩 Component Structure**

- **AddNote.jsx:** Form to add a new note

- **NotesList.jsx:** Displays list of saved notes

- **App.jsx:** Manages page navigation between Add/View

- **utils/storage.js:** Handles localStorage operations

**Why this structure:**

- Separating the functionality into components keeps the code modular and easier to maintain. AddNote.jsx handles the form logic, NotesList.jsx displays the saved notes, and the utility file handles localStorage operations, which makes the app more organized and scalable.

## 💾 Storage Strategy
- localStorage is used for persisting notes across page reloads.
- Key name: my-notes

**Why localStorage + key naming:**
- No backend required, ensuring the app runs entirely on the client side.
- localStorage is supported by all modern browsers, making it reliable for small data storage.
- The key my-notes is short, clear, and unique to avoid conflicts with other stored data.

## 🧠 State Management
- **useState** for form fields and local state

- **useEffect** in NotesList to load notes once on mount

**Why useState + this submit handler:**

- Keeps form input controlled, which simplifies state management and allows for real-time updates. The submit handler is also easy to manage and ensures that the state is updated correctly when new notes are added.

**Why useEffect to sync storage → state:**

- This approach ensures that notes are loaded from localStorage only once when the component is mounted, preventing unnecessary reads on re-renders. It also keeps the UI in sync with the underlying storage.

## 🎨 Styling Approach
- Tailwind CSS for utility-first rapid styling.

**Why Tailwind:**

- Tailwind allows rapid prototyping and quick adjustments to styling, saving development time.
- It encourages consistent spacing, margins, and layout, leading to a more cohesive design.
- Tailwind reduces the need for additional CSS files and promotes a more maintainable codebase.

## 🧭 Navigation Strategy
- Basic top-level navigation using conditional rendering and state toggle between Add/View

**Why this navigation approach for simplicity:**

- A simple navigation toggle between "Add Note" and "View Notes" avoids overcomplicating the app with routing libraries, making it easier to understand and maintain for this small project. It's straightforward and easy to manage using useState.

## ⚠️ Error Handling + UX
- Shows a "Saving..." message while saving

- Displays an error banner if saving to localStorage fails

**Why show spinner here:**

- Displays feedback to the user that their data is being processed and saved, improving user experience during operations that may take a few moments.

**Why display error banner:**

- Alerts the user if there is a failure with localStorage (e.g., storage limit exceeded), ensuring that users are aware of any issues and can take action if needed.

