# Authentication System

Production-ready React Native authentication system built with Firebase for the CK Events application.

---

## Overview

This project demonstrates a scalable and maintainable React Native architecture focused on authentication workflows and modern mobile UI development. It includes secure authentication flows, social login integration, Firebase backend support, and reusable UI components.

---

## Features

* Email & Password Authentication
* Google Sign-In Integration
* Apple Authentication Support
* Firebase Firestore Integration
* Modern UI Components & Animations
* Safe Area Optimized Layouts
* Multi-platform Support (Android & iOS)

---

## Architecture

* Modular React Native Structure
* Feature-Based Organization
* Service-Based Data Layer
* Reusable Component Architecture

---

## Tech Stack

* React Native 0.81.4
* React 19.1.0
* Firebase Auth & Firestore
* React Navigation
* React Native Reanimated 4
* Lucide React Native
* React Native Vector Icons

---

## Project Structure

```text
src/

├── components/   # Reusable UI components
├── hooks/        # Custom hooks and shared logic
├── navigation/   # Navigation configuration
├── screens/      # Authentication and app screens
├── services/     # Firebase and external services
├── theme/        # Global styles and constants
└── App.tsx       # Application entry point
```

---

## Layer Overview

* **Components**: Shared and reusable UI elements
* **Hooks**: Encapsulated state and business logic
* **Navigation**: Route and screen management
* **Screens**: Application UI and user interaction
* **Services**: Firebase integration and external services
* **Theme**: Global styling, colors, and design system

---

## Authentication Flow

```text
User Action → Screen → Hook / Service → Firebase → Response → UI Update
```

---

## Supported Authentication

* Email & Password Login
* User Registration
* Password Reset
* Google Authentication
* Apple Authentication

---

## Platform Support

* Android 7.0+ (API 24+)
* iOS 15.1+

---

## Getting Started

### Prerequisites

* Node.js >= 18
* JDK 17
* Android Studio
* Xcode 15+
* CocoaPods

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Coderkube-App/react-native-authentication-system.git
cd react-native-authentication-system
```

Install dependencies:

```bash
npm install
```
---

## Project Configuration

* App Name: CK Events
* Bundle ID: `com.ck.events.app`
  
---
## Setup Instructions

### 1. Configure Firebase

To utilize the Firebase authentication and Firestore layers:

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Add an **Android App** with the package name `com.ck.events.app`.
3. Enable **Email/Password** and **Google** authentication in the Auth section.
4. Download the `google-services.json` and `GoogleService-Info.plist` files.
5. Add Firebase configuration files:

  * Android:
    `android/app/google-services.json`

  * iOS:
    `ios/reactnativeauthenticationsystem/GoogleService-Info.plist`

---

## Run the Application

### Android

```bash
npx react-native run-android
```

### iOS

```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

---

## Troubleshooting

### Android Clean Build

```bash
cd android && ./gradlew clean && cd ..
```

### iOS Clean Build

```bash
cd ios
rm -rf Pods Podfile.lock build
pod deintegrate
pod install
cd ..
```

---

## Purpose

This project provides a strong foundation for:

* Authentication-based mobile applications
* Scalable React Native architecture
* Firebase-powered applications
* Reusable and maintainable mobile systems

---

## Contribution

Feel free to fork and improve this project! Pull requests are welcome.

---

## License

This project is licensed under the Apache-2.0 License.

---
*Note: Do not commit your real API key to public repositories.*
