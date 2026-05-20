Feature: Product Search

  @regression
  Scenario: Search for a product

    Given the user navigates to the application
    When the user searches for "Blue Top"
    Then matching products should be displayed