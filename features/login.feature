Feature: Login functionality

  @smoke
  Scenario: Successful login

    Given the user navigates to the application
    When the user logs in with valid credentials
    Then the user should successfully login