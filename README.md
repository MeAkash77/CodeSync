# CodeSync  

--------------------------- ![image](https://github.com/user-attachments/assets/352e97f5-d782-489d-8abe-da9bace0891f)
### Collaborate. Innovate. Elevate.

CodeSync is a real-time collaborative coding environment powered by ai that allows developers to write, share, and edit code together. It features a shared file system, a collaborative code editor, a whiteboard for brainstorming, and a chat for communication.

## Installation

<img width="959" height="443" alt="Image" src="https://github.com/user-attachments/assets/3ce76d6b-77c2-4636-aecc-e3c8a2460616" />

<img width="959" height="443" alt="Image" src="https://github.com/user-attachments/assets/9b72de62-a776-4b01-a112-0414ebfc7089" />

## Backend

<img width="959" height="437" alt="Image" src="https://github.com/user-attachments/assets/77f2f231-60f5-4b3b-adfa-b0790b75888f" />

## With chat bot

<img width="959" height="442" alt="Image" src="https://github.com/user-attachments/assets/cee6b5d3-9e95-4ecc-936d-606514103e83" />

## Start your programming journey

<img width="959" height="443" alt="Image" src="https://github.com/user-attachments/assets/d1de4f99-020f-4656-b51f-bdc75ddeb933" />

## Features

- **Real-time Collaboration:** Work with your team in a shared environment, with changes reflected instantly for all participants.
- **Shared File System:** Manage your project files with a shared file system, allowing for easy access and organization.
- **Collaborative Code Editor:** Write and edit code together in a powerful, feature-rich code editor.
- **AI Powered:** chat with our ai with /ai and /code 
- **Whiteboard:** Brainstorm ideas, draw diagrams, and visualize your thoughts on a collaborative whiteboard.
- **Chat:** Communicate with your team in real-time with the built-in chat feature.
- **Rooms:** Create or join rooms to collaborate with your team on specific projects.
- **Authentication:** Secure your projects with user authentication, ensuring that only authorized users can access your work.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) - React framework for building user interfaces.
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Liveblocks](https://liveblocks.io/) - Toolkit for building real-time collaborative experiences.
  - [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Code editor that powers VS Code.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
  - [Shadcn UI](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
- **Backend:**
  - [Convex](https://www.convex.dev/) - Backend platform for building web applications.
  - [Clerk](https://clerk.com/) - User authentication and management.
- **Languages:**
  - [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.

## Getting Started

To get started with CodeSync, you'll need to have Node.js and pnpm installed on your machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MeAkash77/CodeSync.git
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the `codeSync` directory and add the following environment variables:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   GEMINI_API_KEY=
   ```

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

This will start the development server, and you can access the application at `http://localhost:3000`.
