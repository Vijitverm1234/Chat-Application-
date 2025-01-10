# Chat Application

A real-time chat application built using **React** for the frontend and **Firebase** for backend services, including authentication and real-time database.

## Features

- User Authentication (Google Sign-In, Email/Password)
- Real-time messaging
- User-friendly interface
- Responsive design for mobile and desktop
- Hosted on Firebase Hosting

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Firebase Authentication, Firebase Firestore
- **Hosting**: Firebase Hosting

---

## Installation

Follow these steps to set up and run the application locally:

### Prerequisites

1. Node.js installed on your machine
2. Firebase account set up

### Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### Install Dependencies

```bash
npm install
```

### Firebase Configuration

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Set up **Authentication**:
   - Enable Google Sign-In or Email/Password providers in the Firebase Authentication section.
3. Set up **Firestore Database**:
   - Create a Firestore database in "Test Mode" (you can adjust the rules later).
4. Set up **Firebase Hosting**:
   - Initialize hosting in the Firebase Console.
5. Obtain your Firebase config object:
   - Go to Project Settings > General > Your apps > Firebase SDK snippet (Config).

### Add Firebase Configuration to the App

1. Create a `.env` file in the root of the project:

   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

2. Replace the placeholders with your Firebase project's credentials.

### Start the Development Server

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Deployment

To deploy the app to Firebase Hosting:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to Firebase:

   ```bash
   firebase login
   firebase init
   firebase deploy
   ```

---

## Folder Structure

```
chat-app/
├── public/
├── src/
│   ├── components/    # Reusable React components
│   ├── contexts/      # Context for global state (e.g., AuthContext)
│   ├── firebase/      # Firebase configuration
│   ├── pages/         # Main pages of the app
│   ├── App.js         # Main app entry point
│   └── index.js       # ReactDOM rendering
└── .env               # Environment variables
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature description"
   ```

4. Push to your branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Firebase Documentation](https://firebase.google.com/docs)

---

## Screenshots

Add screenshots of your application here to showcase its features and design.
