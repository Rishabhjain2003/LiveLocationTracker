# LiveLocationTracker 📍

This is a **Live Location Tracking Application** built using Node.js. It leverages the browser's Geolocation API and WebSockets (likely **Socket.IO**) to broadcast real-time location data to all connected clients, allowing you to view user positions instantly on a map interface.

-----

## ✨ Features

  * **Real-Time Updates:** Instantaneous synchronization of location data using WebSockets.
  * **Geolocation API:** Utilizes the client-side browser API to obtain coordinates.
  * **Map Integration:** Displays locations on a dynamic map interface (e.g., using Leaflet or Google Maps API, depending on the tutorial).
  * **Simple Setup:** Quick installation and startup process using standard Node.js tools.

-----

## 🛠️ Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | Node.js | Runtime environment for the server. |
| **Server Framework** | Express | Handling routing and server-side logic. |
| **Real-Time** | Socket.IO | Enabling duplex communication for live location updates. |
| **Templating** | EJS (Embedded JavaScript) | Generating dynamic HTML views. |
| **Client-side** | HTML/CSS/JavaScript | Frontend structure and browser geolocation. |

-----

## 🚀 Setup and Installation

Follow these steps to get the project running locally.

### Prerequisites

  * Node.js (LTS version recommended)
  * npm (Node Package Manager)

### Installation Steps

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:Rishabhjain2003/LiveLocationTracker.git
    cd LiveLocationTracker
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the application:**

    ```bash
    node app.js
    # OR (if using nodemon or a start script)
    npm start
    ```

The application should now be running, typically accessible at `http://localhost:3000`.

-----

## ☁️ Resolving Git Errors (Permission Denied)

The errors you encountered (`remote origin already exists` and `Permission denied (publickey)`) indicate an authentication failure with GitHub. This section provides the minimal commands needed to successfully push your existing commit.

If you have already generated and added your SSH key to GitHub, run the following three lines in sequence:

```bash
# 1. Removes the incorrect/conflicting 'origin' remote
git remote remove origin

# 2. Adds the remote back with the correct SSH URL
git remote add origin git@github.com:Rishabhjain2003/LiveLocationTracker.git

# 3. Pushes your 'main' branch and sets it as the upstream default
git push -u origin main
```

**If you still receive the `Permission denied (publickey)` error,** you must generate and add a new SSH key to your GitHub account settings.

-----

## 📝 License

This project is open-source. Please refer to the specific license file included in the repository (if applicable) for distribution details.
