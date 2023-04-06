# app_upgrade_sample

This is a sample React Native app that demonstrates how to integrate with an App Upgrade tool to manage app versions and check for whether we should enforce force upgrade, force upgrade, or nothing using its SDK.

# Requirements
To run the app, you will need to have the following installed on your machine:

- Node.js (v12.13.0 or later)
- Yarn (v1.19.1 or later)

You will also need to have access to the App Upgrade tool, and obtain the API Key to be able to integrate with their SDK. (In case of expiry of the current API Key used in this project because it is not a paid version)
This is the link for app-upgrade:
[https://appupgrade.dev]

# Getting Started
- Clone this repository to your local machine.
- Navigate to the project directory in your terminal.
- Install dependencies by running yarn install.
- Integrate the App Upgrade SDK into your project. For more information, please consult the documentation provided with the SDK.
- Launch the app by running react-native run-android (for Android) or react-native run-ios (for iOS).

# How it Works
When the app is launched, it connects to the App Upgrade SDK and checks for available updates. If a force update is available, the user will be forced to download the update to continue using the app. If it is a flexible update then the user will be given the option to continue using the app. The SDK handles the process of calling the API, checking for updates, and viewing the popup for the user (in case of any).

# Contributing
This app was created as a proof of concept and is intended to serve as a starting point for future development.
