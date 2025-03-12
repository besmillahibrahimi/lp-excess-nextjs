# Next.js Project Setup Guide

This guide provides step-by-step instructions to set up and run the Next.js project that is hosted on GitHub. The project fetches landing page data from a Strapi backend.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)
- A running instance of [Strapi](https://strapi.io/) (Follow [Strapi Setup Guide](#) if not already set up)

## 1. Clone the Repository

Run the following command to clone the Next.js project from GitHub:

```sh
git clone https://github.com/csoft/lp-excess-react.git
```

Navigate into the project directory:

```sh
cd lp-excess-react
```

## 2. Install Dependencies

Run the following command to install all project dependencies:

```sh
pnpm install
```

## 3. Configure Environment Variables

This project requires environment variables for connecting to the Strapi backend. Copy the `.env.example` file to create a `.env` file:

```sh
cp .env.example .env
```

Open the `.env` file in a text editor and update the values accordingly. Example:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Ensure Strapi is running on `http://localhost:1337`. If Strapi is running on another host or port, update the `NEXT_PUBLIC_STRAPI_URL` accordingly.

## 4. Run the Next.js Project

Start the development server with:

```sh
pnpm dev
```

Once the server is running, open the project in your browser:

```
http://localhost:3000
```

## 5. Fetching Landing Page Data from Strapi

The Next.js application retrieves landing page data from Strapi. If Strapi is running correctly, the homepage should display content fetched from the CMS.

## 6. Open Strapi Dashboard & Make Changes

To modify the landing page data:

1. Open the Strapi admin panel:
   ```
   http://localhost:1337/admin
   ```
2. Log in with your Strapi credentials.
3. Navigate to the relevant content type (e.g., `Landing Page`).
4. Make changes to the content and save.
5. Refresh the Next.js application (`http://localhost:3000`) to see the updates.
