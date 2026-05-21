# Playwright BDD E-Commerce Automation Framework

## Overview

This project is a scalable end-to-end automation framework built using Playwright, TypeScript, and Cucumber BDD principles.

The framework was designed to reflect how modern UI automation projects are typically structured within Agile delivery environments, with a strong focus on maintainability, reusable components, reporting, and CI/CD integration.

Rather than creating a collection of isolated automated tests, the goal was to build a lightweight but enterprise-style automation architecture that demonstrates:

- Page Object Model implementation
- reusable automation utilities
- Behaviour-Driven Development (BDD)
- cross-browser execution
- API and UI validation
- GitHub Actions CI/CD integration
- scalable test organisation
- reporting and debugging support

The framework intentionally focuses on clean design, readability, and reusable automation workflows rather than simply automating individual UI actions.

---

# Website Under Test

This framework uses the public demo application below:

https://automationexercise.com

Automation Exercise was selected because it provides realistic e-commerce style workflows and automation-friendly functionality including:

- user authentication
- product searching
- cart functionality
- navigation flows
- form validation
- API validation
- dynamic UI interactions

Using a realistic workflow-based application makes it possible to demonstrate both UI and API automation approaches within the same framework.

---

# Why Playwright?

Playwright was selected because of its modern browser automation capabilities and strong support for reliable end-to-end testing.

Some of the reasons for choosing Playwright include:

- built-in auto waiting
- fast execution speed
- parallel execution support
- cross-browser testing
- powerful locator strategies
- network interception capabilities
- built-in screenshots, videos, and tracing
- modern TypeScript support

The framework supports execution across:

- Chromium
- Firefox
- WebKit

This helps simulate real-world cross-browser validation strategies commonly used within enterprise environments.

---

# Why TypeScript?

TypeScript was used to improve framework maintainability, readability, and scalability.

Using TypeScript provides:

- type safety
- improved IDE support
- cleaner refactoring
- improved maintainability
- better long-term scalability

This becomes increasingly important as automation frameworks grow in size and complexity.

---

# Why Cucumber BDD?

Cucumber was integrated to demonstrate Behaviour-Driven Development (BDD) practices and improve readability between technical and non-technical stakeholders.

Feature files are written using Gherkin syntax to keep business workflows understandable while maintaining separation between test logic and implementation.

This approach also improves collaboration between QA engineers, developers, product owners, and business stakeholders within Agile delivery environments.

---

# Framework Goals

The primary goal of this framework was to demonstrate how a maintainable and scalable automation solution can be structured using modern tooling and engineering practices.

The framework was intentionally designed to demonstrate:

- reusable automation architecture
- separation of concerns
- scalable Page Object Model implementation
- reusable utilities and helpers
- CI/CD-ready execution
- modern debugging and reporting capabilities
- workflow-driven automation design

---

# Framework Structure

The framework follows a layered architecture to improve maintainability, readability, and separation of concerns.

```text
playwright-bdd-ecommerce-framework/
│
├── .github/
│   └── workflows/
│
├── features/
│
├── src/
│   ├── api/
│   ├── fixtures/
│   ├── helpers/
│   ├── pages/
│   ├── step-definitions/
│   └── utils/
│
├── reports/
├── screenshots/
├── test-results/
├── videos/
│
├── playwright.config.ts
├── cucumber.js
├── tsconfig.json
├── package.json
└── README.md
```

---

# Framework Architecture

The framework is intentionally separated into multiple layers to improve maintainability and reduce duplication.

## Feature Files

Feature files define business workflows using Gherkin syntax.

Example:

```gherkin
Feature: Login functionality

  Scenario: Successful login
    Given the user navigates to the application
    When the user logs in with valid credentials
    Then the user should successfully login
```

This helps keep scenarios readable and business-focused.

---

## Step Definitions

Step definitions act as the connection layer between Gherkin steps and the automation implementation.

The step definitions intentionally remain lightweight and orchestration-focused.

Browser interactions and business logic are abstracted into reusable page objects.

---

## Page Objects

Page Object Model (POM) was implemented to separate UI interaction logic from test workflows.

This improves:

- maintainability
- reusability
- readability
- scalability

Selectors and browser interactions are centralised inside reusable page classes.

Example:

```typescript
export class LoginPage extends BasePage {
  async login(email: string, password: string) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}
```

This approach makes UI updates easier to maintain when application changes occur.

---

## Helpers and Utilities

Reusable utilities were added for:

- logging
- waits
- API interactions
- environment configuration
- reusable assertions

This helps reduce duplicated logic across the framework.

---

# Key Framework Capabilities

The framework currently demonstrates several modern automation engineering practices.

---

## Cross-Browser Execution

The framework supports execution against:

- Chromium
- Firefox
- WebKit

This simulates real-world browser compatibility validation.

---

## Parallel Execution

Parallel execution was enabled using Playwright configuration to improve execution efficiency and reduce runtime.

This reflects how automation suites are commonly executed within CI/CD pipelines.

---

## Retry Strategy

Retries were configured to help reduce intermittent UI instability and improve reliability during automated execution.

```typescript
retries: 2
```

---

## Reporting and Debugging

The framework supports:

- HTML reports
- screenshots on failure
- video recording
- execution traces

These capabilities help improve debugging and provide better visibility during failures.

---

## Screenshot Capture

Screenshots are automatically captured on test failures.

```typescript
screenshot: 'only-on-failure'
```

---

## Video Recording

Video capture is retained for failed executions to assist debugging.

```typescript
video: 'retain-on-failure'
```

---

## Trace Collection

Playwright tracing was enabled to simplify root-cause analysis during failures.

```typescript
trace: 'retain-on-failure'
```

---

# API Validation Support

Basic API helper support was introduced to demonstrate combined UI and API automation strategies.

Example API validation:

```typescript
const response = await apiContext.get(
  'https://automationexercise.com/api/productsList'
);
```

This demonstrates how UI and API automation can coexist within the same framework.

---

# CI/CD Integration

GitHub Actions integration was added to simulate automated execution within a continuous integration environment.

The framework automatically executes on:

- pushes
- pull requests

Example workflow:

```yaml
- name: Run automation tests
  run: npm test
```

This reflects modern continuous delivery practices commonly used within Agile engineering teams.

---

# Example Automated Workflows

The framework currently demonstrates workflows such as:

- user login validation
- product search validation
- authentication flow validation
- navigation flow verification
- API response validation
- shopping cart interaction flows

The intention was to focus on reusable workflow automation rather than isolated UI interactions.

---

# Design Decisions

Several intentional design decisions were made while building this framework.

## Playwright Instead of Selenium

Playwright was selected because of:

- improved execution reliability
- built-in auto waits
- modern browser support
- simpler debugging capabilities
- stronger TypeScript integration

---

## Page Object Model

Page Object Model was implemented to improve framework maintainability and reduce duplication.

This allows UI changes to be managed centrally without impacting test workflows.

---

## TypeScript

TypeScript was selected to improve readability, maintainability, and long-term scalability.

---

## BDD Implementation

Cucumber BDD was introduced to improve readability and workflow collaboration.

This helps maintain clear separation between business workflows and technical implementation.

---

## Reusable Utilities

Reusable helpers and utilities were centralised to reduce repeated logic and simplify future framework expansion.

---

## CI/CD Early Integration

CI/CD integration was included early in the framework setup to reflect real-world automation delivery practices.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/playwright-bdd-ecommerce-framework.git
```

Navigate into the project:

```bash
cd playwright-bdd-ecommerce-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Environment Configuration

Create a `.env` file in the root directory:

```env
BASE_URL=https://automationexercise.com
EMAIL=your-email@example.com
PASSWORD=your-password
```

The framework uses environment variables to avoid hardcoding sensitive configuration values.

---

# Running Tests

Run all tests:

```bash
npm test
```

Run smoke tests:

```bash
npm run test:smoke
```

Run regression tests:

```bash
npm run test:regression
```

Run tests in headed mode:

```bash
npm run test:headed
```

---

# Reporting

After execution, reports can be found in:

```text
reports/
```

The framework generates:

- HTML reports
- screenshots
- videos
- traces

These artifacts help improve debugging and execution visibility.

---

# GitHub Actions

The framework includes GitHub Actions integration for automated execution.

Workflow file:

```text
.github/workflows/playwright.yml
```

The pipeline automatically:

- installs dependencies
- installs Playwright browsers
- executes automation tests

---

# Future Improvements

Potential future enhancements include:

- Allure reporting
- Docker support
- visual regression testing
- accessibility testing
- API mocking
- mobile device emulation
- database validation
- contract testing

---

# Final Notes

The objective of this project was not simply to automate browser interactions, but to demonstrate how a maintainable and scalable automation framework can be structured using modern tooling and engineering practices.

The framework intentionally focuses on:

- clean architecture
- reusable automation components
- workflow-driven automation
- CI/CD readiness
- maintainability
- debugging visibility
- scalable automation design

The overall approach reflects the kind of automation structure commonly used within modern Agile engineering environments.