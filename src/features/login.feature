Feature: Verify able to checkout a product

  Scenario: Verify checkout button is visible in cart
    Given I launch the app
    When I login as a standard username
    Then I should be on the home page
    When I try to add an item to the cart
    Then I should be able to see the added item in the cart
    And I should be able to checkout the item
