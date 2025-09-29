# 🎯 Quiz Buz

> A quiz application built with **React**, **Chakra UI**, and **Supabase**.
> Each user can select a quiz, answer questions, and earn a score based on accuracy and time.
> In the future, custom quizzes will be generated using **AI** directly in the browser or via APIs.

---

## 🚀 Features

- 🔐 **User authentication** (sign up, login, sessions) with Supabase
- 📦 **Quiz and question storage** powered by Supabase
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
├─ src/
│   ├─ components/     # Reusable UI components (cards, modals, timers, etc.)
│   ├─ pages/          # Main views (QuizList, QuizDetail, Dashboard, Login)
│   ├─ hooks/          # Custom hooks (useAuth, useQuiz, useTimer)
│   ├─ contexts/       # React contexts (AuthContext, QuizContext)
│   ├─ lib/            # Forms, API calls (Supabase client)
|   ├─ pages/          # Main views (QuizList, QuizDetail, Dashboard, Login)
│   ├─ routes/         # React Router setup
│   ├─ types/          # TypeScript types/interfaces
│   └─ main.tsx        # App entry point
├─ .env.local          # Environment variables (Supabase keys)
├─ README.md
└─ package.json

````

## 🛠 Local Setup

### Requirements

- Node.js (v22+)
- pnpm (10+)
- A Supabase project (free tier is fine)

1. Clone the repository
   ```bash
   git clone https://github.com/giuseppecutuli/quiz-buz.git
   cd quiz-buz
   ````

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Set up environment variables (`.env.local`):

   ```bash
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 🧩 Database Schema (Supabase)

Main tables:

| Table          | Description                                |
| -------------- | ------------------------------------------ |
| `users`        | User management (handled by Supabase Auth) |
| `quizzes`      | List of available quizzes                  |
| `questions`    | Questions linked to each quiz              |
| `user_answers` | User responses per quiz                    |
| `user_scores`  | Final scores and stats per user            |

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
| **Supabase**                         | Auth, database, and storage |
| **Vite**                             | Dev server and bundler      |
| **TypeScript**                       | Static typing               |
| **React Query**                      | Data fetching and caching   |

---

## 🔮 Roadmap

* [x] React + Chakra UI setup
* [ ] Basic pages (quiz list, quiz detail, dashboard)
* [ ] Supabase integration (auth + data)
* [ ] Scoring system + timer
* [ ] Global leaderboard
* [ ] Custom quiz creation
* [ ] AI-generated questions


---

## 📜 License

Released under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

👤 Author: Giuseppe Cutuli [Website](https://www.cutuli.dev)
