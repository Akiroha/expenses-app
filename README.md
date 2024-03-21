# Expense App

This React Native application is an expense app designed to help users track their spending over time. It utilizes Expo for easy development and @react-navigation for seamless navigation within the app.

## Features

- Built with Expo and Expo Icons for streamlined development.
- Utilizes TypeScript for improved code maintainability and type safety.
- CRUD is managed in a supabase database
- Implements stack and bottom navigation with @react-navigation.
- Manages app-wide state using React Redux and Redux Toolkit.

## Screens

### All Expenses

- Fetches all of the data from the expenses table
- Stores data in app wide redux state

### Manage Expenses

- Allows the creation, update, and deletion of expenses
- The 2nd stack screen which is presented as a modal

### Recent Expenses

- Fetches expenses made in the past week, inclusive
- Stores data in app wide redux state

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start` or `expo start`.

## Technologies Used

- React Native
- Expo
- TypeScript
- @react-navigation
- React Redux
- Redux Toolkit
- Supabase

## Author

[Agbai Iroha](https://github.com/Akiroha)
