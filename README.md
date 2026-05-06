# CK Events Authentication System

A premium, high-performance authentication system built with **React Native** and **Firebase**, designed for the **CK Events** application. This project features a modern UI, robust state management, and multi-platform support.

---

## 🚀 Features

- **Email & Password Authentication**: Complete flow including Sign Up, Login, and Password Reset.
- **Social Integration**: 
  - Google Sign-In support.
  - Apple Authentication support.
- **Premium UI/UX**:
  - Built with **Lucide Icons** and **React Native Vector Icons**.
  - Smooth animations using **React Native Reanimated 4**.
  - Custom themed components and gradients.
- **Firebase Firestore**: User profile management and data persistence.
- **Safe Area Support**: Optimized layouts for all device types (notches, dynamic islands).

---

## 🛠️ Tech Stack

- **Core**: React Native 0.81.4 (React 19.1.0)
- **State/Backend**: Firebase Auth & Firestore
- **Styling**: Vanilla Stylesheet with Reanimated 4
- **Icons**: Lucide React Native, Vector Icons
- **Navigation**: React Navigation (Stack)

---

## 📋 Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js**: >= 18
- **Java Development Kit (JDK)**: Version 17 (Recommended: `17.0.12-tem`)
- **Android Studio**: Configured for Android SDK 34+
- **Xcode**: Version 15+ (for iOS development)
- **CocoaPods**: Latest version

---

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd react-native-authentication-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Firebase Configuration**:
   Place your configuration files in the following directories:
   - **Android**: `android/app/google-services.json`
   - **iOS**: `ios/reactnativeauthenticationsystem/GoogleService-Info.plist`

---

## 🏃 Running the Application

### Android
```bash
# Set Java 17 (if using SDKMAN)
sdk use java 17.0.12-tem

# Run the app
npx react-native run-android
```

### iOS
```bash
# Install pods
cd ios && pod install && cd ..

# Run the app
npx react-native run-ios
```

---

## ⚙️ Project Configuration

- **App Name**: `CK Events`
- **Bundle ID / Namespace**: `com.ck.events.app`
- **Supported Platforms**: iOS 15.1+, Android 7.0+ (API 24+)

---

## 🧹 Troubleshooting

If you encounter native build issues, perform a clean build:

**Android**:
```bash
cd android && ./gradlew clean && cd ..
```

**iOS**:
```bash
cd ios
rm -rf Pods Podfile.lock build
pod deintegrate
pod install
cd ..
```

---

## 📂 Project Structure

```text
src/
├── components/   # Reusable UI components
├── hooks/        # Custom hooks (useAuth, etc.)
├── navigation/   # Navigation configuration (RootNavigator)
├── screens/      # Screen components (Login, Register, Home)
├── services/     # Firebase and external API services
├── theme/        # Global styles and color constants
└── App.tsx       # Application entry point
```

---

© 2026 Coderkube - CK Events