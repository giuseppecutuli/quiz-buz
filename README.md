# 🎯 Quiz Buz

> A quiz application built with **React**, **Chakra UI**, and **Firebase**.
> Each user can select a quiz, answer questions, and earn a score based on accuracy and time.
> In the future, custom quizzes will be generated using **AI** directly in the browser or via APIs.

---

## 🚀 Features

- 🔐 **User authentication** (sign up, login, password reset) with Firebase Auth
- 📦 **Quiz and question storage** powered by Firebase Firestore
- ⚙️ **Automatic quiz generation** via script
- 💯 **Dynamic scoring system** based on correct answers and response time
- 📊 **User dashboard** with quiz history and performance stats
- 🤖 *(Coming soon)* AI-powered quiz and question generation

---

## 📁 Project Structure

```

/
├─ public/
│   └─ favicon, manifest, static images
├─ firebase/
│   ├─ firestore.rules          # Firestore security rules
│   └─ firestore.indexes.json   # Composite indexes
├─ src/
│   ├─ components/              # Reusable UI components (cards, modals, timers, etc.)
│   ├─ pages/                   # Main views (QuizList, QuizDetail, Dashboard, Login)
│   ├─ hooks/                   # Custom hooks (useAuth, useQuiz, useTimer)
│   ├─ contexts/                # React contexts (AuthContext)
│   ├─ lib/                     # Firebase client, router, auth utilities
│   ├─ routes/                  # TanStack Router setup
│   ├─ types/                   # TypeScript types/interfaces
│   └─ main.tsx                 # App entry point
├─ .env                         # Environment variables (Firebase config)
├─ firebase.json                # Firebase project configuration
├─ .firebaserc                  # Firebase project alias
└─ package.json

```

## 🛠 Local Setup

### Requirements

- Node.js (v22+)
- pnpm (10+)
- A Firebase project (Spark free tier is fine)

1. Clone the repository
   ```bash
   git clone https://github.com/giuseppecutuli/quiz-buz.git
   cd quiz-buz
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Create `.env` with your Firebase config:
   ```bash
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   ```

4. Enable **Email/Password** sign-in in Firebase Console → Authentication → Sign-in method

5. Start the development server
   ```bash
   pnpm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 🔥 Deploy Firestore Rules

Deploy security rules and indexes to Firebase:

```bash
pnpm run deploy:firestore
```

Or via CI (GitHub Action) — the workflow `.github/workflows/deploy-firestore.yml` runs automatically on pushes to `main` that change Firestore config.

### GitHub Secret Required

| Secret | Value |
|---|---|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase service account JSON key |

To generate the key: Firebase Console → Project Settings → Service Accounts → "Generate new private key"

---

## 🧩 Firestore Collections

| Collection       | Description                                |
| ---------------- | ------------------------------------------ |
| `users`          | User profiles (handled by Firebase Auth)   |
| `quizzes`        | List of available quizzes                  |
| `questions`      | Questions linked to each quiz              |
| `user_answers`   | User responses per quiz                    |
| `user_scores`    | Final scores and stats per user            |

### Security rules summary

- **Users**: private — each user reads/writes only their own profile
- **Quizzes**: authenticated users can read; only the creator can write
- **Questions**: same as parent quiz
- **User answers / scores**: private to each user

---

## ⚙️ Scoring Logic

Example formula:

```
score = sum(
  base_score * (1 + timeBonus)
)

timeBonus = max(0, (time_limit - time_spent) / time_limit)
```

You can extend this with multipliers, penalties, or streak bonuses.

---

## 🧱 Tech Stack

| Technology                           | Purpose                     |
| ------------------------------------ | --------------------------- |
| **React**                            | UI framework                |
| **Chakra UI**                        | Styling and theming         |
| **Firebase** (Auth + Firestore)      | Auth, database, and storage |
| **Vite**                             | Dev server and bundler      |
| **TypeScript**                       | Static typing               |
| **TanStack Router**                  | Routing                     |
| **Zustand**                          | State management            |
| **Zod**                              | Form validation             |
| **React Hook Form**                  | Form handling               |

---

## 🔮 Roadmap

* [x] React + Chakra UI setup
* [ ] Basic pages (quiz list, quiz detail, dashboard)
* [x] Firebase integration (auth + Firestore)
* [ ] Scoring system + timer
* [ ] Global leaderboard
* [ ] Custom quiz creation
* [ ] AI-generated questions


---

## 📜 License

Released under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

👤 Author: Giuseppe Cutuli [Website](https://cutuli.dev)
