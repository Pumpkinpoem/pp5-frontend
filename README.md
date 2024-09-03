# A Cup of Fiction

**A Cup of Fiction** is a social media platform tailored specifically for book clubs. It allows users to share their thoughts on books, connect with other readers, and participate in lively discussions.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Frontend Structure](#frontend-structure)
8. [Backend Structure](#backend-structure)
9. [Color Scheme](#color-scheme)
10. [Contributing](#contributing)
11. [License](#license)

## Project Overview

A Cup of Fiction is designed to bring book enthusiasts together in a digital space. Whether you're discussing the latest bestseller or diving deep into a classic novel, this platform provides the tools to foster engaging conversations and meaningful connections.

### Purpose

The application serves as a hub for book clubs to interact, share reviews, post updates, and connect with like-minded individuals.

### Target Audience

This platform is ideal for book club members, avid readers, and literary communities looking for a dedicated space to share their love of books.

## Features

- **User Authentication**: Secure login and registration system.
- **User Profiles**: Customize your profile and see others' reading habits and posts.
- **Posts and Comments**: Share your thoughts on books and interact with other users.
- **Follow System**: Follow other readers to stay updated on their posts.
- **Search Functionality**: Easily find books, users, and discussions.
- **Responsive Design**: Seamlessly browse on any device.

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests to the backend.
- **CSS Modules**: For styling components with scoped CSS.

### Backend

- **Django**: High-level Python web framework.
- **Django REST Framework**: Toolkit for building Web APIs.
- **SQLite**: Lightweight database for development.
- **Gunicorn**: WSGI HTTP server for UNIX.

## Installation

### Prerequisites

- Node.js and npm installed for frontend.
- Python 3.x installed for backend.
- Virtualenv for managing Python packages.

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/pp5-backend-main.git
    cd pp5-backend-main
    ```

2. **Create a virtual environment and install dependencies:**

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

3. **Run the development server:**

    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/pp5-frontend-main.git
    cd pp5-frontend-main
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend development server:**

    ```bash
    npm start
    ```

## Usage

- Access the application at `http://localhost:8000` for the backend and `http://localhost:3000` for the frontend.
- Register an account, create your profile, and start posting about your favorite books!

## API Endpoints

Here’s a brief overview of the key API endpoints provided by the backend:

- **`/api/auth/`**: Endpoints for user authentication (login, register, etc.).
- **`/api/posts/`**: CRUD operations for posts.
- **`/api/comments/`**: CRUD operations for comments.
- **`/api/profiles/`**: Endpoints for managing user profiles.
- **`/api/follow/`**: Follow and unfollow users.

## Frontend Structure

- **`/src/components`**: Reusable components like buttons, forms, and cards.
- **`/src/pages`**: Pages corresponding to different routes (e.g., `Home`, `Profile`, `PostPage`).
- **`/src/contexts`**: Context providers for managing global state (e.g., `AuthContext`).
- **`/src/styles`**: CSS modules for styling the application.

## Backend Structure

- **`/cup`**: Main Django app handling authentication, API routing, and settings.
- **`/posts`**: Django app managing post creation, editing, and deletion.
- **`/comments`**: Django app managing comments on posts.
- **`/profiles`**: Django app handling user profiles and follow system.

## Color Scheme

### Color Palette

For this project, I have selected a cozy and inviting color palette to align with the brand identity, which is focused on book clubs and creating a comfortable, easy-on-the-eyes experience.

#### Primary Colors:

- **Light Moss Green (#CBDFBD):** A soft, soothing green that serves as the main background color, providing a calming atmosphere.
- **Soft Buttercream (#F6F4D2):** A gentle off white used for borders, adding a warm contrast without being too harsh.
- **Chestnut (#A44A3F):** A rich, warm color used for primary text, ensuring excellent readability against the lighter backgrounds.
- **Light Sage (#D4E09B):** A light, creamy color used for secondary text, keeping the design soft and easy to read.
- **Peachy Coral (#F19C79):** A vibrant orange used sparingly for accent elements like buttons and links, drawing attention without overwhelming the user.

### What Does Analogous Mean in Color Theory?

In color theory, an **analogous** color scheme involves colors that are next to each other on the color wheel. These colors usually match well and create serene and comfortable designs. The analogous scheme used here incorporates shades of green, yellow, and orange to achieve a harmonious and welcoming look that resonates with the warmth and community spirit of book clubs.

## Testing