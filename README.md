Chat App

A modern, real-time chat application with user authentication, file sharing, and microservices architecture.

✨ Features

- **Real-time Messaging** - Instant chat with WebSocket support via Socket.io
- **User Authentication** - JWT-based auth with email verification
- **File Sharing** - Upload and share images via Cloudinary
- **Microservices** - Modular backend with User, Chat, and Mail services
- **Caching** - Redis for optimized performance
- **Async Notifications** - Email notifications via RabbitMQ
- **Responsive UI** - Modern frontend with Tailwind CSS and React

🏗️ Architecture

### Backend
- **User Service** - Authentication, user management, Redis caching
- **Chat Service** - Real-time messaging, Cloudinary file uploads
- **Mail Service** - Async email notifications consumer

### Frontend
- Next.js 16 with React 19
- TypeScript for type safety
- Tailwind CSS for styling

## 🛠️ Tech Stack

**Backend:**
- Node.js with Express.js
- TypeScript
- MongoDB (Mongoose)
- Socket.io (Real-time)
- Redis (Caching)
- RabbitMQ (Message Queue)
- JWT (Authentication)
- Cloudinary (File Storage)

**Frontend:**
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Socket.io Client

