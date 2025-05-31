AccuKnox User Management Tests
This repository contains automated E2E tests for the OrangeHRM User Management module using Playwright with TypeScript.
🚀 Project Overview
This project automates the testing of OrangeHRM's User Management functionality including:

User Creation
User Search
User Editing/Updates
User Deletion
Data Validation

🛠️ Technology Stack

Testing Framework: Playwright v1.40.0
Language: TypeScript
Pattern: Page Object Model (POM)
Test Runner: Playwright Test Runner
Reporting: HTML, JSON, and List reporters

📁 Project Structure
AccuKnox-user-management-tests/
├── pages/
│   ├── LoginPage.ts          # Login page object
│   ├── AdminPage.ts          # Admin module page object
│   └── AddUserPage.ts        # Add/Edit user page object
├── tests/
│   └── user-management.spec.ts # Main test file
├── utils/
│   └── testData.ts           # Test data utilities
├── test-results/             # Test execution results
├── playwright-report/        # HTML reports
├── playwright.config.ts      # Playwright configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
🔧 Prerequisites

Node.js (v16 or higher)
npm or yarn
Git

⚡ Quick Setup
1. Clone the Repository
bashgit clone https://github.com/BharatGorani/AccuKnox-user-management-tests.git
cd AccuKnox-user-management-tests
2. Install Dependencies
bashnpm install
3. Install Playwright Browsers
bashnpx playwright install
🎯 Running Tests
Run All Tests
bashnpm test
Run Tests in Headed Mode (Browser Visible)
bashnpm run test:headed
Run Tests with Debug Mode
bashnpm run test:debug
Run Tests with UI Mode
bashnpm run test:ui
Run Specific Test File
bashnpx playwright test user-management.spec.ts
Run Specific Test Case
bashnpx playwright test -g "Add a New User with Valid Data"
📊 Test Reports
View HTML Report
bashnpm run test:report
Generate and View Report After Test Run
bashnpm test
npx playwright show-report
