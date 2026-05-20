# TestFrameworkDemo# Playwright BDD E-Commerce Automation Framework

Enterprise-style test automation framework built using Playwright, TypeScript, and Cucumber BDD.

## Framework Features

- Playwright + TypeScript architecture
- Cucumber BDD implementation
- Page Object Model (POM)
- Cross-browser execution
- Parallel execution
- Retry strategy
- API validation support
- CI/CD integration using GitHub Actions
- Screenshot and video capture
- HTML reporting
- Reusable utilities and helpers

---

## Tech Stack

- Playwright
- TypeScript
- Cucumber
- Node.js
- GitHub Actions

---

## Project Structure

```text
features/
src/pages/
src/step-definitions/
src/helpers/
src/utils/
src/api/
.github/workflows/
```

---

## Installation

```bash
npm install
```

```bash
npx playwright install
```

---

## Run Tests

```bash
npm test
```

Smoke tests:

```bash
npm run test:smoke
```

Regression tests:

```bash
npm run test:regression
```

---

## CI/CD

Framework integrates with GitHub Actions for automated execution on pull requests and pushes.

---

## Reporting

Framework supports:

- HTML reports
- Screenshots on failure
- Video capture
- Trace collection

---

## Framework Design

The framework follows:

- Page Object Model
- reusable automation utilities
- scalable folder architecture
- centralized configuration
- BDD collaboration principles